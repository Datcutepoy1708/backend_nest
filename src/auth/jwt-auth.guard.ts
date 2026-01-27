import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY,IS_PUBLIC_PERMISSION } from 'src/decorator/customize';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }

  handleRequest(err, user, info, context: ExecutionContext) {
     const isSkipPermission = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_PERMISSION, [
      context.getHandler(),
      context.getClass(),
    ]);
    // Kiểm tra lỗi hoặc không có user
    if (err || !user) {
      throw err || new UnauthorizedException(
        "Token không hợp lệ or không có token ở Bear Token ở Header Request"
      );
    }

    // ✅ Lấy request từ context, KHÔNG dùng biến global request
    const request = context.switchToHttp().getRequest();
    
    // ✅ Lấy method và endpoint an toàn
    const targetMethod = request.method;
    const targetEndPoint = request.route?.path || request.url || '';

    // Check permissions
    const permissions = user?.permission ?? []; // ⚠️ Sửa từ permissions → permission
    
    // ✅ Kiểm tra auth endpoints trước (an toàn với undefined)
    if (targetEndPoint?.startsWith("/api/v1/auth")) {
      return user;
    }

    // Tìm permission phù hợp
    const isExist = permissions.find(permission =>
      targetMethod === permission.method &&
      targetEndPoint === permission.apiPath
    );

    if (!isExist && !isSkipPermission) {
      throw new ForbiddenException(
        `Bạn không có quyền truy cập endpoint: ${targetMethod} ${targetEndPoint}`
      );
    }

    return user;
  }
}