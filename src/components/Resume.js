import React from 'react';
import Header from './header';
import Footer from './footer';
import resume from './images/resume.png';

const Resume = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header
        titleOne="Jocelyn's"
        colorOne="text-rem-blue"
        titleTwo="Resume"
        quote='"She is always willing to ask the clarifying questions to ensure understanding. Jocelyn brings integrity to all she does."'
      />
      <main
        id="main-content"
        className="p-5 m-5 md:flex container rounded-md mx-auto bg-rem-tan"
      >
        <a
          href="https://docs.google.com/document/d/1EXa5iFyinKh5faImrttYxJuqe4G8j8VMO66CiqANvVM/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Jocelyn Remington's resume in Google Docs. Opens in a new tab."
        >
          <img
            src={resume}
            className="w-screen object-cover hover:scale-105 transition-all transform duration-400 rounded-md max-w-60 max-h-60 md:float-right"
            alt="Preview of Jocelyn Remington's resume. Opens the full resume in Google Docs."
          />
        </a>
        <div className="flex-col">
          <p className="pt-3 pl-5 text-xl font-light leading-8">
            Skilled in accessibility-minded design reviews, WCAG 2.1-informed
            content decisions, accessible document practices, and
            cross-functional collaboration with educators, stakeholders, and
            digital teams.
          </p>
          <h2 className="pt-5 pl-5 text-3xl">SKILLS:</h2>
          <p className="pt-2 pl-5 font-thin text-2xl leading-9">
            | WCAG 2.1 AA | Section 508 | ADA Awareness | Accessible Documents |
            Accessible Media | Universal Design | Accessibility Review | VPAT
            Familiarity | Figma | Adobe CC | HTML5 | CSS | JavaScript | React |
            Python | Django | Bootstrap | Tailwind |
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
