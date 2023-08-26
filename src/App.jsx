import { RouterProvider } from 'react-router-dom';
import router from './routes';
import AuthProvider from './contexts/Auth';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
      <Toaster />
    </AuthProvider>
  );
}

export default App;