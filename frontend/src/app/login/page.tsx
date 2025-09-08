'use client';
import { useState } from 'react';
import { login } from '@/libs/api';
import FormInput from '@/components/FormInput';

interface LoginResponse {
  accessToken: string;
  email: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      localStorage.setItem('accessToken', res.accessToken);
      alert(`로그인 성공! 환영합니다 ${res.email}`);
    } catch (err) {
      setError('로그인 실패');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* 제목 */}
        <h1 className="text-2xl text-gray-800 font-bold text-center mb-6">
          로그인
        </h1>

        {/* 폼 */}
        <form onSubmit={handleLogin} className="space-y-4 text-gray-500">
          <FormInput
            label="이메일"
            type="email"
            value={email}
            placeholder="이메일 입력"
            onChange={setEmail}
          />
          <FormInput
            label="비밀번호"
            type="password"
            value={password}
            placeholder="비밀번호 입력"
            onChange={setPassword}
          />

          {/* 에러 메시지 */}
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}

          {/* 버튼 */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-lg font-medium transition"
          >
            로그인
          </button>
        </form>

        {/* 회원가입 안내 */}
        <p className="text-center text-sm text-gray-500 mt-6">
          아직 계정이 없으신가요?{' '}
          <a
            href="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            회원가입
          </a>
        </p>
      </div>
    </main>
  );
}
