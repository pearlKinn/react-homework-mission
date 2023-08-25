import TechitByLikeLionLogo from '@/components/TechitByLikeLionLogo';
import { useState } from 'react';

function FooterBar() {
  // 현재(오늘) 년도를 화면에 출력하는 상태를 설정
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className="border-t  border-gray-300 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 xl:px-6 flex flex-col md:flex-row md:justify-between">
        <TechitByLikeLionLogo className="cursor-pointer" />
        <div className="mt-8 flex flex-col space-y-7 md:mt-0 md:flex-row md:space-x-20 md:space-y-0 xl:space-x-28">
          <div>
            <h3 className="text-xs text-gray-500">모든 교육 경험</h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm font-semibold">KDT 테킷 스쿨</li>
              <li className="text-sm font-semibold">온보딩 트랙</li>
              <li className="text-sm font-semibold">스타트업 스테이션</li>
              <li className="text-sm font-semibold">이벤트</li>
              <li className="text-sm font-semibold">기업 해커톤</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs text-gray-500">회사소개</h3>
            <ul className="mt-3 flex flex-col gap-y-3">
              <li>LIKELION</li>
              <li>채용</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-xs font-medium border-t pt-4 border-gray-300">
        <a
          href="https://likelion.notion.site/LIKELION-89ba1354b98d4825af14109aebdd3af9"
          className="text-gray-500 "
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          이용약관
        </a>
        <span className="h-1 w-1 rounded-full bg-gray-500"></span>
        <a
          href="https://likelion.notion.site/LIKELION-4d3c7ce22a724b3c99950e853dc7589b"
          className="text-gray-500"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          개인정보처리방침
        </a>
        <span className="h-1 w-1 rounded-full bg-gray-500"></span>
        <a
          href="https://likelion.notion.site/LIKELION-e9139bf291ad4e0b88f8b99f8597d04a"
          className="text-gray-500"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          환불규정
        </a>
      </div>
      <div className="mt-3">
        <div className="flex flex-col space-y-0.5 md:flex-row md:space-y-0">
          <div className="text-xs text-gray-500 Footer_fs_10__JneGa">
            <span className="Footer_corp__NtB7b">상호명: 멋쟁이사자처럼</span>
            <span className="Footer_corp__NtB7b">대표: 이두희</span>
            <span className="Footer_corp__NtB7b">contact@likelion.net</span>
          </div>
          <div className="flex text-xs text-gray-500 Footer_fs_10__JneGa">
            <span className="Footer_corp__NtB7b">
              사업자 번호 : 264-88-01106
            </span>
            <span>통신판매업 신고번호 : 2019-서울강남-00774</span>
          </div>
        </div>
        <div className="mt-0.5 flex flex-col space-y-0.5 text-xs text-gray-500 md:mt-1 md:flex-row md:space-x-2 md:space-y-0 Footer_fs_10__JneGa">
          <span>주소 : 서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층</span>
          <span>Copyright © 2022 멋쟁이사자처럼 All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar;
