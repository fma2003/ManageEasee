import { useEffect, useState } from 'react';
import {auth} from '../utile/firebase/config'
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useCreateUserWithEmailAndPassword} from  'react-firebase-hooks/auth'
import 'tailwindcss/tailwind.css';

const Settings = () => {
  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (user === null) {
      router.push('/login');
    }
  }, [user, router]);

  if (!isClient) {
    return null;
  }

  const createEmployeeAccount = async () => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      await auth.collection('employees').doc(user.uid).set({
        email: user.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setEmail('');
      setPassword('');
      setSuccess('Employee account created successfully!');
      setError('');
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Employee Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Employee Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
      </div>
      <button
        onClick={createEmployeeAccount}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create Employee Account
      </button>
    </div>
  );
};

export default Settings;
