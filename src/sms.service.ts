/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class SmsService {
  private client: Twilio;

  constructor() {
    this.client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  }

  async sendSms(to: string, message: string) {
    try {
      const result = await this.client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: to,
      });

      console.log(result.sid);
    } catch (error) {
      console.error(error);
    }
  }
}
