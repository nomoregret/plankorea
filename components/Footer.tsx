
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">G</div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Global Hope</span>
            </div>
            <p className="text-slate-500 mb-8 max-w-sm leading-relaxed">
              글로벌 호프는 UN 경제사회이사회 특별협의지위를 획득한 국제구호개발 NGO입니다. 
              우리는 모든 아이들이 존중받는 세상을 꿈꿉니다.
            </p>
            <div className="flex gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3.5c0-1.1-.9-2-2-2s-2 .9-2 2V17h-2v-6h2v1.07c.73-.75 1.66-1.07 2.5-1.07 1.93 0 3.5 1.57 3.5 3.5V17z"/></svg>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">후원안내</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600">정기후원</a></li>
              <li><a href="#" className="hover:text-blue-600">일시후원</a></li>
              <li><a href="#" className="hover:text-blue-600">기업후원</a></li>
              <li><a href="#" className="hover:text-blue-600">유산기부</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">소식&보고</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600">현장소식</a></li>
              <li><a href="#" className="hover:text-blue-600">공지사항</a></li>
              <li><a href="#" className="hover:text-blue-600">연간보고서</a></li>
              <li><a href="#" className="hover:text-blue-600">재무현황</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">고객지원</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-600">1:1 문의</a></li>
              <li><a href="#" className="hover:text-blue-600">증명서 발급</a></li>
              <li className="pt-2 font-bold text-slate-900 text-lg">1588-1234</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between gap-6 text-[12px] text-slate-400">
          <div className="space-y-1">
            <p>서울특별시 강남구 테헤란로 123 글로벌호프 빌딩 | 대표자: 홍길동 | 사업자등록번호: 123-45-67890</p>
            <p>© 2024 Global Hope Foundation. All rights reserved.</p>
          </div>
          <div className="flex gap-6 font-medium">
            <a href="#" className="text-slate-900">개인정보처리방침</a>
            <a href="#">이용약관</a>
            <a href="#">이메일무단수집거부</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
