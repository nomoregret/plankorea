
import React from 'react';
import { DesignType } from '../types';
import { CAMPAIGNS } from '../constants';

interface CampaignSectionProps {
  designType: DesignType;
}

const CampaignSection: React.FC<CampaignSectionProps> = ({ designType }) => {
  const isMagazine = designType === DesignType.MAGAZINE;
  const isEmergency = designType === DesignType.EMERGENCY_DARK;
  const isPlayful = designType === DesignType.PLAYFUL;
  const isBrutalism = designType === DesignType.NEO_BRUTALISM;

  const getCardStyles = (index: number) => {
    if (designType === DesignType.MINIMAL) return "bg-transparent border-t border-slate-100 pt-8";
    if (isMagazine) return "bg-transparent border-l border-slate-200 pl-6 pb-6";
    if (isEmergency) return "bg-slate-900 border border-slate-800 rounded-lg overflow-hidden p-6";
    if (isPlayful) return "bg-white rounded-[40px] shadow-xl border-b-8 border-slate-100 p-6";
    if (isBrutalism) return `bg-white border-[6px] border-black p-6 shadow-[12px_12px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer ${index % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'}`;
    return "bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 overflow-hidden border border-slate-100 p-6";
  };

  return (
    <section>
      <div className={`flex items-end justify-between mb-12 ${isMagazine ? 'flex-col items-start gap-4' : ''}`}>
        <div>
          {isBrutalism && <div className="bg-black text-white px-3 py-1 font-black text-xs uppercase mb-4 w-fit">Featured Programs</div>}
          <h2 className={`text-3xl font-bold mb-2 ${
            designType === DesignType.MINIMAL ? 'font-light' : 
            isMagazine ? 'text-5xl font-black tracking-tighter uppercase' : 
            isEmergency ? 'text-4xl text-white uppercase' : 
            isBrutalism ? 'text-5xl font-black uppercase italic tracking-tighter text-black' :
            isPlayful ? 'text-4xl font-black text-slate-900' : ''
          }`}>
            {isEmergency ? '긴급 구호 현황' : isPlayful ? '우리가 돕고 있는 친구들' : '진행 중인 캠페인'}
          </h2>
          {!isMagazine && <p className={isEmergency ? "text-slate-500" : "text-slate-500"}>후원자님의 손길이 아이들에게 닿는 현장입니다.</p>}
        </div>
        <button className={`text-sm font-bold transition-all ${
          isBrutalism ? 'bg-black text-white px-8 py-3 font-black uppercase shadow-[6px_6px_0_0_#FFDE00]' : 
          isMagazine ? 'px-6 py-2 border-2 border-slate-900 hover:bg-slate-900 hover:text-white uppercase tracking-widest' : 
          isEmergency ? 'text-red-600 border border-red-600 px-6 py-2 font-black' :
          'text-blue-600 hover:underline'
        }`}>
          전체보기 &rarr;
        </button>
      </div>

      <div className={`grid grid-cols-1 gap-8 ${
        isMagazine ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {CAMPAIGNS.map((campaign, idx) => (
          <div 
            key={campaign.id} 
            className={`group flex flex-col transition-all duration-500 ${getCardStyles(idx)}`}
          >
            {(designType !== DesignType.MINIMAL && !isMagazine) && (
              <div className={`relative mb-6 overflow-hidden ${isPlayful ? 'rounded-[30px] aspect-video' : isBrutalism ? 'border-4 border-black aspect-square' : 'rounded-2xl aspect-[4/3]'}`}>
                <img 
                  src={campaign.image} 
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isBrutalism ? 'grayscale group-hover:grayscale-0' : ''}`} 
                  alt={campaign.title}
                />
              </div>
            )}
            
            <div className={`flex-grow flex flex-col`}>
              {(isPlayful || isBrutalism) && (
                <span className={`text-xs font-black mb-2 uppercase tracking-widest ${isBrutalism ? 'text-black bg-yellow-400 px-2 py-1 w-fit border-2 border-black' : isPlayful ? 'text-orange-500' : 'text-blue-400'}`}>
                  {campaign.category}
                </span>
              )}
              <h3 className={`font-bold mb-3 leading-snug transition-colors ${
                designType === DesignType.MINIMAL ? 'text-2xl font-light' : 
                isMagazine ? 'text-lg font-black tracking-tight uppercase' : 
                isEmergency ? 'text-xl text-white group-hover:text-red-500' : 
                isBrutalism ? 'text-3xl font-black text-black' :
                isPlayful ? 'text-2xl font-black text-slate-800' : 'text-xl text-slate-900'
              }`}>
                {campaign.title}
              </h3>
              <p className={`text-sm mb-8 flex-grow leading-relaxed line-clamp-2 ${isEmergency ? 'text-slate-400' : 'text-slate-500'}`}>
                {campaign.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-3">
                  <span className={`text-2xl font-black ${isMagazine || isEmergency ? 'text-white' : isPlayful ? 'text-orange-500' : isBrutalism ? 'text-black' : 'text-blue-600'}`}>
                    {campaign.progress}%
                  </span>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${isEmergency ? 'text-slate-500' : 'text-slate-400'}`}>
                    Goal: {campaign.goal}
                  </span>
                </div>
                <div className={`w-full h-3 rounded-full overflow-hidden ${isEmergency ? 'bg-white/10' : 'bg-slate-100'} ${isBrutalism ? 'border-2 border-black h-4' : ''}`}>
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      isEmergency ? 'bg-red-600' : isPlayful ? 'bg-orange-400' : isBrutalism ? 'bg-black' : 'bg-blue-600'
                    }`} 
                    style={{ width: `${campaign.progress}%` }} 
                  />
                </div>
                {isBrutalism && (
                  <button className="w-full mt-8 py-4 font-black uppercase text-sm transition-all bg-black text-white hover:bg-yellow-400 hover:text-black border-2 border-black">
                    Join Campaign
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampaignSection;
