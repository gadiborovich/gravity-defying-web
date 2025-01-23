import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-space-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-heading font-bold bg-gradient-to-r from-accent-teal to-accent-purple text-transparent bg-clip-text">
          Antigravity Capital
        </div>
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-space-light/20"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['About', 'Portfolio', 'Team', 'Contact'].map((item) => (
            <button
              key={item}
              className="text-white/80 hover:text-accent-teal transition-colors"
            >
              {item}
            </button>
          ))}
          <Button
            className="bg-gradient-to-r from-accent-teal to-accent-purple hover:opacity-90 text-white"
          >
            Connect Wallet
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 top-[73px] bg-space-dark/95 backdrop-blur-md z-40">
            <div className="flex flex-col items-center pt-8 space-y-6">
              {['About', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <button
                  key={item}
                  className="text-xl text-white/80 hover:text-accent-teal transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </button>
              ))}
              <Button
                className="bg-gradient-to-r from-accent-teal to-accent-purple hover:opacity-90 text-white mt-4"
              >
                Connect Wallet
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;