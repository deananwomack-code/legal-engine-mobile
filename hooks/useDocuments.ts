import { useState, useEffect } from 'react';
import { documentService, Document } from '@/services/documentService';

export function useDocuments(userId: string | null) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDocuments = async () => {
    if (!userId) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await documentService.getAll(userId);
      setDocuments(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch documents');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, [userId]);

  const createDocument = async (
    document: Omit<Document, 'id' | 'created_at' | 'updated_at'>
  ) => {
    try {
      const newDoc = await documentService.create(document);
      setDocuments((prev) => [newDoc, ...prev]);
      return newDoc;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to create document');
    }
  };

  const updateDocument = async (id: string, updates: Partial<Document>) => {
    try {
      const updated = await documentService.update(id, updates);
      setDocuments((prev) => prev.map((doc) => (doc.id === id ? updated : doc)));
      return updated;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to update document');
    }
  };

  const deleteDocument = async (id: string) => {
    try {
      await documentService.delete(id);
      setDocuments((prev) => prev.filter((doc) => doc.id !== id));
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to delete document');
    }
  };

  return {
    documents,
    loading,
    error,
    refetch: fetchDocuments,
    createDocument,
    updateDocument,
    deleteDocument,
  };
}
