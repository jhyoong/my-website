'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [greeting, setGreeting] = useState('Hi.');

  useEffect(() => {
    const greetings = ['Hello!', 'Hi.', 'Hey there.', 'Greetings, web-crawler.', 'Did you come here after reading my resume?', 'I don\'t bite.'];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(randomGreeting);
  }, []);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <div className="about">
        <p>I&apos;m JiaHui. I&apos;m a software engineer that deals mostly with AWS Cloud and backend services. Right now, I&apos;m currently tinkering with the new AI technologies; local LLMs, Agentic AI, MCP etc. If you&apos;re recruiting for software roles, feel free to drop an email to hello@yoongjiahui.com</p>
      </div>
      <a href="https://linkedin.com/in/yoongjh" className="linkedin-link" target="_blank" rel="noopener noreferrer">
        <svg className="linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        LinkedIn
      </a>
    </div>
  );
}
