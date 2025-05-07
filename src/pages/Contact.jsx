import React from 'react';
import { Mail, Instagram, Github } from 'lucide-react';
import { buildMeta } from '../buildMeta';

export default function Contact() {
  return (
    <section className="contact-page px-4 py-10 max-w-md mx-auto break-words text-left">
      <h1>Contact</h1>
      <p className="text-md mb-4 dark:text-gray-300">
        Feel free to reach out — whether it’s about collaboration, exhibitions, prints, or just conversation.
      </p>
      <div className="flex items-center gap-2 mb-4">
        <Mail className="w-5 h-5 text-blue-400" />
        <a href="mailto:cagdasmore@gmail.com">cagdasmore@gmail.com</a>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <Instagram className="w-5 h-5 text-pink-400" />
        <a
          href="https://instagram.com/cagdas.raw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          @cagdas.raw
        </a>
      </div>
      <div className="flex items-center gap-2 mb-6">
        <Github className="w-5 h-5 text-gray-400" />
        <a
          href="https://github.com/seewhateyeshot/seewhateyeshot.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline break-words"
        >
          open-source code for the website
        </a>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray mb-6">
        The site is open source — feel free to contribute, report bugs, or adapt it for your own project.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray mb-6">
        Last updated: {new Date(buildMeta.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })} ·{' '}
        <a
          href={`https://github.com/seewhateyeshot/seewhateyeshot.github.io/commit/${buildMeta.commit}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Commit: {buildMeta.commit}
        </a>
      </p>


      <p className="text-md text-gray-900 whitespace-normal break-words">
        Also, talk to me about grants and lucky opportunities — I’m very happy to not be doing software engineering at the moment, but I’m also just eking out a living. It’d be nice to get some work in print and out there, so I can keep doing this.
      </p>

    </section>
  );
}