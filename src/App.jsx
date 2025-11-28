import { BrowserRouter } from 'react-router-dom';
import ProjectRoutes from './routes/ProjectRoutes';

function App() {
  return (
    <BrowserRouter>
      <ProjectRoutes />
    </BrowserRouter>
  );
}

export default App;