import Mailjet from 'node-mailjet';
import { EmailData } from '../types/email';

export class EmailService {
  private mailjet: Mailjet;

  constructor() {
    if (!process.env.MAILJET_API_KEY || !process.env.MAILJET_API_SECRET) {
      throw new Error('Mailjet credentials are not configured');
    }

    this.mailjet = new Mailjet({
      apiKey: process.env.MAILJET_API_KEY,
      apiSecret: process.env.MAILJET_API_SECRET,
    });
  }

  async sendEmail(data: EmailData): Promise<boolean> {
    try {
      const mailData = {
        Messages: [
          {
            From: {
              Email: process.env.MAILJET_SENDER_EMAIL,
              Name: process.env.MAILJET_SENDER_NAME,
            },
            To: [
              {
                Email: process.env.MAILJET_SENDER_EMAIL,
                Name: process.env.MAILJET_SENDER_NAME,
              },
            ],
            Subject: `Portfolio Contact from ${data.name}`,
            HTMLPart: `
              <h3>New Contact Message</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Message:</strong></p>
              <p>${data.message.replace(/\n/g, '<br>')}</p>
            `,
          },
        ],
      };

      const result = await this.mailjet.post('send', { version: 'v3.1' }).request(mailData);
      console.log('Email sent successfully:', result.body);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      if (error instanceof Error) {
        console.error('Error details:', error.message);
        console.error('Error stack:', error.stack);
      }
      return false;
    }
  }
} 