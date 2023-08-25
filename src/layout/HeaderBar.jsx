import Heading from '@/components/Heading';
import Nav from './Nav';
import Button from '@/components/Button';

function HeaderBar() {
  return (
    <header className="flex justify-between items-center p-1 max-w-7xl px-4 lg:mx-auto lg:px-6 border-b-[1px]">
      <div className="flex items-center">
        <Heading />
        <Nav />
      </div>
      <Button status={'로그인'}></Button>
    </header>
  );
}

export default HeaderBar;
