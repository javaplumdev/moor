import type { ReactNode } from 'react';
import { Pressable, Text, PressableProps } from 'react-native';

interface ButtonProps extends PressableProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-lg active:opacity-70';

  const variantStyles = {
    primary: 'bg-blue-500 active:bg-blue-600',
    secondary: 'bg-slate-200 active:bg-slate-300',
    outline: 'border-2 border-blue-500 active:bg-blue-50',
  };

  const containerSizeStyles = {
    small: 'px-3 py-1.5',
    medium: 'px-4 py-2',
    large: 'px-6 py-3',
  };

  const textSizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const textColorStyles = {
    primary: 'text-white',
    secondary: 'text-slate-900',
    outline: 'text-blue-500',
  };

  return (
    <Pressable
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${containerSizeStyles[size]} ${
        disabled ? 'opacity-50' : ''
      } ${className || ''}`}
      {...props}
    >
      <Text
        className={`${textColorStyles[variant]} ${textSizeStyles[size]} font-semibold text-center`}
      >
        {children}
      </Text>
    </Pressable>
  );
}
