// components/Logo.tsx
import React from 'react';

interface LogoProps {
  size?: 'large' | 'small' | 'icon';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'large', className = '' }) => {
  if (size === 'icon') {
    return (
      <div
        className={`relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-lg flex items-center justify-center ${className}`}
      >
        {/* 사람 아이콘 - 간단한 이모지 버전 */}
        <div className="text-3xl animate-pulse">🏃‍♂️</div>
        {/* 건강 표시 */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs animate-pulse">
          💪
        </div>
      </div>
    );
  }

  const isSmall = size === 'small';

  return (
    <div
      className={`flex items-center ${
        isSmall
          ? 'bg-white p-3 rounded-full shadow-md max-w-xs'
          : 'bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl shadow-xl max-w-md'
      } ${className}`}
    >
      {/* 아이콘 영역 */}
      <div
        className={`relative ${
          isSmall ? 'w-8 h-8 mr-3' : 'w-16 h-16 mr-6'
        } flex items-center justify-center`}
      >
        {/* 메인 아이콘 */}
        <div className={`${isSmall ? 'text-2xl' : 'text-4xl'} relative`}>
          🏃‍♂️
        </div>

        {/* 건강 상태 표시 */}
        <div
          className={`absolute ${
            isSmall
              ? '-top-1 -right-1 w-4 h-4 text-xs'
              : '-top-2 -right-2 w-6 h-6'
          } bg-green-500 rounded-full flex items-center justify-center animate-pulse`}
        >
          <span className={isSmall ? 'text-xs' : 'text-sm'}>💪</span>
        </div>

        {/* 에너지 라인들 (큰 버전만) */}
        {!isSmall && (
          <>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse opacity-60"></div>
            <div className="absolute top-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse opacity-60 delay-1000"></div>
            <div className="absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse opacity-60 delay-2000"></div>
          </>
        )}
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-col">
        <h1
          className={`${
            isSmall ? 'text-lg' : 'text-3xl'
          } font-bold text-blue-600 mb-0`}
        >
          Rehab<span className="text-green-500">Mate</span>
        </h1>
        {!isSmall && (
          <p className="text-sm text-gray-600 mt-1">당신의 개인 재활 동반자</p>
        )}
      </div>
    </div>
  );
};

export default Logo;

// 사용법:
// <Logo size="large" />   - 메인 페이지용
// <Logo size="small" />   - 헤더용
// <Logo size="icon" />    - 파비콘/버튼용
