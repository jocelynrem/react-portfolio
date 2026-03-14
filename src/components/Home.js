import React from 'react';
import Header from './header';
import Footer from './footer';
import avatar from './images/IMG_7518.JPG';

const Home = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col justify-between">
        <Header
          titleOne="Jocelyn"
          colorOne="text-rem-blue"
          titleTwo="Remington"
          // quote='"She is always willing to ask the clarifying questions to ensure understanding. Jocelyn brings integrity to all she does."'
          quoteTwo="Accessibility-minded digital professional with a background in education, training, and user-centered design."
        />
        <main id="main-content" className="p-5 m-5 md:flex container rounded-md mx-auto bg-rem-tan">
          <img
            src={avatar}
            className="rounded-full max-w-60 max-h-60 md:float-right"
            alt="cartoon avatar of Jocelyn"
          />
          <div className="flex-col">
            {/* <p className="pt-5 pl-5 text-2xl font-light">"Jocelyn is knowledgeable, articulate, and a pleasure to work with. She never hesitates to be the leader among her peers."</p> */}
            {/* <p className="pt-5 pl-5 text-3xl font-extralight">
              Accessibility specialist and web developer leveraging a background
              in education to help teams create inclusive digital experiences,
              accessible instructional materials, and user-centered systems.
            </p> */}
            <p className="pt-5 pl-5 text-2xl font-light leading-8">
              Digital accessibility specialist, educator, and former UX/UI
              developer with experience supporting accessible technology in K–12
              schools. Background includes accessible design, educator training,
              and evaluating digital tools used in classrooms. Known for
              translating accessibility standards into practical guidance that
              helps educators and technology teams create digital content and
              systems that work for all learners.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
