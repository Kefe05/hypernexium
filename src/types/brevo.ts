export interface NewsletterSubscription {
  email: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: any;
}