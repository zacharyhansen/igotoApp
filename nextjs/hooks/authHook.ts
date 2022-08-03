import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../config/firebase.config';

const authHook = () => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { currentUser } = auth;

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);

  const authCheck = (url: string) => {
    console.log('authCheck: ', currentUser);
    if (!currentUser) {
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath }
      });
    }
  };
};

export default authHook;
