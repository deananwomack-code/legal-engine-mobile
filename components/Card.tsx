import { View, StyleSheet, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'elevated' | 'outlined' | 'flat';
  padding?: 'none' | 'small' | 'medium' | 'large';
  style?: ViewStyle;
}

export function Card({
  children,
  variant = 'elevated',
  padding = 'medium',
  style
}: CardProps) {
  return (
    <View
      style={[
        styles.card,
        styles[`card_${variant}`],
        styles[`card_padding_${padding}`],
        style,
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  card_elevated: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  card_outlined: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  card_flat: {
    backgroundColor: '#f9fafb',
  },
  card_padding_none: {
    padding: 0,
  },
  card_padding_small: {
    padding: 12,
  },
  card_padding_medium: {
    padding: 16,
  },
  card_padding_large: {
    padding: 24,
  },
});
