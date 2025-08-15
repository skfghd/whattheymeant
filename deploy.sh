#!/bin/bash

# Firebase Deployment Script for Korean Workplace Translator
# This script builds and deploys the entire application to Firebase

set -e

echo "🚀 Starting Firebase deployment for Korean Workplace Translator..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI is not installed. Please install it first:"
    echo "npm install -g firebase-tools"
    exit 1
fi

# Check if logged in to Firebase
if ! firebase projects:list &> /dev/null; then
    echo "❌ Not logged in to Firebase. Please login first:"
    echo "firebase login"
    exit 1
fi

# Install dependencies for functions
echo "📦 Installing Functions dependencies..."
cd functions
npm install
cd ..

# Build the client application
echo "🏗️ Building client application..."
npm run build

# Ensure the build output is in the correct location
if [ ! -d "dist/public" ]; then
    echo "❌ Build output not found in dist/public"
    echo "Please check your build configuration"
    exit 1
fi

# Deploy to Firebase
echo "🚀 Deploying to Firebase..."
firebase deploy

echo "✅ Deployment completed successfully!"
echo "🌐 Your app should be available at:"
echo "https://$(firebase use | cut -d' ' -f4).web.app"
echo ""
echo "📊 To view your project dashboard:"
echo "https://console.firebase.google.com/project/$(firebase use | cut -d' ' -f4)"
echo ""
echo "📝 Don't forget to:"
echo "1. Update your domain in .firebaserc and functions environment"
echo "2. Configure Google AdSense for your domain"
echo "3. Set up custom domain if needed"
echo "4. Monitor usage in Firebase Console"