import { Platform } from 'react-native';

export const APP_NAME = process.env.EXPO_PUBLIC_APP_NAME || 'Legal Engine Mobile';

export const API_CONFIG = {
  baseUrl: process.env.EXPO_PUBLIC_API_URL || 'https://api.legalengine.app',
  timeout: 30000,
};

export const SUPABASE_CONFIG = {
  url: process.env.EXPO_PUBLIC_SUPABASE_URL || '',
  anonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '',
};

export const PLATFORM_CONFIG = {
  isWeb: Platform.OS === 'web',
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};

export const STORAGE_KEYS = {
  USER_TOKEN: '@legal_engine_user_token',
  USER_DATA: '@legal_engine_user_data',
  THEME: '@legal_engine_theme',
  ONBOARDING_COMPLETE: '@legal_engine_onboarding',
};

export const DOCUMENT_TYPES = {
  CONTRACT: 'contract',
  BRIEF: 'brief',
  AGREEMENT: 'agreement',
  ANALYSIS: 'analysis',
} as const;

export const STATUS_COLORS = {
  active: '#10b981',
  pending: '#f59e0b',
  completed: '#6b7280',
  draft: '#3b82f6',
  archived: '#9ca3af',
} as const;
