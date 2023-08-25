import Heading from '@/components/Heading';
import Nav from './Nav';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';

function HeaderBar() {
  return (
    <header className="flex justify-between items-center p-1 max-w-7xl px-4 lg:mx-auto lg:px-6 border-b-[1px]">
      <div className="flex items-center">
        <Heading />
        <Nav />
      </div>
      <Link to="/login" className='font-semibold'>로그인</Link>
    </header>
  );
}

export default HeaderBar;
