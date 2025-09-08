import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Logo from '@/components/Logo';

export default async function LandingPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    redirect('/login');
  }

  return (
    <main>
      <div className="flex justify-center mb-8">
        <Logo size="large" />
      </div>
      <div className="text-center">
        <p className="text-gray-600">AI가 함께하는 재활 여정</p>
      </div>
    </main>
  );
}
