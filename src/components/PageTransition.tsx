import React, { useRef, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
  enterDelay?: number;
  exitDelay?: number;
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children,
  enterDelay = 300,
  exitDelay = 200
}) => {
  const location = useLocation();
  const nodeRef = useRef(null);
  
  useEffect(() => {
    // This ensures that when the transition starts,
    // the window is already scrolled to the top
    window.scrollTo({
      top: 0,
      behavior: 'auto' // Use 'auto' for instant scroll before animation starts
    });
  }, [location.pathname]);
  
  return (
    <TransitionGroup className="page-transition-container">
      <CSSTransition
        key={location.pathname}
        nodeRef={nodeRef}
        timeout={{
          enter: 800 + enterDelay,
          exit: 500 + exitDelay
        }}
        classNames="page"
        unmountOnExit
      >
        <div ref={nodeRef} className="page-transition-wrapper">
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition; 