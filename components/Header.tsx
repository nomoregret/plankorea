
import React, { useState, useEffect } from 'react';
import { DesignType } from '../types';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  designType: DesignType;
}

const Header: React.FC<HeaderProps> = ({ designType }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = !isScrolled && designType === DesignType.EMOTIONAL;

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl ${
            isTransparent ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
          }`}>G</div>
          <span className={`text-xl font-bold tracking-tight ${
            isTransparent ? 'text-white' : 'text-slate-900'
          }`}>Global Hope</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
            isTransparent 
              ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg' 
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'
          }`}>
            후원하기
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg ${isTransparent ? 'text-white' : 'text-slate-900'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 animate-in fade-in slide-in-from-top-4">
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="block text-lg font-medium text-slate-900">{link.name}</a>
            ))}
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold">후원하기</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
