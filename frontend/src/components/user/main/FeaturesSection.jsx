import React from 'react';

const FeaturesSection = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-12">Why Learn with Us?</h3>
          <div className="grid md:grid-cols-3 gap-10">
            
            <div className="p-8 bg-gray-50 rounded-lg shadow hover:shadow-lg transition min-h-[300px] flex flex-col justify-between">
              <h4 className="text-xl font-semibold mb-4">Native Tutors</h4>
              <p className="text-gray-600 mb-4">
                Learn directly from native speakers with real conversational practice.
                Our tutors are experienced, friendly, and here to help you reach fluency faster.
              </p>
              <span className="text-sm text-gray-400">Sessions available 7 days a week</span>
            </div>
            
            <div className="p-8 bg-gray-50 rounded-lg shadow hover:shadow-lg transition min-h-[300px] flex flex-col justify-between">
              <h4 className="text-xl font-semibold mb-4">AI Practice</h4>
              <p className="text-gray-600 mb-4">
                Practice speaking & writing with AI-driven feedback in real time.
                Get instant corrections and tips to improve your grammar and pronunciation.
              </p>
              <span className="text-sm text-gray-400">Available anytime, anywhere</span>
            </div>
            
            <div className="p-8 bg-gray-50 rounded-lg shadow hover:shadow-lg transition min-h-[300px] flex flex-col justify-between">
              <h4 className="text-xl font-semibold mb-4">Gamified Learning</h4>
              <p className="text-gray-600 mb-4">
                Earn points, badges, and streaks to stay motivated while learning.
                Track your progress and challenge friends for a fun learning experience.
              </p>
              <span className="text-sm text-gray-400">Perfect for learners of all levels</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesSection;
