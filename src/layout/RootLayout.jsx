/* eslint-disable react/prop-types */
import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function RootLayout(props) {
  const currentPath = useLocation().pathname;

  return (
    <div>
      {(currentPath !== '/login' && currentPath !== '/register') && <HeaderBar />}
      <main>
        <Outlet />
      </main>
      {(currentPath !== '/login' && currentPath !== '/register') && <FooterBar />}
    </div>
  );
}

export default RootLayout;
