import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FileText, Search, Filter, Download } from 'lucide-react-native';

export default function DocumentsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const documents = [
    {
      id: 1,
      title: 'Service Agreement 2024',
      type: 'Contract',
      date: 'Jan 10, 2024',
      status: 'Active',
      size: '245 KB'
    },
    {
      id: 2,
      title: 'Legal Brief - Case #4421',
      type: 'Brief',
      date: 'Jan 8, 2024',
      status: 'Under Review',
      size: '1.2 MB'
    },
    {
      id: 3,
      title: 'Non-Disclosure Agreement',
      type: 'Contract',
      date: 'Jan 5, 2024',
      status: 'Signed',
      size: '180 KB'
    },
    {
      id: 4,
      title: 'Property Deed Analysis',
      type: 'Analysis',
      date: 'Dec 28, 2023',
      status: 'Completed',
      size: '890 KB'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return '#10b981';
      case 'Under Review': return '#f59e0b';
      case 'Signed': return '#3b82f6';
      case 'Completed': return '#6b7280';
      default: return '#6b7280';
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Documents</Text>
        <Text style={styles.headerSubtitle}>Manage all your legal documents</Text>

        <View style={styles.searchContainer}>
          <Search size={20} color="#6b7280" strokeWidth={2} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search documents..."
            placeholderTextColor="#9ca3af"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color="#6b7280" strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {documents.map((doc) => (
          <TouchableOpacity key={doc.id} style={styles.documentCard}>
            <View style={styles.documentIconContainer}>
              <FileText size={24} color="#2563eb" strokeWidth={2} />
            </View>

            <View style={styles.documentContent}>
              <Text style={styles.documentTitle}>{doc.title}</Text>
              <View style={styles.documentMeta}>
                <Text style={styles.documentType}>{doc.type}</Text>
                <Text style={styles.documentDivider}>•</Text>
                <Text style={styles.documentDate}>{doc.date}</Text>
                <Text style={styles.documentDivider}>•</Text>
                <Text style={styles.documentSize}>{doc.size}</Text>
              </View>
              <View style={styles.documentFooter}>
                <View style={[styles.statusBadge, { backgroundColor: `${getStatusColor(doc.status)}15` }]}>
                  <Text style={[styles.statusText, { color: getStatusColor(doc.status) }]}>
                    {doc.status}
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.downloadButton}>
              <Download size={20} color="#6b7280" strokeWidth={2} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
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
    paddingBottom: 20,
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
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
  },
  filterButton: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    gap: 12,
  },
  documentCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  documentIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  documentContent: {
    flex: 1,
    gap: 6,
  },
  documentTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    lineHeight: 20,
  },
  documentMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  documentType: {
    fontSize: 13,
    color: '#6b7280',
  },
  documentDivider: {
    fontSize: 13,
    color: '#d1d5db',
  },
  documentDate: {
    fontSize: 13,
    color: '#6b7280',
  },
  documentSize: {
    fontSize: 13,
    color: '#6b7280',
  },
  documentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  downloadButton: {
    padding: 8,
  },
});
