import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import uxSample1 from './images/ux-portfolio/0y8vLSS9pqIkvnb7.png';
import uxSample2 from './images/ux-portfolio/SdwD0OzyTssplcgW.png';
import uxSample3 from './images/ux-portfolio/UsONhL2AKCENq1SP.png';
import uxSample4 from './images/ux-portfolio/fjtXe8MoewuV5aS4.gif';
import uxSample5 from './images/ux-portfolio/hTsrbz46woXtF1yo.gif';
import uxSample6 from './images/ux-portfolio/lv41crwJb0tu8eVn.png';
import uxSample7 from './images/ux-portfolio/rYfjqQYPBzxrxJJz.png';

const uxSamples = [
  {
    image: uxSample1,
    alt: 'UX portfolio screenshot showing interface layouts and annotated design presentation content',
  },
  {
    image: uxSample2,
    alt: 'UX portfolio screenshot showing interface mockups with embedded headings and product visuals',
  },
  {
    image: uxSample3,
    alt: 'UX portfolio screenshot showing structured design samples and visual hierarchy choices',
  },
  {
    image: uxSample4,
    alt: 'Animated UX portfolio sample showing interaction or motion behavior within the design work',
  },
  {
    image: uxSample5,
    alt: 'Animated UX portfolio sample showing interface transitions and visual storytelling',
  },
  {
    image: uxSample6,
    alt: 'UX portfolio screenshot showing additional interface exploration and design system choices',
  },
  {
    image: uxSample7,
    alt: 'UX portfolio screenshot showing polished interface design samples with embedded captions',
  },
];

const recentProjects = [
  {
    title: 'NCTies',
    description:
      'Workshop pages that guide educators through beginner-friendly website building and customization workflows.',
    skills:
      'HTML, CSS, instructional design, accessibility-minded content structure',
    repoUrl: 'https://github.com/jocelynrem/NCTies',
    liveUrl: 'https://jocelynrem.github.io/NCTies/',
  },
  {
    title: 'Ozobot Fractions',
    description:
      'Interactive fractions activities designed to support hands-on math learning with Ozobot classroom integration.',
    skills: 'HTML, CSS, JavaScript, K-12 learning design',
    repoUrl: 'https://github.com/jocelynrem/ozobot-fractions',
    liveUrl: 'https://jocelynrem.github.io/ozobot-fractions/',
  },
  {
    title: 'Nature Scout',
    description:
      'Kid-friendly field guide app for first grade science exploration with read-aloud support and PWA features.',
    skills: 'JavaScript, Bulma, PWA, audio support, elementary science UX',
    repoUrl: 'https://github.com/jocelynrem/nature-scout',
    liveUrl: 'https://jocelynrem.github.io/nature-scout/',
  },
  {
    title: 'VLE Tech Website',
    description:
      'Family-facing classroom technology site that explains digital learning tools and supports home-school communication.',
    skills:
      'HTML, Tailwind, Flowbite, family communication, content organization',
    liveUrl: 'https://sites.google.com/ncmcs.org/vletechnology/home_1',
  },
  {
    title: 'Zoologist Academy',
    description:
      'Interactive zoology game built for young learners with kid-friendly navigation, audio support, and playful learning flows.',
    skills:
      'React, Vite, audio integration, game-based learning, inclusive design',
    repoUrl: 'https://github.com/jocelynrem/zoologist-academy',
    liveUrl: 'https://jocelynrem.github.io/zoologist-academy/',
  },
];

const ProjectCard = ({ title, description, skills, repoUrl, liveUrl }) => {
  return (
    <article className="flex h-full w-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rem-blue">
          Recent Project
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-gray-700">{title}</h2>
        <p className="mt-4 text-base leading-7 text-gray-700">{description}</p>
        <p className="mt-4 text-sm leading-6 text-gray-600">
          <span className="font-semibold text-gray-700">Focus:</span> {skills}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title}. Opens in a new tab.`}
            className="rounded-full bg-rem-blue px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            View Project
          </a>
        ) : null}
        {repoUrl ? (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View the GitHub repository for ${title}. Opens in a new tab.`}
            className="rounded-full border border-rem-blue px-4 py-2 text-sm font-medium text-rem-blue hover:bg-rem-blue hover:text-white"
          >
            GitHub Repo
          </a>
        ) : null}
      </div>
    </article>
  );
};

const Portfolio = () => {
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const activeSample = uxSamples[activeSampleIndex];

  const showPreviousSample = () => {
    setActiveSampleIndex((currentIndex) =>
      currentIndex === 0 ? uxSamples.length - 1 : currentIndex - 1,
    );
  };

  const showNextSample = () => {
    setActiveSampleIndex((currentIndex) =>
      currentIndex === uxSamples.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header
        titleOne="Jocelyn's"
        colorOne="text-rem-blue"
        titleTwo="Portfolio"
        quote='"Jocelyn is knowledgeable, articulate, and a pleasure to work with. She never hesitates to be the leader among her peers."'
      />
      <main id="main-content" className="container mx-auto my-3 px-4 pb-16">
        <section className="mt-5">
          <h1 className="ml-1 text-4xl font-thin">Developer Portfolio</h1>
          <p className="ml-1 mt-4 max-w-3xl text-lg font-light leading-8 text-gray-700">
            Recent projects centered on education, accessibility-minded design,
            and digital experiences that make tools easier for students,
            families, and educators to use.
          </p>
          <div className="mx-auto mt-6 grid gap-6 p-2 md:grid-cols-1 lg:grid-cols-2">
            {recentProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                skills={project.skills}
                repoUrl={project.repoUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="mt-5 overflow-hidden rounded-2xl bg-rem-gray shadow-sm">
            <div className="p-4 md:p-6">
              <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                    <img
                      className="h-full w-full object-cover object-top"
                      src={activeSample.image}
                      alt={activeSample.alt}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-700">
                      Sample {activeSampleIndex + 1} of {uxSamples.length}
                    </p>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={showPreviousSample}
                        className="rounded-full border border-gray-700 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
                        aria-label="Show previous UX sample"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={showNextSample}
                        className="rounded-full bg-rem-blue px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                        aria-label="Show next UX sample"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-2 md:p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-700">
                    UI/UX Lead and Frontend Developer
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-gray-700">
                    Selected Design Samples
                  </h2>
                  <p className="mt-4 text-base leading-7 text-gray-700">
                    These samples showcase my approach to creating thoughtful,
                    user-centered digital experiences with a strong focus on
                    clarity, accessibility, and purposeful visual design.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                {uxSamples.map((sample, index) => (
                  <button
                    key={sample.alt}
                    type="button"
                    onClick={() => setActiveSampleIndex(index)}
                    className={`overflow-hidden rounded-xl border-2 transition-all ${
                      index === activeSampleIndex
                        ? 'border-rem-blue shadow-md'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`Show UX sample ${index + 1}`}
                    aria-pressed={index === activeSampleIndex}
                  >
                    <img
                      className="h-20 w-full object-cover object-top"
                      src={sample.image}
                      alt=""
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
