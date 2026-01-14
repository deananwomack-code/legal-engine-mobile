# Legal Engine Mobile

A professional, production-ready mobile application for legal document management built with Expo and React Native.

## ✨ Features

- 📱 **Tab-based Navigation** - Intuitive 4-tab navigation (Home, Documents, Create, Settings)
- 📄 **Document Management** - Create, view, search, and manage legal documents
- 🎨 **Modern UI** - Professional interface following Material Design guidelines
- 🔒 **Database Integration** - Supabase backend ready for data persistence
- 🚀 **Performance Optimized** - Optimized for Android deployment
- 💪 **TypeScript** - Full type safety throughout the application
- 🛡️ **Error Handling** - Comprehensive error management and loading states
- 📦 **Reusable Components** - Production-ready component library

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Configure environment (add your Supabase credentials)
cp .env.example .env

# Start development server
npx expo start
```

For detailed setup instructions, see [QUICK_START.md](QUICK_START.md)

## 📱 Android Deployment

This app is optimized for Android deployment with:

- ✅ Proper Android configuration
- ✅ Required permissions configured
- ✅ Adaptive icons ready
- ✅ Performance optimizations
- ✅ Material Design compliance

For complete Android deployment instructions, see [ANDROID_DEPLOYMENT.md](ANDROID_DEPLOYMENT.md)

## 📋 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get started in 5 minutes
- **[ANDROID_DEPLOYMENT.md](ANDROID_DEPLOYMENT.md)** - Complete Android deployment guide
- **[OPTIMIZATION_REPORT.md](OPTIMIZATION_REPORT.md)** - Detailed optimization analysis

## 🏗️ Project Structure

```
legal-engine-mobile/
├── app/                    # Screens and routes
│   └── (tabs)/            # Tab navigation screens
├── components/            # Reusable UI components
├── config/               # App configuration
├── hooks/                # Custom React hooks
├── lib/                  # External library configs
├── services/             # API services
├── types/                # TypeScript types
└── utils/                # Utility functions
```

## 🛠️ Technology Stack

- **Framework**: Expo SDK 54
- **Language**: TypeScript
- **Navigation**: Expo Router 6
- **Database**: Supabase
- **Icons**: Lucide React Native
- **Platform**: React Native 0.81.5

## 📦 Key Components

### Screens
- **Home** - Dashboard with stats and quick actions
- **Documents** - Document list with search and filters
- **Create** - Document creation workflow
- **Settings** - User preferences and account management

### Reusable Components
- **Button** - Multi-variant button (primary, secondary, outline, danger)
- **Card** - Flexible card container
- **Input** - Form input with validation
- **LoadingScreen** - Loading state display
- **ErrorView** - Error handling display

## 🔧 Configuration

### Environment Variables

Create a `.env` file with:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EXPO_PUBLIC_APP_NAME=Legal Engine Mobile
EXPO_PUBLIC_API_URL=https://api.yourapp.com
```

### Android Configuration

Key settings in `app.json`:
- Package: `com.legalengine.mobile`
- Permissions: Internet, Storage
- Adaptive icons configured
- Splash screen optimized

## 🧪 Development

```bash
# Start development server
npx expo start

# Run on Android
npx expo run:android

# Clear cache and restart
npx expo start -c

# Type checking
npx tsc --noEmit
```

## 📈 Performance Optimizations

- ✅ Hermes engine enabled
- ✅ Optimized bundle size
- ✅ Efficient re-renders
- ✅ Proper memory management
- ✅ Image optimization strategies
- ✅ Network request optimization

## 🔐 Security Features

- ✅ Environment variables for sensitive data
- ✅ No hardcoded credentials
- ✅ Input validation and sanitization
- ✅ Secure storage patterns ready
- ✅ Type-safe API calls

## 🎯 What's Next?

1. **Database Setup** - Configure Supabase database
2. **Authentication** - Add user authentication
3. **Testing** - Test on physical Android devices
4. **Customization** - Update branding and assets
5. **Deployment** - Build and submit to Play Store

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Supabase Documentation](https://supabase.com/docs)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)

## 🤝 Contributing

This is a production-ready template. Feel free to customize and extend it for your needs.

## 📄 License

This project is available for use in your applications.

---

**Built with ❤️ using Expo and React Native**
