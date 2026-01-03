import React from 'react';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 z-10">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="py-20 sm:py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,209,0,0.1),rgba(255,255,255,0))]"></div>
      <div 
        className="absolute inset-0 opacity-10 animate-pan-grid"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      ></div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Nima uchun <span className="text-primary">DATA SPACE</span>?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Biz shunchaki o'rgatmaymiz, balki eng talabgir texnologiyalar bo'yicha amaliy tajriba beramiz va karyerangizning keyingi bosqichiga tayyorlaymiz.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            title="Amaliyotga yo'naltirilgan"
            description="Har bir dars real hayotiy loyihalar va amaliy topshiriqlar bilan mustahkamlanadi."
          />
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
            title="Tajribali Mentorlar"
            description="Darslar sohaning yetakchi mutaxassislari tomonidan olib boriladi, ular o'z bilim va tajribalari bilan o'rtoqlashadilar."
          />
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            title="Eng so'nggi texnologiyalar"
            description="O'quv dasturlarimiz doimiy ravishda yangilanib, eng aktual va talabgir texnologiyalarni o'z ichiga oladi."
          />
        </div>
      </div>
    </div>
  );
};

export default About;