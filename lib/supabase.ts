import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG } from '@/config/constants';

if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) {
  console.warn('Supabase credentials not configured. Please add them to your .env file.');
}

export const supabase = createClient(
  SUPABASE_CONFIG.url,
  SUPABASE_CONFIG.anonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);

export type Database = {
  public: {
    Tables: {
      documents: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          type: 'contract' | 'brief' | 'agreement' | 'analysis';
          content: string | null;
          status: 'draft' | 'active' | 'completed' | 'archived';
          file_size: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          type: 'contract' | 'brief' | 'agreement' | 'analysis';
          content?: string | null;
          status?: 'draft' | 'active' | 'completed' | 'archived';
          file_size?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          type?: 'contract' | 'brief' | 'agreement' | 'analysis';
          content?: string | null;
          status?: 'draft' | 'active' | 'completed' | 'archived';
          file_size?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};
