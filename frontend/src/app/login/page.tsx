'use client';
import { useState } from 'react';
import api from '@/libs/api';
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
      const res = await api.post<LoginResponse>('/auth/login', null, {
        params: { email, password },
      });

      // 이제 res.data는 LoginResponse 타입으로 인식됨
      localStorage.setItem('accessToken', res.data.accessToken);
      alert(`로그인 성공! 환영합니다 ${res.data.email}`);
    } catch (err) {
      setError('로그인 실패');
    }
  };

  return (
    <form onSubmit={handleLogin}>
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
      <button type="submit">로그인</button>
      {error && <p>{error}</p>}
    </form>
  );
}
