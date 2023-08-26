import Heading from '@/components/Heading';
import { useAuth } from '@/contexts/Auth';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import { toast } from 'react-hot-toast';

function HeaderBar() {
  const { isAuth, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    toast.success('로그아웃에 성공했습니다', {
      position: 'top-center',
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
    navigate('/');
  };
  return (
    <header className="flex justify-between items-center p-1 max-w-7xl px-4 lg:mx-auto lg:px-6 border-b-[1px]">
      <div className="flex items-center">
        <Heading />
        <Nav />
      </div>
      {!isAuth && (
        <Link to="/login" className="font-semibold">
          로그인
        </Link>
      )}
      {isAuth && (
        <button type="button" className="font-semibold" onClick={handleSignOut}>
          로그아웃
        </button>
        
      )}
    </header>
  );
}

export default HeaderBar;
