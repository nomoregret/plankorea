
import React, { useState } from 'react';
import { DesignType } from './types';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CampaignSection from './components/CampaignSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [designType, setDesignType] = useState<DesignType>(DesignType.EMOTIONAL);

  const getBgColor = () => {
    switch (designType) {
      case DesignType.MINIMAL: return 'bg-white';
      case DesignType.MAGAZINE: return 'bg-[#fafafa]';
      case DesignType.EMERGENCY_DARK: return 'bg-black';
      case DesignType.PLAYFUL: return 'bg-orange-50/30';
      case DesignType.NEO_BRUTALISM: return 'bg-[#FFDE00]';
      case DesignType.INFOGRAPHIC: return 'bg-slate-50';
      default: return 'bg-slate-50';
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ease-in-out ${getBgColor()} ${designType === DesignType.NEO_BRUTALISM ? 'cursor-crosshair' : ''}`}>
      {/* Design Switcher Overlay - Floating Badge Style */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-1 bg-white/90 backdrop-blur-md p-3 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20 max-h-[85vh] overflow-y-auto w-56 scrollbar-hide">
        <div className="flex items-center justify-between px-2 mb-3 border-b border-slate-100 pb-2">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Select Concept</p>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        {[
          { id: DesignType.EMOTIONAL, label: '🎬 감성 비주얼' },
          { id: DesignType.CAMPAIGN_GRID, label: '📊 캠페인 리스트' },
          { id: DesignType.MINIMAL, label: '⚪ 미니멀리즘' },
          { id: DesignType.MODERN_STORY, label: '📖 스토리텔링' },
          { id: DesignType.INFOGRAPHIC, label: '📈 인포그래픽' },
          { id: DesignType.MAGAZINE, label: '📰 매거진 스타일' },
          { id: DesignType.CINEMATIC, label: '📽️ 시네마틱' },
          { id: DesignType.EMERGENCY_DARK, label: '🚨 긴급구호(다크)' },
          { id: DesignType.PLAYFUL, label: '🧸 아동친화형' },
          { id: DesignType.NEO_BRUTALISM, label: '💥 네오 브루탈리즘' }
        ].map((type) => (
          <button
            key={type.id}
            onClick={() => setDesignType(type.id)}
            className={`px-4 py-3 rounded-xl text-[11px] font-black transition-all text-left flex items-center gap-3 group ${
              designType === type.id 
                ? 'bg-blue-600 text-white shadow-[0_10px_20px_rgba(37,99,235,0.3)] translate-x-1' 
                : 'text-slate-600 hover:bg-slate-100 hover:translate-x-1'
            }`}
          >
            <span className="group-hover:scale-125 transition-transform">{type.label}</span>
          </button>
        ))}
      </div>

      <Header designType={designType} />
      
      <main>
        <HeroSection designType={designType} />
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${
          designType === DesignType.MAGAZINE ? 'pt-0' : 
          designType === DesignType.PLAYFUL ? 'relative z-10' : ''
        }`}>
          <CampaignSection designType={designType} />
        </div>

        <StatsSection designType={designType} />

        {/* Global CTA - Variation Based on Design */}
        <section className={`py-28 relative overflow-hidden ${
          designType === DesignType.INFOGRAPHIC ? 'bg-yellow-400 text-slate-900' : 
          designType === DesignType.MAGAZINE ? 'bg-black text-white' : 
          designType === DesignType.EMERGENCY_DARK ? 'bg-red-950 text-white' :
          designType === DesignType.PLAYFUL ? 'bg-blue-400 text-white rounded-[60px] mx-4 mb-10' :
          designType === DesignType.NEO_BRUTALISM ? 'bg-blue-600 text-white border-y-8 border-black' :
          'bg-slate-900 text-white'
        }`}>
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className={`text-4xl md:text-6xl font-black mb-8 tracking-tighter ${
                designType === DesignType.NEO_BRUTALISM ? 'uppercase italic text-white' : ''
            }`}>
                아이들의 내일을 <br className="md:hidden" /> 선물하세요
            </h2>
            <p className={`mb-12 max-w-2xl mx-auto text-xl font-medium ${
                designType === DesignType.INFOGRAPHIC ? 'text-slate-800' : 
                designType === DesignType.PLAYFUL ? 'text-blue-50' : 'text-slate-400'
            }`}>
              여러분의 나눔이 한 아이의 삶에 기적을 만듭니다. <br />
              지금 바로 글로벌 호프의 파트너가 되어주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className={`px-12 py-6 rounded-full font-black text-xl transition-all hover:scale-105 active:scale-95 ${
                designType === DesignType.NEO_BRUTALISM ? 'bg-white text-black border-4 border-black shadow-[8px_8px_0_0_#000]' : 
                designType === DesignType.INFOGRAPHIC ? 'bg-slate-900 text-white' : 
                designType === DesignType.PLAYFUL ? 'bg-white text-blue-600' :
                'bg-blue-600 text-white hover:bg-blue-700 shadow-2xl shadow-blue-500/30'
              }`}>
                정기후원 시작하기
              </button>
              <button className={`px-12 py-6 rounded-full font-black text-xl transition-all border-4 ${
                designType === DesignType.NEO_BRUTALISM ? 'bg-black text-white border-black shadow-[8px_8px_0_0_#fff]' : 
                'bg-white/10 hover:bg-white/20 border-white/10 text-white'
              }`}>
                일시후원 하기
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
