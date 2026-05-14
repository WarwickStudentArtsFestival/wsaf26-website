'use client';

import { useEffect } from 'react';

const REDIRECT_DELAY_MS = 750;

export default function QrRedirectClient({
  destination,
}: {
  destination: string;
}) {
  useEffect(() => {
    let redirectTimer: ReturnType<typeof setTimeout> | undefined;

    const redirect = () => {
      redirectTimer = setTimeout(() => {
        window.location.replace(destination);
      }, REDIRECT_DELAY_MS);
    };

    if (document.readyState === 'complete') {
      redirect();
      return () => {
        if (redirectTimer) {
          clearTimeout(redirectTimer);
        }
      };
    }

    window.addEventListener('load', redirect, { once: true });

    return () => {
      window.removeEventListener('load', redirect);
      if (redirectTimer) {
        clearTimeout(redirectTimer);
      }
    };
  }, [destination]);

  return null;
}
