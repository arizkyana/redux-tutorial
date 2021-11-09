import { useState } from 'react';
import { useLoginDispatcher } from '@/redux/reducers/login/slices';

export default function LoginContainer() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login: { loading }, doLogin } = useLoginDispatcher();

  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="h-screen w-screen flex justify-center items-center">
      <div className="w-1/2 mx-auto space-y-4">
        <div className="w-full">
          <label htmlFor="email" className="inline-block w-full border-b border-gray-600">
            <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" id="email" placeholder="masukan@email.anda" className="px-3 py-2 w-full" />
          </label>
        </div>
        <div className="w-full">
          <label htmlFor="password" className="inline-block w-full border-b border-gray-600">
            <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" id="password" placeholder="masukan password anda" className="px-3 py-2 w-full" />
          </label>
        </div>
        <div className="w-full">
          <button type="submit" className="h-9 bg-blue-600 text-white px-3 rounded">
            {loading ? 'Mohon menunggu...' : 'Masuk'}
          </button>
        </div>
      </div>
    </form>
  );
}
