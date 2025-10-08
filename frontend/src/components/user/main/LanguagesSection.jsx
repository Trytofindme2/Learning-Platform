import React from 'react'

const LanguagesSection = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Popular Languages
          </h3>

          {/* One-row language list */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Japanese */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center w-40">
              <span className="text-4xl">🇯🇵</span>
              <h4 className="mt-4 font-semibold">Japanese</h4>
            </div>

            {/* Chinese */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center w-40">
              <span className="text-4xl">🇨🇳</span>
              <h4 className="mt-4 font-semibold">Chinese</h4>
            </div>

            {/* French */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center w-40">
              <span className="text-4xl">🇫🇷</span>
              <h4 className="mt-4 font-semibold">French</h4>
            </div>

            {/* Spanish */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center w-40">
              <span className="text-4xl">🇪🇸</span>
              <h4 className="mt-4 font-semibold">Spanish</h4>
            </div>

            {/* British English */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center w-40">
              <span className="text-4xl">🇬🇧</span>
              <h4 className="mt-4 font-semibold">British English</h4>
            </div>

            {/* American English */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center w-40">
              <span className="text-4xl">🇺🇸</span>
              <h4 className="mt-4 font-semibold">American English</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LanguagesSection
