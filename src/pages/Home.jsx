import useDocumentTitle from '@/hooks/useDocumentTitle';
import CampSection from '@/layout/home/CampSection';
import EUID from '/EUID.png'

function Home() {
  useDocumentTitle('TECHIT BY LIKELION');
  return (
    <div>
      <img src={EUID} alt="이듬배너" className='w-full h-auto'/>
      <CampSection/>
    </div>
  );
}

export default Home;
