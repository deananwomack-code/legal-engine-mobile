# Quick Start Guide - Legal Engine Mobile

## 🚀 Getting Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Environment
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your Supabase credentials
# EXPO_PUBLIC_SUPABASE_URL=your_url
# EXPO_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### Step 3: Start Development Server
```bash
npx expo start
```

### Step 4: Test on Device
- Scan QR code with Expo Go app (quick testing)
- OR build development client for full features

## 📱 What's Included

### Features
- ✅ Tab-based navigation (Home, Documents, Create, Settings)
- ✅ Document management system
- ✅ Professional UI with Material Design
- ✅ Supabase database integration ready
- ✅ TypeScript for type safety
- ✅ Error handling and loading states
- ✅ Reusable component library
- ✅ Android optimized

### Key Improvements from Starter
1. **Architecture**: Professional tab navigation vs single screen
2. **Components**: 5 reusable components vs none
3. **Database**: Supabase integration ready vs none
4. **Error Handling**: Comprehensive vs none
5. **TypeScript**: Full type safety vs basic
6. **Documentation**: Complete guides vs basic README

## 🔧 Next Steps

### For Development
1. Add your Supabase credentials to `.env`
2. Customize app icons in `assets/images/`
3. Update app name and package in `app.json`
4. Start building your features!

### For Android Deployment
1. Read `ANDROID_DEPLOYMENT.md` for detailed instructions
2. Test on physical Android device
3. Build with EAS Build
4. Submit to Google Play Store

## 📚 Documentation

- **ANDROID_DEPLOYMENT.md** - Complete Android deployment guide
- **OPTIMIZATION_REPORT.md** - Detailed optimization report
- **README.md** - General project information

## 🆘 Need Help?

### Common Commands
```bash
# Start development server
npx expo start

# Clear cache and restart
npx expo start -c

# Run on Android emulator
npx expo run:android

# Build for Android
eas build --platform android
```

### Common Issues
1. **"Supabase not configured"** - Add credentials to `.env`
2. **Build fails** - Run `npm install` and clear cache
3. **App crashes** - Check environment variables are set

### Resources
- Expo Documentation: https://docs.expo.dev
- React Native Docs: https://reactnative.dev
- Supabase Docs: https://supabase.com/docs

## 🎯 Project Structure

```
legal-engine-mobile/
├── app/                     # Screens and routing
│   ├── (tabs)/             # Tab navigation screens
│   │   ├── index.tsx       # Home screen
│   │   ├── documents.tsx   # Documents screen
│   │   ├── create.tsx      # Create screen
│   │   └── settings.tsx    # Settings screen
│   ├── _layout.tsx         # Root layout
│   └── index.tsx           # Entry point
├── components/             # Reusable components
│   ├── Button.tsx          # Button component
│   ├── Card.tsx            # Card component
│   ├── Input.tsx           # Input component
│   ├── LoadingScreen.tsx   # Loading state
│   └── ErrorView.tsx       # Error display
├── config/                 # Configuration
│   └── constants.ts        # App constants
├── hooks/                  # Custom React hooks
│   └── useDocuments.ts     # Document data hook
├── lib/                    # Library configs
│   └── supabase.ts         # Supabase client
├── services/               # API services
│   └── documentService.ts  # Document operations
├── types/                  # TypeScript types
│   └── env.d.ts           # Environment types
├── utils/                  # Utility functions
│   ├── formatters.ts      # Data formatters
│   └── validation.ts      # Input validation
├── .env.example           # Environment template
├── app.json               # Expo configuration
└── package.json           # Dependencies
```

## 🎨 Customization

### Colors
The app uses a blue color scheme. To change:
- Primary color: `#2563eb` (blue)
- Update in component styles throughout the app

### App Name & Identity
1. Update `name` and `slug` in `app.json`
2. Update package name in `app.json` android section
3. Replace icons in `assets/images/`

### Adding Features
1. Create new screens in `app/`
2. Add to tab navigation in `app/(tabs)/_layout.tsx`
3. Use existing components from `components/`
4. Add services in `services/` as needed

## ✨ What Makes This Production-Ready

1. **Professional Architecture**: Not a starter template
2. **Error Handling**: Comprehensive error management
3. **Type Safety**: Full TypeScript coverage
4. **Performance**: Optimized for mobile
5. **Documentation**: Complete guides included
6. **Best Practices**: Follows React Native standards
7. **Android Optimized**: Ready for Play Store
8. **Scalable**: Easy to extend and maintain

## 🚢 Ready to Deploy?

Follow the Android deployment guide:
```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure build
eas build:configure

# Build for Android
eas build --platform android
```

---

**You're all set!** Start developing with `npx expo start` 🎉
