
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
  external?: boolean;
  onClick?: () => void;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  children,
  className,
  underline = true,
  external = false,
  onClick,
}) => {
  const linkClasses = cn(
    'relative inline-block transition-colors duration-300 ease-in-out',
    underline ? 'hover-underline' : '',
    className
  );

  if (external) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={linkClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      to={href} 
      className={linkClasses}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default AnimatedLink;
