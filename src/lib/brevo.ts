import { TransactionalEmailsApi, ContactsApi, SendSmtpEmail, CreateContact } from '@getbrevo/brevo';

// Initialize Brevo API clients
const apiInstance = new TransactionalEmailsApi();
const contactsApi = new ContactsApi();

// Configure API keys
(apiInstance as any).authentications.apiKey.apiKey = process.env.BREVO_API_KEY!;
(contactsApi as any).authentications.apiKey.apiKey = process.env.BREVO_API_KEY!;

export interface NewsletterSubscription {
  email: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

// Subscribe user to newsletter
export async function subscribeToNewsletter(data: NewsletterSubscription) {
  try {
    const createContact = new CreateContact();
    createContact.email = data.email;
    createContact.listIds = [parseInt(process.env.BREVO_NEWSLETTER_LIST_ID!)];
    createContact.updateEnabled = true;

    const result = await contactsApi.createContact(createContact);
    return { success: true, data: result };
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    
    // Handle case where contact already exists
    if (error.status === 400 && error.body?.message?.includes('Contact already exist')) {
      return { success: true, message: 'Already subscribed' };
    }
    
    return { 
      success: false, 
      error: error.body?.message || 'Failed to subscribe to newsletter' 
    };
  }
}

// Send contact form email
export async function sendContactEmail(data: ContactFormData) {
  try {
    const sendSmtpEmail = new SendSmtpEmail();
    
    sendSmtpEmail.to = [{ 
      email: process.env.BREVO_CONTACT_EMAIL!,
      name: 'Hyper Nexium Team'
    }];
    
    sendSmtpEmail.sender = { 
      email: 'noreply@hypernexium.com',
      name: 'Hyper Nexium Website'
    };
    
    sendSmtpEmail.replyTo = {
      email: data.email,
      name: data.fullName
    };
    
    sendSmtpEmail.subject = `New Contact Form Submission from ${data.fullName}`;
    
    sendSmtpEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #495057; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
          <h3 style="color: #495057; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; color: #212529;">${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
          <p>This email was sent from the Hyper Nexium website contact form.</p>
          <p>Timestamp: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return { success: true, data: result };
  } catch (error: any) {
    console.error('Contact email error:', error);
    return { 
      success: false, 
      error: error.body?.message || 'Failed to send contact email' 
    };
  }
}

// Send confirmation email to user
export async function sendContactConfirmation(data: ContactFormData) {
  try {
    const sendSmtpEmail = new SendSmtpEmail();
    
    sendSmtpEmail.to = [{ 
      email: data.email,
      name: data.fullName
    }];
    
    sendSmtpEmail.sender = { 
      email: 'noreply@hypernexium.com',
      name: 'Hyper Nexium'
    };
    
    sendSmtpEmail.subject = 'Thank you for contacting Hyper Nexium';
    
    sendSmtpEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; padding: 20px; background-color: #007bff; color: white; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0;">Thank You!</h1>
        </div>
        
        <div style="padding: 30px; background-color: #ffffff; border: 1px solid #dee2e6; border-top: none; border-radius: 0 0 8px 8px;">
          <p>Dear ${data.fullName},</p>
          
          <p>Thank you for reaching out to Hyper Nexium. We have received your message and our team will get back to you within 24 hours.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Your Message</h3>
            <p style="color: #6c757d; font-style: italic;">"${data.message}"</p>
          </div>
          
          <p>In the meantime, feel free to explore our services and solutions on our website.</p>
          
          <p>Best regards,<br>
          <strong>The Hyper Nexium Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">
          
          <div style="font-size: 12px; color: #6c757d;">
            <p><strong>Contact Information:</strong></p>
            <p>Email: sales@hypernexium.com</p>
            <p>Phone (Ghana): +233 500 610 405</p>
            <p>Phone (Nigeria): +234 903 204 8604</p>
          </div>
        </div>
      </div>
    `;

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return { success: true, data: result };
  } catch (error: any) {
    console.error('Confirmation email error:', error);
    return { 
      success: false, 
      error: error.body?.message || 'Failed to send confirmation email' 
    };
  }
}