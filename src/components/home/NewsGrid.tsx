
import React from 'react';
import ArticleCard, { ArticleProps } from './ArticleCard';
import { cn } from '@/lib/utils';

interface NewsGridProps {
  articles: ArticleProps[];
  className?: string;
}

const NewsGrid: React.FC<NewsGridProps> = ({ articles, className }) => {
  if (!articles.length) return null;

  const [featuredArticle, ...remainingArticles] = articles;

  return (
    <div className={cn("space-y-8", className)}>
      {/* Featured Article */}
      <ArticleCard
        article={featuredArticle}
        variant="featured"
        className="animate-fade-up"
      />

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {remainingArticles.map((article, index) => (
          <ArticleCard
            key={article.id}
            article={article}
            className={cn(
              "animate-fade-up",
              `delay-${(index % 5) + 1}`
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsGrid;
