'use client';

import React from 'react';

interface FormInputProps {
  label?: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function FormInput({
  label,
  type = 'text',
  value,
  placeholder,
  onChange,
}: FormInputProps) {
  return (
    <div className="mb-4 px-4">
      {label && (
        <label className="block mb-2 text-gray-700 font-medium">{label}</label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="
      w-full 
      max-w-md  
      mx-auto   
      p-2 
      border border-gray-300 
      rounded-md 
      focus:outline-none 
      focus:ring-2 
      focus:ring-blue-400
    "
      />
    </div>
  );
}
