import React from "react";
import { Link } from "react-router";

const Intro = () => {
  return (
    <section className="bg-white-50">
      <div className="container mx-auto flex flex-col-reverse items-center px-6 py-16 lg:flex-row lg:py-24">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Master Any Language <br />
            <span className="text-indigo-600">Learn by Practice</span>
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Interactive lessons, real conversations, and personalized learning
            paths. Start speaking with confidence today!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-center text-white transition hover:bg-indigo-700"
            >
              Start Free Trial
            </a>
            <Link
              to={'/NeuroLingua/courses'}
              className="rounded-lg border border-indigo-600 px-6 py-3 text-center text-indigo-600 transition hover:bg-indigo-50"
            >
              Explore Courses
            </Link>
          </div>
        </div>


        <div className="flex-1 hidden lg:flex justify-center items-center">
          <div
            className="h-72 w-72 lg:h-96 lg:w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
