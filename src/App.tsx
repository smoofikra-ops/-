/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './i18n/LanguageContext';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { Quote } from './pages/Quote';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Process } from './pages/Process';
import { Quality } from './pages/Quality';
import { NotFound } from './pages/errors/NotFound';

// Placeholder for other pages to avoid errors
const Placeholder = () => <div className="pt-32 pb-20 text-center min-h-[60vh] flex items-center justify-center text-2xl font-bold text-graphite-400">قريباً / Coming Soon</div>;

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:slug" element={<ProjectDetails />} />
              <Route path="process" element={<Process />} />
              <Route path="quality" element={<Quality />} />
              <Route path="contact" element={<Quote />} />
              <Route path="quote" element={<Quote />} />
              <Route path="privacy" element={<Placeholder />} />
              <Route path="terms" element={<Placeholder />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}
