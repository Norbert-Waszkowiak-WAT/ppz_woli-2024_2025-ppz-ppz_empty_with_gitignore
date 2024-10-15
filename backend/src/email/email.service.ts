import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import path from 'path';
import * as fs from 'fs';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  private getTemplate(templateName: string, replacements: { [key: string]: string }): string {
    // Get the path to the template file
    const templatePath = path.join(__dirname, 'templates', `${templateName}.html`);

    // Read the template file from the file system
    let templateContent = fs.readFileSync(templatePath, 'utf8');

    // Replace placeholders (e.g., {{name}}, {{verificationLink}})
    for (const key in replacements) {
      templateContent = templateContent.replace(new RegExp(`{{${key}}}`, 'g'), replacements[key]);
    }

    return templateContent;
  }

  // Example function to send a verification email
  async sendVerificationEmail(to: string, name: string, verificationLink: string) {
    // Load the template and inject the dynamic data
    const emailContent = this.getTemplate('verification', {
      name,                 // The name to inject in the email
      verificationLink,      // The dynamic verification link
      appName: 'Chronovia',  // Your app's name (this can be static)
    });

    // Set up the email options
    const mailOptions = {
      from: process.env.MAIL_FROM,  // e.g., 'NoReply <noreply@yourapp.com>'
      to,
      subject: 'Verify Your Email',
      html: emailContent,           // The rendered HTML content
    };
      const info = await this.transporter.sendMail(mailOptions);  
  }
}

