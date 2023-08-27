import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Station from './pages/Station';
import TECHIT from './pages/Techit';
import Track from './pages/Track';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="techit" element={<TECHIT />} />
      <Route path="track" element={<Track />} />
      <Route path="station" element={<Station />} />
    </Route>
  ),{basename:'/react-homework-mission03'}
);

export default router;
