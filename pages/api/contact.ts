import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailService } from '../../lib/emailService';
import { EmailData, EmailResponse } from '../../types/email';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const data = req.body as EmailData;

    // Validate input
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email and message',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    const emailService = new EmailService();
    const success = await emailService.sendEmail(data);

    if (success) {
      return res.status(200).json({
        success: true,
        message: 'Email sent successfully',
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Failed to send email',
      });
    }
  } catch (error) {
    console.error('Error in contact API:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
} 