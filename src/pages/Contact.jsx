import React from 'react';
import { Mail, Instagram, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section className="contact-page">
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
          className="text-blue-400 hover:underline"
        >
          github.com/seewhateyeshot/seewhateyeshot.github.io
        </a>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray mb-6">
        The site is open source — feel free to contribute, report bugs, or adapt it for your own project.
      </p>

      <p className="text-md text-gray-900">
        Also, talk to me about grants and lucky opportunities — I’m very happy to not be doing software engineering at the moment, but I’m also just eking out a living. It’d be nice to get some work in print and out there, so I can keep doing this.
      </p>

    </section>
  );
}