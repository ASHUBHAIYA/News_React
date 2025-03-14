
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsGrid from '@/components/home/NewsGrid';
import { ArticleProps } from '@/components/home/ArticleCard';

const sampleArticles: ArticleProps[] = [
  {
    id: '1',
    title: 'Global Economic Summit Addresses Climate Change',
    excerpt: 'World leaders gather to discuss economic policies and environmental challenges at the annual Global Economic Forum.',
    category: 'news',
    imageUrl: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=1000',
    publishedAt: '2024-01-10T10:00:00Z',
    readTime: '5 min read',
    slug: 'global-economic-summit'
  },
  {
    id: '2',
    title: 'Breakthrough in Quantum Computing Research',
    excerpt: 'Scientists achieve major milestone in quantum computing, paving the way for revolutionary technological advances.',
    category: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1000',
    publishedAt: '2024-01-09T15:30:00Z',
    readTime: '4 min read',
    slug: 'quantum-computing-breakthrough'
  },
  {
    id: '3',
    title: 'The Future of Sustainable Architecture',
    excerpt: 'Innovative eco-friendly building designs are reshaping urban landscapes and addressing environmental concerns.',
    category: 'lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1000',
    publishedAt: '2024-01-08T09:15:00Z',
    readTime: '6 min read',
    slug: 'sustainable-architecture'
  },
  {
    id: '4',
    title: 'Healthcare Innovation in the Digital Age',
    excerpt: 'Digital technologies are transforming healthcare delivery and improving patient outcomes worldwide.',
    category: 'science',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000',
    publishedAt: '2024-01-07T14:45:00Z',
    readTime: '7 min read',
    slug: 'healthcare-innovation'
  },
  {
    id: '5',
    title: 'The Rise of Electric Vehicles',
    excerpt: 'Electric vehicle adoption surges as manufacturers invest in new technologies and infrastructure.',
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1000',
    publishedAt: '2024-01-06T11:20:00Z',
    readTime: '5 min read',
    slug: 'electric-vehicles-rise'
  },
  {
    id: '6',
    title: 'Sports League Expansion Plans',
    excerpt: 'Major sports leagues announce expansion plans to include new cities and regions.',
    category: 'sport',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1000',
    publishedAt: '2024-01-05T16:00:00Z',
    readTime: '3 min read',
    slug: 'sports-league-expansion'
  },
  {
    id: '7',
    title: 'Cultural Festival Celebrates Diversity',
    excerpt: 'Annual cultural festival brings together communities to celebrate global traditions and heritage.',
    category: 'entertainment',
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1000',
    publishedAt: '2024-01-04T13:10:00Z',
    readTime: '4 min read',
    slug: 'cultural-festival'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4">
          <NewsGrid articles={sampleArticles} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
