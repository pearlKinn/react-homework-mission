import React from 'react';
import { Link } from 'react-router-dom';
import Contents from '../Contents';

function CampSection() {
  return (
    <div className="mt-10 lg:mt-20 max-w-7xl px-4 lg:mx-auto lg:px-6">
      <div className="flex justify-between mb-4">
        <div>
          <p className="mb-1 text-sm font-semibold text-orange-500 md:mb-2 md:text-base ">
            KDT 테킷 스쿨 알아보기
          </p>
          <h2 className="font-bold text-[26px]">
            전액 지원받고 기초부터 심화까지 한 큐에 성장
          </h2>
          <p className="mt-1 whitespace-pre-wrap text-sm font-normal text-gray-500 md:mt-2 md:text-base ">
            체계적인 커리큘럼을 가진 스쿨들을 만나보세요!
          </p>
        </div>
        <Link to="/" className="text-sm self-end whitespace-nowrap">
          자세히 보기 &gt;
        </Link>
      </div>
      <Contents/>
    </div>
  );
}

export default CampSection;
