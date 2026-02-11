import { useState, useEffect } from 'react';

export function useScrollSpy(ids, offset = 0) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setActiveId(hash);
    };

    // Set initial value
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    // Also listen for popstate (back/forward navigation)
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  return activeId;
}
