'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      router.push('/landing');
    }
  }, [router]);

  return (
    <main className="min-h-screen p-8">
      <div className="flex justify-center mb-8">
        <Logo size="large" />
      </div>
      <div className="text-center space-y-4">
        <p className="text-gray-600">AI가 함께하는 재활 여정</p>
        <div className="space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => router.push('/login')}
          >
            로그인
          </button>
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => router.push('/register')}
          >
            회원가입
          </button>
        </div>
      </div>
    </main>
  );
}
