
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type CategoryType = 'news' | 'opinion' | 'business' | 'sport' | 'entertainment' | 'lifestyle' | 'technology' | 'science';

const categoryStyles: Record<CategoryType, string> = {
  news: 'bg-blue-50 text-blue-700 border-blue-200',
  opinion: 'bg-amber-50 text-amber-700 border-amber-200',
  business: 'bg-green-50 text-green-700 border-green-200',
  sport: 'bg-orange-50 text-orange-700 border-orange-200',
  entertainment: 'bg-purple-50 text-purple-700 border-purple-200',
  lifestyle: 'bg-rose-50 text-rose-700 border-rose-200',
  technology: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  science: 'bg-teal-50 text-teal-700 border-teal-200',
};

interface CategoryBadgeProps {
  category: CategoryType;
  className?: string;
  linkable?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ 
  category, 
  className, 
  linkable = true,
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
    lg: 'text-sm px-3 py-1',
  };

  const badgeClasses = cn(
    'inline-flex items-center rounded-full border font-medium transition-all',
    sizeClasses[size],
    categoryStyles[category],
    'animate-fade-in',
    className
  );

  if (linkable) {
    return (
      <Link 
        to={`/category/${category}`} 
        className={badgeClasses}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Link>
    );
  }

  return (
    <span className={badgeClasses}>
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </span>
  );
};

export default CategoryBadge;
