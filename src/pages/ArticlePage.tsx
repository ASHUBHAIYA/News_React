
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Calendar, Share2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CategoryBadge from '@/components/shared/CategoryBadge';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

// Sample article content for the Climate Change article
const climateArticle = {
  id: '1',
  title: 'Global Economic Summit Addresses Climate Change',
  excerpt: 'World leaders gather to discuss economic policies and environmental challenges at the annual Global Economic Forum.',
  category: 'news',
  imageUrl: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=1000',
  publishedAt: '2024-01-10T10:00:00Z',
  readTime: '5 min read',
  slug: 'global-economic-summit',
  content: `
  <h2>Climate change already reducing global GDP: report</h2>
  <p><strong>Climate change is already hammering the global economy and will cut world GDP by at least 19% by 2049, with poorer countries bearing the brunt of the damage, according to a report published on Thursday.</strong></p>
  
  <p>The poorest countries face GDP losses of up to 64% over the next 25 years unless decisive action is taken to reduce planet-heating emissions, found the research by the University of Delaware and the International Institute for Applied Systems Analysis.</p>
  
  <p>The report, commissioned by the Rockefeller Foundation, a U.S.-based charity, found that climate losses are accelerating rapidly and that global GDP was already 7.6% lower in 2023 compared with if there was no climate change.</p>
  
  <p>"The world is already paying a devastating economic price for climate change and the damages will only continue to worsen without immediate action to lower carbon emissions," said Rockefeller Foundation President Rajiv Shah in a statement.</p>
  
  <p>The report adds to mounting evidence that climate change is already driving substantial economic costs and will, in the worst-case scenario, cost roughly $38 trillion a year by 2049, researchers found.</p>
  
  <h3>Extreme heat</h3>
  
  <p>The lower range of a 19% GDP loss by the late 2040s would require emissions to fall sharply in line with the most ambitious of the pathways used by the U.N.-backed Intergovernmental Panel on Climate Change (IPCC).</p>
  
  <p>This scenario would see the world have a roughly two-thirds chance of keeping global temperature rise to 2 degrees Celsius or lower above preindustrial times.</p>
  
  <p>Rising temperatures, changing rainfall patterns, higher sea levels and more frequent extreme weather events have a range of economic impacts, including infrastructure damage, reduced labour productivity and reduced crop yields.</p>
  
  <p>The study found varying impacts across different climate threats, with extreme heat and changing rainfall patterns in particular driving mounting economic damage, especially in the Global South.</p>
  
  <p>Lower GDP growth due to climate impacts also pushes countries into a "low-growth trap" in which a 10% decline in GDP reduces the size of the economy by 17% in the long run, the report said.</p>
  
  <p>Study co-author James Rising from the University of Delaware said the findings showed that "climate costs scale with the size of the economy, so the global economy contracting from climate damages in turn slows the growth of these costs".</p>
  
  <p>"But there are no winners in this scenario, because every economy is being suppressed by a warming climate," he added.</p>
  
  <p>The research comes amid growing discussion about the costs of the climate crisis and how funding for climate adaptation and for "loss and damage" should be allocated.</p>
  `
};

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = climateArticle; // In a real app, you would fetch this based on the slug

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) return null;

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              <CategoryBadge category={article.category} className="mb-4" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {article.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4 text-sm text-gray-500 border-b border-gray-200 dark:border-gray-700 pb-6">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formattedDate}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                <HoverCard>
                  <HoverCardTrigger>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto p-2">
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M18.05 21.795a.75.75 0 01-.615.245.75.75 0 01-.489-.188L12.03 17.76a.75.75 0 01-.22-.531v-1.482a.75.75 0 01.715-.75 7.5 7.5 0 10-3.536-14.618.75.75 0 01.124 1.5 6 6 0 113.542 10.802.75.75 0 01-.493.992z" clipRule="evenodd"></path>
                          <path d="M3.06 10.181a.75.75 0 01.459-.96 7.47 7.47 0 013.111-.72.75.75 0 01.132 1.498 5.97 5.97 0 00-2.48.576.75.75 0 01-.987-.385z"></path>
                        </svg>
                      </button>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-10 rounded-xl overflow-hidden">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Article Content */}
            <Card className="bg-white/70 dark:bg-black/50 shadow-sm">
              <CardContent className="p-8">
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-img:rounded-lg"
                  dangerouslySetInnerHTML={{ __html: article.content || '' }}
                />
              </CardContent>
            </Card>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
