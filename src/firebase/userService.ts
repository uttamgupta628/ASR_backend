import admin from '../firebase/index'; // Adjust path if needed

interface CreateUserProps {
  email: string;
  password: string;
  displayName: string;
}

export const createUser = async ({ email, password, displayName }: CreateUserProps) => {
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName,
      emailVerified: false,
      disabled: false,
    });

    console.log("✅ User created successfully:", userRecord.uid);
    return userRecord;
  } catch (error) {
    console.error("❌ Error creating user:", error);
    throw error;
  }
};
