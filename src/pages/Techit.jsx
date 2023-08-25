import useDocumentTitle from '@/hooks/useDocumentTitle';
import Contents from '@/layout/Contents';

function TECHIT() {
  useDocumentTitle('TECHIT SCHOOL');
  return (
    <div className="mt-10 lg:mt-20 max-w-7xl px-4 lg:mx-auto lg:px-6">
      <section className='pb-4 border-b'>
        <p className="mb-1 text-sm font-semibold text-orange-500 md:mb-2 md:text-base ">
          테킷 스쿨 본모집 지원
        </p>
        <h2 className="font-bold text-[26px]">
          모집 중인 테킷 스쿨을 확인해 보세요
        </h2>
        <Contents filterKeyWord="모집중" className="pt-2" />
      </section>
      <section className='py-5 '>
        <p className="mb-1 text-sm font-semibold text-orange-500 md:mb-2 md:text-base ">
          테킷 스쿨 사전알림 신청
        </p>
        <h2 className="font-bold text-[26px]">사전알림을 신청해 보세요</h2>
        <Contents filterKeyWord="사전알림신청" className="pt-2" />
      </section>
    </div>
  );
}

export default TECHIT;
