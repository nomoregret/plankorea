
import React from 'react';
import { DesignType } from '../types';

interface StatsSectionProps {
  designType: DesignType;
}

const StatsSection: React.FC<StatsSectionProps> = ({ designType }) => {
  const stats = [
    { label: '지원 아동 수', value: '1.2M+', desc: '전 세계 40개국 이상' },
    { label: '투명한 집행률', value: '92%', desc: '후원금의 대다수가 직접 전달' },
    { label: '전문 활동가', value: '4,500', desc: '현장에서 함께하는 열정' },
    { label: '함께한 시간', value: '30년', desc: '꾸준하고 진정성 있는 활동' },
  ];

  if (designType === DesignType.MINIMAL || designType === DesignType.MAGAZINE) return null;

  const getSectionStyles = () => {
    if (designType === DesignType.INFOGRAPHIC) return "bg-white";
    if (designType === DesignType.EMERGENCY_DARK) return "bg-black border-y border-slate-900";
    if (designType === DesignType.PLAYFUL) return "bg-orange-100/50";
    if (designType === DesignType.NEO_BRUTALISM) return "bg-[#FFDE00] border-y-[10px] border-black py-32";
    return "bg-blue-600";
  };

  const getCardStyles = () => {
    if (designType === DesignType.INFOGRAPHIC) return "bg-slate-50 border-slate-200 text-slate-900 rounded-[40px]";
    if (designType === DesignType.EMERGENCY_DARK) return "bg-slate-900/50 border-slate-800 text-white rounded-lg";
    if (designType === DesignType.PLAYFUL) return "bg-white border-none text-slate-900 shadow-lg rounded-[40px]";
    if (designType === DesignType.NEO_BRUTALISM) return "bg-white border-[6px] border-black text-black shadow-[15px_15px_0_0_#000]";
    return "bg-white/5 backdrop-blur-sm border-white/10 text-white rounded-3xl";
  };

  return (
    <section className={`py-28 overflow-hidden relative ${getSectionStyles()}`}>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase ${
            designType === DesignType.INFOGRAPHIC || designType === DesignType.NEO_BRUTALISM ? 'text-black italic' : 
            designType === DesignType.PLAYFUL ? 'text-slate-900' : 'text-white'
          }`}>
            {designType === DesignType.PLAYFUL ? '우리가 함께 만든 행복' : 'Global Impact'}
          </h2>
          <div className={`h-2 w-24 mx-auto ${designType === DesignType.NEO_BRUTALISM ? 'bg-black' : 'bg-blue-400'} rounded-full`}></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, idx) => (
            <div key={idx} className={`text-center p-10 transition-all hover:scale-105 border ${getCardStyles()}`}>
              <span className={`block text-[11px] font-black uppercase tracking-[0.3em] mb-6 ${
                designType === DesignType.INFOGRAPHIC || designType === DesignType.PLAYFUL ? 'text-blue-600' : 
                designType === DesignType.NEO_BRUTALISM ? 'text-black' : 'text-blue-200 opacity-60'
              }`}>
                {stat.label}
              </span>
              <span className="block text-5xl md:text-7xl font-black mb-4 tabular-nums tracking-tighter">
                {stat.value}
              </span>
              <span className={`block text-xs font-bold leading-relaxed ${
                designType === DesignType.INFOGRAPHIC || designType === DesignType.PLAYFUL || designType === DesignType.NEO_BRUTALISM ? 'text-slate-500' : 'text-blue-100/60'
              }`}>
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
