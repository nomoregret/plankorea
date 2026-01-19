
import React from 'react';
import { DesignType } from '../types';

interface HeroProps {
  designType: DesignType;
}

const HeroSection: React.FC<HeroProps> = ({ designType }) => {
  // --- NEO BRUTALISM VARIANT ---
  if (designType === DesignType.NEO_BRUTALISM) {
    return (
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="bg-blue-600 border-4 border-black p-4 mb-6 w-fit rotate-[-2deg] shadow-[6px_6px_0_0_#000]">
                <span className="text-white font-black uppercase text-xl italic">Action Needed Now!</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-black leading-none mb-8 uppercase tracking-tighter">
                DON'T BE <br />
                <span className="bg-black text-[#FFDE00] px-4 py-2 inline-block">SILENT.</span>
              </h1>
              <p className="text-2xl font-black text-black mb-12 max-w-xl border-l-8 border-black pl-6">
                당신의 목소리와 행동이 아이들의 생명을 구합니다. 우리는 타협하지 않고 현장에서 직접 변화를 만듭니다.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="bg-black text-white px-10 py-6 text-2xl font-black uppercase shadow-[10px_10px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border-4 border-black">
                  Join The Mission
                </button>
                <button className="bg-white text-black px-10 py-6 text-2xl font-black uppercase shadow-[10px_10px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border-4 border-black">
                  Learn Facts
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 border-8 border-black overflow-hidden shadow-[20px_20px_0_0_#000] group">
                <img 
                  src="https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Brutalism Hero"
                />
              </div>
              <div className="absolute top-10 right-[-20px] bg-red-500 border-4 border-black w-24 h-24 rounded-full flex items-center justify-center text-white font-black text-3xl z-20 rotate-12 shadow-[5px_5px_0_0_#000]">
                GO!
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- CINEMATIC VARIANT ---
  if (designType === DesignType.CINEMATIC) {
    return (
      <section className="relative h-screen flex flex-col justify-end overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover opacity-80" alt="Cinematic" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 w-full text-white">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter uppercase italic">Unseen <br /><span className="text-blue-500">Voices.</span></h1>
            <p className="text-2xl text-slate-300 mb-12 max-w-xl leading-relaxed font-light">우리가 외면했던 그곳에도 삶은 계속됩니다. 현장의 기록을 통해 진실된 변화를 마주하세요.</p>
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-4 group">
                <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <span className="text-sm font-black uppercase tracking-widest">Watch Story</span>
              </button>
              <button className="bg-blue-600 px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all">Donate Now</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (designType === DesignType.EMERGENCY_DARK) {
    return (
      <section className="relative h-screen flex items-center bg-black overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-40 grayscale contrast-125">
           <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Crisis" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 w-full text-white">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-sm font-black text-xs uppercase animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full"></span> Emergency Alert
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter">DO NOT <br /><span className="text-red-600 underline decoration-4 underline-offset-8">LOOK AWAY.</span></h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">가뭄과 전쟁이 휩쓸고 간 자리, 아이들이 마실 물조차 없습니다. 오늘을 넘기기 힘든 200만 명의 생명을 위해 지금 행동해야 합니다.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                <button className="bg-red-600 text-white py-6 font-black uppercase tracking-widest hover:bg-red-700 transition-all">긴급구호 참여</button>
                <button className="bg-white text-black py-6 font-black uppercase tracking-widest hover:bg-slate-200 transition-all">현황 자세히 보기</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (designType === DesignType.PLAYFUL) {
    return (
      <section className="relative min-h-screen flex items-center bg-orange-50/50 pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-[40%] aspect-square bg-blue-100 rounded-full blur-[100px] opacity-40" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] aspect-square bg-orange-200 rounded-full blur-[100px] opacity-40" />
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 text-slate-900">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="w-fit bg-blue-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">안녕, 친구들! 👋</div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight">꿈을 꾸는 모든 <br />꼬마 친구들을 <br /><span className="text-orange-500">응원해요!</span></h1>
              <p className="text-xl leading-relaxed font-medium">여러분의 따뜻한 응원은 아이들을 쑥쑥 자라게 해요. 오늘, 아이들에게 멋진 선물을 보내볼까요?</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-500 text-white px-10 py-6 rounded-[30px] font-black text-xl shadow-2xl hover:scale-105 transition-transform">후원 가방 채우기 🎒</button>
                <button className="bg-white text-slate-600 px-10 py-6 rounded-[30px] font-bold text-xl border-4 border-slate-100 hover:border-orange-200 transition-all">함께 놀기</button>
              </div>
            </div>
            <div className="flex-1 relative">
                <div className="relative z-10 bg-white p-6 rounded-[50px] shadow-2xl rotate-3">
                    <img src="https://images.unsplash.com/photo-1519214605650-76a613ee3245?auto=format&fit=crop&q=80&w=800" className="w-full aspect-square object-cover rounded-[40px]" alt="Happy kids" />
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-4xl shadow-xl animate-bounce">✨</div>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (designType === DesignType.EMOTIONAL) {
    return (
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover scale-105"
            alt="Smiling child"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <span className="inline-block px-3 py-1 bg-blue-600 rounded text-xs font-bold mb-6 tracking-widest uppercase text-white">Emergency Relief</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              아이들의 웃음은 <br />
              <span className="text-blue-400">내일을 비추는 빛</span>입니다
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              매일 아침 3km를 걸어 물을 긷던 마리아에게 이제 새로운 꿈이 생겼습니다. <br className="hidden md:block" />
              여러분의 작은 나눔이 한 아이의 우주를 바꿉니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all hover:shadow-xl">후원 참여하기</button>
              <button className="bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">활동 이야기 보기</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (designType === DesignType.CAMPAIGN_GRID) {
    return (
      <section className="pt-32 pb-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                지금, <span className="text-red-500">도움의 손길</span>이 <br />
                절실한 캠페인입니다
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                현재 전 세계 각지에서 진행 중인 긴급구호 및 지원 캠페인입니다. 
                목표 달성까지 여러분의 힘이 필요합니다.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-64 object-cover rounded-2xl mb-6 shadow-inner"
                alt="Urgent campaign"
              />
              <div className="flex justify-between items-end mb-4">
                <span className="text-red-500 font-bold bg-red-50 px-3 py-1 rounded-full text-xs">D-5 마감임박</span>
                <span className="text-2xl font-black text-slate-900">42%</span>
              </div>
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden mb-6">
                <div className="bg-red-500 h-full w-[42%] transition-all duration-1000" />
              </div>
              <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors">지금 바로 후원하기</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (designType === DesignType.MODERN_STORY) {
    return (
      <section className="pt-32 pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
              <img 
                src="https://images.unsplash.com/photo-1489923507076-2443b81bf5bb?auto=format&fit=crop&q=80&w=1200" 
                className="relative z-10 w-full aspect-[3/4] object-cover rounded-[40px] shadow-2xl"
                alt="Featured Story"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-blue-600 font-bold text-lg mb-4">Featured Story</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                한 아이의 삶이 <br />
                기적이 되는 순간
              </h1>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                아미나의 마을에 깨끗한 우물이 생긴 후, 아이들의 삶은 완전히 바뀌었습니다. 
                매일 아침 6km를 걷던 시간 대신 아미나는 연필을 잡습니다. 
                당신의 후원은 한 아이의 생명을 넘어 마을 전체의 미래를 바꿉니다.
              </p>
              <button className="w-fit bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg">아미나 후원하기</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (designType === DesignType.INFOGRAPHIC) {
    return (
      <section className="pt-40 pb-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight italic">TRANSPARENT IMPACT.</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">우리는 데이터로 증명합니다. 여러분의 후원금이 어디에, 어떻게 사용되어 어떤 변화를 만들었는지 투명하게 공개합니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: '식수 지원', value: '420,000명', icon: '💧', color: 'bg-blue-500' },
              { label: '영양실조 치료', value: '15,000명', icon: '🥗', color: 'bg-green-500' },
              { label: '학교 건립', value: '128개', icon: '🏫', color: 'bg-yellow-500' }
            ].map((item, idx) => (
              <div key={idx} className={`${item.color} p-8 rounded-[32px] text-slate-900 group hover:-translate-y-2 transition-transform cursor-pointer`}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-sm font-black uppercase mb-1 opacity-70 tracking-widest">{item.label}</div>
                <div className="text-4xl font-black">{item.value}</div>
                <div className="mt-8 text-xs font-bold bg-white/30 px-3 py-2 rounded-full w-fit">2023 연간 보고서 보기</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (designType === DesignType.MAGAZINE) {
    return (
      <section className="relative pt-48 pb-12 overflow-hidden bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-full flex justify-between items-baseline mb-4 border-b-2 border-slate-900 pb-2">
              <span className="text-sm font-black uppercase tracking-[0.3em]">Issue No. 24</span>
              <span className="text-sm font-black uppercase tracking-[0.3em]">Spring 2024</span>
            </div>
            <h1 className="text-[12vw] font-black leading-none text-slate-900 mb-12 tracking-tighter uppercase text-center md:text-left w-full">
              HUMAN <br className="hidden md:block" /> DIGNITY
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start w-full">
              <div className="md:col-span-5 relative">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Magazine spread"
                />
              </div>
              <div className="md:col-span-7 flex flex-col justify-between h-full pt-4">
                <div className="max-w-md">
                  <h3 className="text-3xl font-black mb-6 leading-tight italic">"인간의 존엄은 보편적이어야 합니다."</h3>
                  <p className="text-xl leading-relaxed text-slate-700 mb-8">우리는 소외된 이들의 목소리를 세상에 전달하고, 그들이 스스로 설 수 있는 힘을 기를 수 있도록 돕습니다.</p>
                  <button className="text-sm font-black border-b-4 border-slate-900 pb-1 hover:text-blue-600 transition-colors uppercase tracking-widest">Read Article &mdash;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // MINIMAL
  return (
    <section className="pt-48 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-light text-slate-900 mb-8 tracking-tight">
          더 나은 세상을 만드는 <br />
          <strong className="font-bold">가장 정직한 움직임.</strong>
        </h1>
        <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light">
          우리는 전 세계 어린이들이 자신의 권리를 온전히 누리고, <br />
          차별 없이 성장할 수 있는 사회를 꿈꿉니다.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
