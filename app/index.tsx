import { useEffect, useCallback } from 'react';
import { useRouter } from 'expo-router';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export default function Index() {
  const router = useRouter();

  const navigateToTabs = useCallback(() => {
    router.replace('/(tabs)');
  }, [router]);

  useEffect(() => {
    navigateToTabs();
  }, [navigateToTabs]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2563eb" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});
