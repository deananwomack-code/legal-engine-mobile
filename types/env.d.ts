declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_SUPABASE_URL: string;
      EXPO_PUBLIC_SUPABASE_ANON_KEY: string;
      EXPO_PUBLIC_APP_NAME: string;
      EXPO_PUBLIC_API_URL: string;
    }
  }
}

export {};
