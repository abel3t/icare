import React, { useState, useEffect, useRef } from 'react';

export default function WithHeaderScroll (WrappedComponent) {
  return function (props) {
    const headerRef = useRef(null);
    const [ scroll, setScroll ] = useState(0);
    const [ isHeaderFixed, setIsHeaderFixed ] = useState(false);
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    useEffect(() => {
      if (scroll >= headerRef.current.offsetHeight) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    }, [ scroll ]);

    function handleScroll () {
      setScroll(window.scrollY);
    }

    return (
      <div
        ref={ headerRef }
        className={ `header-scroll-wrapper ${ isHeaderFixed ? 'fixed' : '' }` }
      >
        <WrappedComponent { ...props } />
      </div>
    );
  };
}