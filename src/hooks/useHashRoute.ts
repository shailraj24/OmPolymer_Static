import { useState, useEffect } from 'react';

export type RouteType = 
  | { page: 'home' }
  | { page: 'about' }
  | { page: 'products' }
  | { page: 'product-detail'; productId: string }
  | { page: 'blog' }
  | { page: 'blog-detail'; blogId: string }
  | { page: 'contact' };

export function parseHash(hash: string): RouteType {
  const clean = hash.replace(/^#\/?/, '').trim();
  
  if (!clean || clean === 'home') {
    return { page: 'home' };
  }
  if (clean === 'about') {
    return { page: 'about' };
  }
  if (clean === 'products') {
    return { page: 'products' };
  }
  if (clean.startsWith('product-')) {
    const productId = clean.replace('product-', '');
    return { page: 'product-detail', productId };
  }
  if (clean === 'blog' || clean === 'insights') {
    return { page: 'blog' };
  }
  if (clean.startsWith('blog-')) {
    const blogId = clean.replace('blog-', '');
    return { page: 'blog-detail', blogId };
  }
  if (clean === 'contact') {
    return { page: 'contact' };
  }

  return { page: 'home' };
}

export function useHashRoute() {
  const [route, setRoute] = useState<RouteType>(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = parseHash(window.location.hash);
      setRoute(nextRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (hash: string) => {
    if (!hash.startsWith('#')) {
      hash = '#' + hash;
    }
    window.location.hash = hash;
  };

  return { route, navigate };
}
