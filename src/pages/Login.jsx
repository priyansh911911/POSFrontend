import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '', role: '' });
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const roles = [
    { value: 'superAdmin', label: 'Super Admin' },
    { value: 'restaurant', label: 'Restaurant Manager' },
    { value: 'sales', label: 'Sales Representative' },
    { value: 'support', label: 'Support Agent' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const redirectPath = await login(credentials);
      navigate(redirectPath);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #e8e2ff 0%, #d4c5ff 100%)' }}>
      <div className="flex items-center justify-center h-full px-6">
        <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg" style={{ padding: '2rem' }}>
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto" 
              style={{ backgroundColor: '#5b47ff', marginBottom: '1.5rem' }}
            >
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
            </div>
            <h2 className="text-4xl font-normal text-gray-900" style={{ marginBottom: '0.75rem' }}>Welcome Back</h2>
            <p className="text-gray-500 text-lg">Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label className="block text-gray-900 font-medium text-lg" style={{ marginBottom: '0.5rem' }}>Role</label>
              <select
                className="w-full bg-gray-50 border-0 rounded-2xl text-gray-900 focus:outline-none appearance-none text-lg"
                style={{ padding: '1rem' }}
                value={credentials.role}
                onChange={(e) => setCredentials({...credentials, role: e.target.value})}
                required
              >
                <option value="">Student</option>
                {roles.map(role => (
                  <option key={role.value} value={role.value}>{role.label}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label className="block text-gray-900 font-medium text-lg" style={{ marginBottom: '0.5rem' }}>Username</label>
              <input
                type="email"
                className="w-full bg-gray-50 border-0 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none text-lg"
                style={{ padding: '1rem' }}
                placeholder="Enter your username"
                value={credentials.email}
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                required
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label className="block text-gray-900 font-medium text-lg" style={{ marginBottom: '0.5rem' }}>Password</label>
              <input
                type="password"
                className="w-full bg-gray-50 border-0 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none text-lg"
                style={{ padding: '1rem' }}
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white rounded-2xl font-medium transition-colors disabled:opacity-50 text-lg"
              style={{ backgroundColor: '#1a1a2e', padding: '1rem' }}
              disabled={loading || !credentials.role}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;