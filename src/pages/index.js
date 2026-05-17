import React from 'react';
// Layout
import MainLayout from '../layouts/MainLayout';
// sections
import HomeHero from '../sections/HomeHero';
import Skills from '../sections/Skills';

import Contact from '../sections/Contact';
// mock
import { documentTitle } from '../mock/profile';
import { Experiences } from '../sections/Experiences';
import Projects from '../sections/Projects';

// ------------------------------------------------

export default function Home() {
  const meta = (
    <>
      <title>{documentTitle}</title>
    </>
  );

  return (
    <MainLayout meta={meta}>
      <HomeHero />
      {/* Skill Section  */}
      <Skills />
      {/* Exprerience Section  */}
      <Experiences />
      {/* Works Section  */}
      <Projects />
      {/* Contact Section  */}
      <Contact />
    </MainLayout>
  );
}
