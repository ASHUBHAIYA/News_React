import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import CategoryBadge from '../shared/CategoryBadge';

export interface ArticleProps {
  id: string;
  title: string;
  excerpt: string;
  category: 'news' | 'opinion' | 'business' | 'sport' | 'entertainment' | 'lifestyle' | 'technology' | 'science';
  imageUrl: string;
  publishedAt: string;
  readTime: string;
  slug: string;
  content?: string;
}

interface ArticleCardProps {
  article: ArticleProps;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
  imageHeight?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  variant = 'default',
  className,
  imageHeight = 'h-48',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, excerpt, category, imageUrl, publishedAt, readTime, slug, content } = article;
  
  // Format date to human-readable
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  if (variant === 'compact') {
    return (
      <div 
        className={cn("group flex items-start space-x-4 p-3 transition-all duration-300 rounded-lg hover:bg-gray-50", 
          className
        )}
      >
        <div className="relative flex-shrink-0 w-24 h-24 overflow-hidden rounded-md">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex-1 min-w-0">
          <CategoryBadge category={category} size="sm" className="mb-2" />
          <h3 className="text-base font-semibold line-clamp-2 group-hover:text-news-accent">
            <Link to={`/article/${slug}`}>{title}</Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{formattedDate}</p>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div 
        className={cn(
          "group relative overflow-hidden rounded-xl glass-card transition-all duration-300",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/article/${slug}`} className="block">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className={cn(
                "object-cover w-full h-full transition-transform duration-700",
                isHovered ? "scale-105" : "scale-100"
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 w-full p-6 text-white">
            <CategoryBadge category={category} className="mb-3" />
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-shadow">
              {title}
            </h2>
            <p className="text-sm md:text-base text-white/90 mb-4 line-clamp-2">
              {excerpt}
            </p>
            <div className="flex items-center text-sm text-white/80 space-x-4">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formattedDate}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {readTime}
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/article/${slug}`} className="block">
        <div className={cn("relative overflow-hidden", imageHeight)}>
          <img
            src={imageUrl}
            alt={title}
            className={cn(
              "object-cover w-full h-full transition-transform duration-700",
              isHovered ? "scale-105" : "scale-100"
            )}
          />
        </div>
        <div className="p-4">
          <CategoryBadge category={category} className="mb-2" />
          <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-news-accent">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-2 mb-4">{excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formattedDate}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {readTime}
              </span>
            </div>
            <ArrowRight 
              className={cn(
                "w-5 h-5 transition-transform duration-300",
                isHovered ? "translate-x-1" : "translate-x-0"
              )}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
