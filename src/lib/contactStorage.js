// Simple JSON storage service for contact form submissions
// Stores submissions in localStorage and provides export functionality

const STORAGE_KEY = 'rdy_contact_submissions';

// Get all submissions from storage
export const getSubmissions = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading submissions from storage:', error);
    return [];
  }
};

// Save a new submission
export const saveSubmission = (formData) => {
  try {
    const submissions = getSubmissions();
    const newSubmission = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      country: formData.country.trim(),
      message: formData.message.trim(),
      consent: formData.consent,
      submitted_at: new Date().toISOString(),
    };
    
    submissions.push(newSubmission);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
    
    return { success: true, data: newSubmission };
  } catch (error) {
    console.error('Error saving submission:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to save submission' 
    };
  }
};

// Export submissions as JSON file
export const exportSubmissions = () => {
  try {
    const submissions = getSubmissions();
    const dataStr = JSON.stringify(submissions, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contact_submissions_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return true;
  } catch (error) {
    console.error('Error exporting submissions:', error);
    return false;
  }
};

// Clear all submissions (use with caution)
export const clearSubmissions = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing submissions:', error);
    return false;
  }
};

// Contact form submission service
export const contactService = {
  // Submit contact form data
  async submitContactForm(formData) {
    // Simulate async operation
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = saveSubmission(formData);
        resolve(result);
      }, 500); // Small delay to simulate network request
    });
  },
};

