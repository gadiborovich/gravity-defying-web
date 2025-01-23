import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large circle */}
      <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-accent-teal/10 to-accent-purple/10 blur-3xl -top-20 -left-20 animate-float"></div>
      
      {/* Medium circle */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-accent-purple/10 to-accent-green/10 blur-3xl top-1/2 -right-20 animate-float" 
        style={{ animationDelay: '2s' }}></div>
      
      {/* Small circle */}
      <div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-accent-green/10 to-accent-teal/10 blur-3xl bottom-20 left-1/3 animate-float"
        style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default FloatingShapes;