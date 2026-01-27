import { Controller } from '@nestjs/common';
import { HealthCheckService } from '@nestjs/terminus';
import { Get } from '@nestjs/common';
import { HealthCheck } from '@nestjs/terminus';
import { MongooseHealthIndicator } from '@nestjs/terminus';
import { Public } from 'src/decorator/customize';
@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        private db: MongooseHealthIndicator,
    ) { }
    @Get()
    @Public()
    @HealthCheck()
    check() {
        return this.health.check([
            () => this.db.pingCheck('database'),
        ]);
    }
}