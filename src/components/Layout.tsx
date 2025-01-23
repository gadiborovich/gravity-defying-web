import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-space-dark/80 backdrop-blur-md py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-heading mb-4 bg-gradient-to-r from-accent-teal to-accent-purple text-transparent bg-clip-text">
                Antigravity Capital
              </h3>
              <p className="text-white/60">
                Pioneering the future of decentralized finance through innovative blockchain technology.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-heading mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-accent-teal transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent-teal transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-accent-teal transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-accent-teal transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-heading mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-accent-teal transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-accent-teal transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-accent-teal transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent-teal transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-heading mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-accent-teal transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-accent-teal transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-accent-teal transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-accent-teal transition-colors">Medium</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
            © Antigravity Capital, {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;