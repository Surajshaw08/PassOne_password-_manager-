import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Save, Clipboard } from 'lucide-react';

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [url, setUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [savedData, setSavedData] = useState([]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSave = async () => {
    if (url && username && password) {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5000/api/passwords', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ url, username, password }),
        });

        if (!res.ok) throw new Error('Failed to save password');

        const data = await res.json();
        setSavedData((prevData) => [...prevData, data]);
        setUrl('');
        setUsername('');
        setPassword('');
      } catch (error) {
        console.error('Error saving data:', error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5000/api/passwords', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error('Failed to fetch passwords');

        const data = await res.json();
        setSavedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5000/api/passwords/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error('Failed to delete password');

      setSavedData((prevData) => prevData.filter((data) => data._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className='bg-green-50 min-h-screen py-10 overflow-y-auto'>
      <div className='mx-auto max-w-4xl w-full p-6 bg-green-50 rounded-lg'>
        <div className='mx-auto max-w-4xl w-full p-6 bg-green-50 rounded-lg'>
          <h1 className='text-green-600 text-3xl md:text-4xl font-bold text-center'>
            <lord-icon
              className='h-10 w-10'
              src="https://cdn.lordicon.com/swohpbwe.json"
              trigger="loop"
              stroke="bold"
              colors="primary:#000000,secondary:#f24c00,tertiary:#16c72e,quaternary:#000000"
            ></lord-icon>
            &lt;<span className='text-black'>Pass</span>
            <span className="text-green-400">One</span>/&gt;
          </h1>
        </div>
        <p className='text-center mb-6 font-bold'>Your own Password Manager</p>

        <div className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Enter website URL'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className='border-2 border-green-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full'
          />

          <div className='flex flex-col md:flex-row gap-4'>
            <input
              type='text'
              placeholder='Enter Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='border-2 border-green-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-1/2'
            />

            <div className='relative w-full md:w-1/2'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border-2 border-green-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full'
              />
              {showPassword ? (
                <EyeOff
                  className='absolute right-3 top-2.5 text-gray-400 cursor-pointer'
                  size={20}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <Eye
                  className='absolute right-3 top-2.5 text-gray-400 cursor-pointer'
                  size={20}
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>

          <div className='flex justify-center'>
            <button
              onClick={handleSave}
              className='flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition w-full md:w-40'
            >
              <Save size={18} />
              Save
            </button>
          </div>

          {savedData.length > 0 ? (
            <div className="mt-6 overflow-x-auto rounded-b-md">
              <div className='bg-green-600 rounded-full p-1 flex justify-center gap-5 mb-4'>
                <h2 className="text-xl font-bold mb-2 text-white">Your Passwords</h2>
              </div>
              <table className="w-full table-auto border-collapse border border-green-300">
                <thead>
                  <tr className="bg-green-700 text-white rounded-b-md">
                    <th className="p-3 text-center">Site</th>
                    <th className="p-3 text-center">Username</th>
                    <th className="p-3 text-center">Password</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {savedData.map((data) => (
                    <tr key={data._id} className="bg-green-100 border-t border-green-300">
                      <td className="p-3 text-center text-gray-800">
                        <div className="flex items-center justify-center gap-2">
                          <span className="break-words">{data.url}</span>
                          <Clipboard
                            size={16}
                            className="text-gray-600 cursor-pointer"
                            onClick={() => navigator.clipboard.writeText(data.url)}
                          />
                        </div>
                      </td>

                      <td className="p-3 text-center text-gray-800">
                        <div className="flex items-center justify-center gap-2">
                          <span className="break-words">{data.username}</span>
                          <Clipboard
                            size={16}
                            className="text-gray-600 cursor-pointer"
                            onClick={() => navigator.clipboard.writeText(data.username)}
                          />
                        </div>
                      </td>

                      <td className="p-3 text-center text-gray-800">
                        <div className="flex items-center justify-center gap-2">
                          <span className="break-words">{'•'.repeat(data.password.length)}</span>
                          <Clipboard
                            size={16}
                            className="text-gray-600 cursor-pointer"
                            onClick={() => navigator.clipboard.writeText(data.password)}
                          />
                        </div>
                      </td>

                      <td className="p-3 text-center">
                        <div className="flex items-center justify-center gap-3">
                          <lord-icon
                            src="https://cdn.lordicon.com/exymduqj.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#242424,secondary:#30e8bd"
                            onClick={() => alert('Edit function can be added here')}
                          ></lord-icon>
                          <lord-icon
                            src="https://cdn.lordicon.com/hwjcdycb.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#c71f16,secondary:#e83a30"
                            onClick={() => handleDelete(data._id)}
                          ></lord-icon>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-500">No passwords saved yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manager;
