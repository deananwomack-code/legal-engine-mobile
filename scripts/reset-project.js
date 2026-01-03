const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const appDir = path.join(projectRoot, 'app');
const appExampleDir = path.join(projectRoot, 'app-example');

if (!fs.existsSync(appDir)) {
  console.log('No app directory found. Nothing to reset.');
  process.exit(0);
}

if (fs.existsSync(appExampleDir)) {
  console.error('app-example already exists. Please remove it before resetting the project.');
  process.exit(1);
}

fs.renameSync(appDir, appExampleDir);
fs.mkdirSync(appDir);

const layoutContent = `
import { Stack } from 'expo-router';

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
`.trimStart();

const indexContent = `
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blank project</Text>
      <Text style={styles.subtitle}>Start building your app by editing app/index.tsx</Text>
      <Link href="/" style={styles.link}>
        Go to home
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
  },
  link: {
    fontSize: 16,
    color: '#2563eb',
    textAlign: 'center',
  },
});
`.trimStart();

fs.writeFileSync(path.join(appDir, '_layout.tsx'), layoutContent);
fs.writeFileSync(path.join(appDir, 'index.tsx'), indexContent);

console.log('Starter moved to app-example/. New blank app/ folder created.');
