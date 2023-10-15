import { NextApiRequest, NextApiResponse } from 'next';
import sgMail, { MailDataRequired } from '@sendgrid/mail';

sgMail.setApiKey(process.env.SG_API_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email, message } = req.body;
    const { FROM_EMAIL, TO_EMAIL } = process.env;

    if (!FROM_EMAIL) {
      throw new Error('FROM_EMAIL environment variable is not defined.');
    }

    const msg: MailDataRequired = {
      to: TO_EMAIL || '',
      from: FROM_EMAIL,  // FROM_EMAIL is guaranteed to be defined here
      subject: 'Next.js contact form',
      html: `<p>Hello Nikhil and ${name}</p>`,
    };

    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
