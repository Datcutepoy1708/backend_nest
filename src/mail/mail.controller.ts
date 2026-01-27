import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
    private readonly mailerService: MailerService,
  ) {}

  @Post()
  create(@Body() createMailDto: CreateMailDto) {
    return this.mailService.create(createMailDto);
  }

  @Get()
  findAll() {
    return this.mailService.findAll();
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  testCron(){
     console.log("Call me");
  }

  @Get('test')
  @Public()
  @ResponseMessage('Test email')
  @Cron("0 0 0 * * 0")
  async handleTestEmail() {
    const subscribersWithJobs = await this.mailService.getSubscribersWithMatchingJobs();

    // Gửi email cho từng subscriber
    for (const item of subscribersWithJobs) {
      const subs = item.subscriber;
      const jobs = item.jobs; // jobs đã được format đúng format yêu cầu

      // Gửi email nếu có jobs phù hợp
      if (jobs.length > 0) {
        await this.mailerService.sendMail({
          to: subs.email,
          from: '"Support Team" <support@example.com>',
          subject: 'Welcome to Nice App! Confirm your Email',
          template: 'job',
          context: {
            reciver: subs.name,
            jobs: jobs, // Format: [{ name, company, salary, skills }]
          },
        });
      }
    }

    return {
      message: 'Test email sent successfully',
      subscribersProcessed: subscribersWithJobs.length,
      data: subscribersWithJobs, // Trả về để test
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMailDto: UpdateMailDto) {
    return this.mailService.update(+id, updateMailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailService.remove(+id);
  } 
}
