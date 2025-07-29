'use client';

import AboutMe from '@/components/AboutMe/AboutMe';

import Stats from '@/components/Stats/Stats';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <AboutMe />
      </div>
      <Stats />
    </section>
  );
};

export default Home;
