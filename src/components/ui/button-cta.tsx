
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ButtonCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const ButtonCTA = ({
  variant = 'primary',
  size = 'default',
  children,
  className,
  href,
  ...props
}: ButtonCTAProps) => {
  const buttonClasses = cn(
    'rounded-full font-medium transition-all duration-300',
    {
      'bg-tango-violet text-white hover:bg-tango-violet/90 hover:shadow-lg': variant === 'primary',
      'border-2 border-tango-violet text-tango-violet hover:bg-tango-violet/10': variant === 'outline',
      'px-4 py-2 text-sm': size === 'sm',
      'px-6 py-3': size === 'default',
      'px-8 py-4 text-lg': size === 'lg',
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <Button className={buttonClasses} {...props}>
      {children}
    </Button>
  );
};

export default ButtonCTA;
