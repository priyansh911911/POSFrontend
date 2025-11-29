import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import ProjectRoutes from './routes/ProjectRoutes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProjectRoutes />
        <Toaster position="top-right" />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;