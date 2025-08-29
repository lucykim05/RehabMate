'use client';
import { useState } from 'react';
import api from '@/libs/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
}
