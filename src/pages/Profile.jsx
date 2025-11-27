import { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@shinepos.com',
    phone: '+91 9876543210'
  });

  const handleSave = () => {
    console.log('Profile saved:', profile);
  };

  return (
    <div className="min-h-screen bg-app-gradient">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} title="Profile" />
        <main className="p-6">
          <div className="max-w-md mx-auto bg-surface border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-text mb-6">Profile Settings</h2>
            <div className="space-y-4">
              <Input
                placeholder="Name"
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
              />
              <Input
                placeholder="Email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
              />
              <Input
                placeholder="Phone"
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
              />
              <Button onClick={handleSave} variant="primary" className="w-full">
                Save Changes
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;