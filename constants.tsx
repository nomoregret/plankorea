
import { Campaign } from './types';

export const CAMPAIGNS: Campaign[] = [
  {
    id: 1,
    title: "깨끗한 물, 아이들의 생명을 지킵니다",
    category: "식수/위생",
    image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=1000",
    progress: 75,
    goal: "50,000,000원",
    description: "오염된 물로 고통받는 마을에 우물을 설치하고 위생 교육을 실시하여 수인성 질병을 예방합니다."
  },
  {
    id: 2,
    title: "분쟁지역 긴급 구호 캠페인",
    category: "긴급구호",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1000",
    progress: 42,
    goal: "120,000,000원",
    description: "갑작스러운 분쟁으로 삶의 터전을 잃은 난민들에게 필수 식량과 임시 텐트를 긴급 지원합니다."
  },
  {
    id: 3,
    title: "배움의 기회, 꿈꾸는 소녀들",
    category: "교육지원",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000",
    progress: 90,
    goal: "30,000,000원",
    description: "가정 형편으로 학교를 떠나야 했던 아이들이 다시 책가방을 메고 꿈을 꿀 수 있게 돕습니다."
  },
  {
    id: 4,
    title: "영양실조 아동 치료식 지원",
    category: "보건/의료",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1000",
    progress: 61,
    goal: "45,000,000원",
    description: "급성 영양실조로 생명이 위험한 아이들에게 생존을 위한 고농축 치료식을 제공합니다."
  }
];

export const NAV_LINKS = [
  { name: '단체소개', href: '#' },
  { name: '활동보고', href: '#' },
  { name: '캠페인', href: '#' },
  { name: '후원하기', href: '#' },
  { name: '나의후원', href: '#' },
];
