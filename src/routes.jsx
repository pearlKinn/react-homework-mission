import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Track from './pages/Track';
import Station from './pages/Station';
import TECHIT from './pages/Techit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // 중첩된 라우트
    children: [
      { index: true, element: <Home /> },
      { path: 'techit', element: <TECHIT /> },
      { path: 'track', element: <Track /> },
      { path: 'station', element: <Station /> },
    ],
  },
]);
export default router;
