import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { User, Bell, Lock, HelpCircle, Info, ChevronRight, LogOut } from 'lucide-react-native';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [biometricsEnabled, setBiometricsEnabled] = useState(false);

  const settingsSections = [
    {
      title: 'Account',
      items: [
        { id: 'profile', label: 'Profile Settings', icon: User, type: 'navigation' },
        { id: 'notifications', label: 'Notifications', icon: Bell, type: 'toggle', value: notificationsEnabled, onToggle: setNotificationsEnabled },
        { id: 'security', label: 'Security & Privacy', icon: Lock, type: 'toggle', value: biometricsEnabled, onToggle: setBiometricsEnabled },
      ]
    },
    {
      title: 'Support',
      items: [
        { id: 'help', label: 'Help Center', icon: HelpCircle, type: 'navigation' },
        { id: 'about', label: 'About Legal Engine', icon: Info, type: 'navigation' },
      ]
    }
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
        <Text style={styles.headerSubtitle}>Manage your preferences</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <User size={32} color="#2563eb" strokeWidth={2} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Legal Professional</Text>
            <Text style={styles.profileEmail}>user@legalengine.app</Text>
          </View>
        </View>

        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.settingsGroup}>
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                const isLast = itemIndex === section.items.length - 1;

                return (
                  <TouchableOpacity
                    key={item.id}
                    style={[styles.settingItem, !isLast && styles.settingItemBorder]}>
                    <View style={styles.settingItemLeft}>
                      <View style={styles.settingIconContainer}>
                        <Icon size={20} color="#6b7280" strokeWidth={2} />
                      </View>
                      <Text style={styles.settingLabel}>{item.label}</Text>
                    </View>

                    {item.type === 'toggle' && (
                      <Switch
                        value={item.value}
                        onValueChange={item.onToggle}
                        trackColor={{ false: '#d1d5db', true: '#93c5fd' }}
                        thumbColor={item.value ? '#2563eb' : '#f3f4f6'}
                      />
                    )}

                    {item.type === 'navigation' && (
                      <ChevronRight size={20} color="#9ca3af" strokeWidth={2} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color="#dc2626" strokeWidth={2} />
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Legal Engine Mobile v1.0.0</Text>
          <Text style={styles.footerText}>© 2024 All rights reserved</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#6b7280',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    gap: 24,
  },
  profileCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    flex: 1,
    gap: 4,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  profileEmail: {
    fontSize: 14,
    color: '#6b7280',
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    paddingHorizontal: 4,
  },
  settingsGroup: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  settingItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  settingIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111827',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fecaca',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  logoutButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#dc2626',
  },
  footer: {
    alignItems: 'center',
    gap: 4,
    paddingVertical: 16,
  },
  footerText: {
    fontSize: 12,
    color: '#9ca3af',
  },
});
