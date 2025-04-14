import admin from './index';

const db = admin.firestore();

export async function fetchCollection(collectionName: string): Promise<any[]> {
  try {
    const snapshot = await db.collection(collectionName).get();

    if (snapshot.empty) {
      console.log(`No data found in collection: ${collectionName}`);
      return [];
    }

    return snapshot.docs.map((doc) => ({
      id: doc.id, // Include document ID
      ...doc.data(), // Spread document fields
    }));
  } catch (error) {
    console.error('Error fetching Firestore data:', error);
    throw error;
  }
}