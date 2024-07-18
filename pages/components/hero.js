import { useState } from 'react';
import axios from 'axios';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/subscribe', { email });
      console.log(response.data);
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-end pr-8">
      <div className="text-right">
        <img src="/logo.png" alt="HRVST Logo" className="w-1/3 mb-8" />
        <h2 className="text-xl mb-4">Record Labels:</h2>
        <p className="mb-8">Unlearn:Records, Late Night Munchies, Admit One Records, (83), Slabbed Out Digital, DT Weapons</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;