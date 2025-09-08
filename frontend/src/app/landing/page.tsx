'use client';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="flex justify-center mb-8">
        <Logo size="large" />
      </div>
      <div className="text-center">
        <p className="text-gray-600">AI가 함께하는 재활 여정</p>
      </div>
    </main>
  );
}
