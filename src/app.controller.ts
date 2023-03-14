import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { SmsService } from './sms.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly smsService: SmsService,
  ) {}

  @Post('sms')
  async sendSms(@Body('to') to: string, @Body('message') message: string) {
    await this.smsService.sendSms(to, message);

    return { message: 'SMS sent successfully' };
  }
}
