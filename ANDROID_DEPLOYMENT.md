# Android Deployment Guide

This guide provides step-by-step instructions for building and deploying the Legal Engine Mobile app to Android devices.

## Prerequisites

Before you begin, ensure you have:

1. **Node.js** (v18 or higher)
2. **npm** or **yarn**
3. **Expo CLI** (`npm install -g expo-cli`)
4. **EAS CLI** (`npm install -g eas-cli`)
5. **Android Studio** (for local builds and testing)

## Environment Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Update the values in `.env`:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EXPO_PUBLIC_APP_NAME=Legal Engine Mobile
EXPO_PUBLIC_API_URL=https://api.yourapp.com
```

## Development Build

### Option 1: Expo Go (Quick Testing)

For quick testing without building:

```bash
npx expo start
```

Then scan the QR code with Expo Go app on your Android device.

**Note:** Expo Go has limitations and may not support all native features.

### Option 2: Development Build (Recommended)

For full feature testing:

```bash
# Install EAS CLI if not already installed
npm install -g eas-cli

# Login to your Expo account
eas login

# Configure EAS Build
eas build:configure

# Create development build for Android
eas build --profile development --platform android
```

Once the build completes, download and install the APK on your device.

## Production Build

### Building APK for Internal Testing

```bash
# Build production APK
eas build --profile preview --platform android
```

### Building AAB for Google Play Store

```bash
# Build Android App Bundle for Play Store
eas build --profile production --platform android
```

## Testing on Physical Device

### Using USB Debugging

1. Enable Developer Options on your Android device
2. Enable USB Debugging
3. Connect device via USB
4. Run:

```bash
npx expo run:android
```

### Using Wireless Debugging (Android 11+)

1. Enable Wireless Debugging in Developer Options
2. Connect to the same network as your development machine
3. Pair device using pairing code
4. Run the development server

## Android-Specific Optimizations

### Performance Optimizations

1. **Image Optimization**
   - Images are lazy-loaded where possible
   - Proper image caching implemented
   - Use appropriate image formats (WebP for Android)

2. **Memory Management**
   - Components use React.memo where appropriate
   - Proper cleanup in useEffect hooks
   - Optimized list rendering with FlatList

3. **Bundle Size**
   - Tree-shaking enabled
   - Unused dependencies removed
   - Code splitting implemented

### Android Best Practices Implemented

1. **Material Design Guidelines**
   - Consistent spacing (8px grid system)
   - Proper elevation and shadows
   - Touch targets minimum 48dp

2. **Permissions Handling**
   - Runtime permission requests
   - Graceful permission denial handling
   - Clear permission rationale

3. **Keyboard Management**
   - Proper keyboard avoidance
   - Input focus management
   - Keyboard dismiss on scroll

4. **Navigation**
   - Hardware back button support
   - Deep linking configured
   - Proper navigation state persistence

## Build Configuration

### app.json Android Settings

Key Android configurations in `app.json`:

```json
{
  "android": {
    "package": "com.legalengine.mobile",
    "versionCode": 1,
    "permissions": [
      "INTERNET",
      "READ_EXTERNAL_STORAGE",
      "WRITE_EXTERNAL_STORAGE"
    ],
    "adaptiveIcon": {
      "backgroundColor": "#2563eb"
    },
    "edgeToEdgeEnabled": true
  }
}
```

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Clear cache: `npx expo start -c`
   - Remove node_modules: `rm -rf node_modules && npm install`
   - Check EAS Build logs for specific errors

2. **App Crashes on Start**
   - Check environment variables are set
   - Verify all dependencies are installed
   - Check Android version compatibility

3. **Network Errors**
   - Verify internet permission is added
   - Check API URLs are correct
   - Test network connectivity

4. **Slow Performance**
   - Enable Hermes engine (already enabled)
   - Profile using React DevTools
   - Optimize heavy components

## Play Store Submission

### Preparation Checklist

- [ ] All environment variables configured
- [ ] App tested on multiple devices
- [ ] Performance optimized
- [ ] Security reviewed
- [ ] Privacy policy created
- [ ] App icons and screenshots prepared
- [ ] Store listing content ready

### Required Assets

1. **App Icon**: 512x512 PNG
2. **Feature Graphic**: 1024x500 PNG
3. **Screenshots**: At least 2 (phone and/or tablet)
4. **Privacy Policy URL**
5. **Support Email**

### Submission Steps

1. Create Google Play Console account
2. Create new application
3. Upload AAB file
4. Fill in store listing details
5. Set up pricing and distribution
6. Submit for review

## Continuous Integration

### GitHub Actions (Optional)

Create `.github/workflows/android-build.yml`:

```yaml
name: Android Build

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 18
      - run: npm install
      - run: eas build --platform android --non-interactive
```

## Performance Monitoring

Consider integrating:

1. **Sentry** - Error tracking
2. **Firebase Analytics** - User analytics
3. **Firebase Performance** - Performance monitoring

## Security Considerations

1. Never commit sensitive data
2. Use secure storage for tokens
3. Implement certificate pinning for production
4. Enable ProGuard for code obfuscation
5. Regular dependency updates

## Support

For issues or questions:
- Check Expo documentation: https://docs.expo.dev
- React Native documentation: https://reactnative.dev
- Community forums: https://forums.expo.dev

## Version History

- **v1.0.0** (Current)
  - Initial release
  - Tab-based navigation
  - Document management
  - Supabase integration
