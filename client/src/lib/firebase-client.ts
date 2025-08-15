// Firebase client configuration for Korean Workplace Translator
// This replaces the original queryClient to work with Firebase Functions

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api'  // Firebase Functions endpoint
  : 'http://localhost:5001/your-firebase-project-id/asia-northeast3/api'; // Local emulator

export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include', // Important for session cookies
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// Translation function for Firebase
export async function translateText(text: string, category: string) {
  return apiRequest('/translate', {
    method: 'POST',
    body: JSON.stringify({ text, category }),
  });
}

// Analytics function
export async function getAnalytics() {
  return apiRequest('/analytics');
}

// Health check function
export async function healthCheck() {
  return apiRequest('/health');
}