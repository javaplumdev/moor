import { View, ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <View
      className={`bg-white dark:bg-slate-900 rounded-lg shadow-sm p-4 border border-slate-200 dark:border-slate-800 ${className || ''}`}
      {...props}
    >
      {children}
    </View>
  );
}
