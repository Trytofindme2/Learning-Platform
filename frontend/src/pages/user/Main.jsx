import React from 'react';

import Intro from '../../components/user/main/Intro';
import FeaturesSection from '../../components/user/main/FeaturesSection';
import LanguagesSection from '../../components/user/main/LanguagesSection';
import Footer from '../../components/user/main/Footer';
import Review from '../../components/user/main/Review';

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section>
          <Intro />
        </section>

        <section>
          <LanguagesSection />
        </section>

        <section className="bg-white">
          <FeaturesSection />
        </section>

        <section>
          <Review />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Main;
