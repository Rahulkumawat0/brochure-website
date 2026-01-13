# Contact Form Storage Guide

## How It Works

The contact form now uses **localStorage** to store submissions directly in the browser. This is a simple, no-backend solution that works immediately.

## Viewing Submissions

1. **Access the Admin Panel**:
   - Visit `http://localhost:5173/contact-admin` (development)
   - Or `https://yourdomain.com/contact-admin` (production)

2. **Features**:
   - View all contact form submissions
   - Export submissions as JSON file
   - Clear all submissions (use with caution)
   - Refresh to see latest submissions

## Storage Location

- **Development**: Submissions are stored in your browser's localStorage
- **Production**: Each visitor's browser stores their own submissions (if they submit the form)

## Exporting Data

1. Go to `/contact-admin`
2. Click "Export JSON" button
3. A JSON file will be downloaded with all submissions
4. The file name format: `contact_submissions_YYYY-MM-DD.json`

## JSON Format

The exported JSON file contains an array of submissions:

```json
[
  {
    "id": "1234567890",
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Example Corp",
    "country": "USA",
    "message": "Hello, I'm interested in your products...",
    "consent": true,
    "submitted_at": "2024-01-15T10:30:00.000Z"
  }
]
```

## Limitations

⚠️ **Important Notes**:

1. **Browser-Specific**: Submissions are stored per browser/device
2. **Not Shared**: Submissions from one browser won't appear in another
3. **Can Be Cleared**: Users can clear their browser data, which will remove submissions
4. **No Server Backup**: Data is only stored locally in the browser

## Production Recommendations

For a production website, consider:

### Option 1: Simple Backend API
- Create a simple Node.js/Express API
- Store submissions in a JSON file on the server
- Update `contactStorage.js` to send data to your API

### Option 2: Form Services
- **Formspree**: https://formspree.io (free tier available)
- **Netlify Forms**: If using Netlify hosting
- **EmailJS**: Send form data directly via email

### Option 3: Serverless Functions
- Use Vercel/Netlify serverless functions
- Store in a database or send via email
- Update the contact form to call the function

## Example: Updating to Use an API

To switch from localStorage to an API endpoint, update `src/lib/contactStorage.js`:

```javascript
export const contactService = {
  async submitContactForm(formData) {
    try {
      const response = await fetch('https://your-api.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};
```

## Current Implementation

The current implementation uses localStorage for simplicity. It's perfect for:
- Development and testing
- Small websites with low traffic
- Prototypes and demos
- When you want zero backend setup

For production websites with real users, consider implementing one of the options above.

