# Brevo Integration Setup

This project uses Brevo (formerly Sendinblue) for email marketing and transactional emails.

## Setup Instructions

### 1. Create a Brevo Account
1. Go to [Brevo](https://www.brevo.com/) and create an account
2. Verify your email and complete the setup process

### 2. Get Your API Key
1. Log in to your Brevo dashboard
2. Go to **Settings** → **API Keys**
3. Create a new API key with the following permissions:
   - Send transactional emails
   - Manage contacts and lists
4. Copy the API key

### 3. Create a Newsletter List
1. In your Brevo dashboard, go to **Contacts** → **Lists**
2. Create a new list for your newsletter subscribers
3. Note down the List ID (you can find it in the list settings)

### 4. Configure Environment Variables
Update your `.env.local` file with the following variables:

```env
# Brevo API Configuration
BREVO_API_KEY=your_actual_brevo_api_key_here
BREVO_NEWSLETTER_LIST_ID=your_newsletter_list_id_here
BREVO_CONTACT_EMAIL=sales@hypernexium.com
```

### 5. Verify Domain (Optional but Recommended)
1. In Brevo dashboard, go to **Settings** → **Senders & IP**
2. Add and verify your domain (hypernexium.com)
3. This improves email deliverability

## Features Implemented

### Newsletter Subscription
- **Endpoint**: `POST /api/newsletter`
- **Component**: `src/components/Newsletter.tsx`
- Automatically adds subscribers to your Brevo contact list
- Handles duplicate subscriptions gracefully
- Shows success/error messages to users

### Contact Form
- **Endpoint**: `POST /api/contact`
- **Component**: `src/app/contact/page.tsx`
- Sends contact form submissions to your team email
- Sends confirmation email to the user
- Includes proper error handling and user feedback

## Email Templates

The integration includes professionally designed email templates:

### Contact Form Notification (to team)
- Clean, structured layout
- Contact details prominently displayed
- Full message content with proper formatting
- Timestamp and source information

### Contact Form Confirmation (to user)
- Branded confirmation email
- Acknowledges receipt of their message
- Includes contact information
- Professional and reassuring tone

## Testing

To test the integration:

1. **Newsletter**: Try subscribing with different email addresses
2. **Contact Form**: Submit a test message and check both:
   - Team email receives the notification
   - User receives the confirmation email

## Troubleshooting

### Common Issues

1. **API Key Issues**
   - Ensure the API key has the correct permissions
   - Check that the key is properly set in environment variables

2. **List ID Issues**
   - Verify the newsletter list ID is correct
   - Make sure the list exists in your Brevo account

3. **Email Delivery Issues**
   - Check your Brevo sending reputation
   - Verify your domain if possible
   - Check spam folders

### Error Handling

The integration includes comprehensive error handling:
- Network errors are caught and displayed to users
- API errors are logged for debugging
- User-friendly error messages are shown
- Graceful fallbacks for non-critical failures

## Security Considerations

- API keys are stored securely in environment variables
- Input validation is performed on both client and server
- Email content is sanitized to prevent XSS
- Rate limiting should be considered for production use

## Next Steps

1. Set up your Brevo account and configure the environment variables
2. Test both newsletter and contact form functionality
3. Customize email templates if needed
4. Consider adding rate limiting for production
5. Monitor email delivery and engagement metrics in Brevo dashboard