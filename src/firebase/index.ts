import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: "https://verover-2a7a4-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

export default admin;