import { Auth, User } from 'firebase/auth';
import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import onAuthStateChangedObserver from '../observers/onAuthStateChangedObserver';
import { useRouter } from 'next/router';
import { routes } from '../constants/routes';

interface ICurrentUserContext {
  currentUser: User | null;
  loading: boolean;
}

// Default user context
const CurrentUserContext = createContext<ICurrentUserContext>({
  currentUser: null,
  loading: true
});

interface ICurrentUserProviderProps {
  auth: Auth;
  loading: boolean;
  children: JSX.Element | JSX.Element[];
}

/**
 * Provider to attach firebase onAuthStateChangedObserver and manage user context state
 */
export const CurrentUserProvider: FunctionComponent<ICurrentUserProviderProps> =
  ({ children, auth }) => {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState(auth.currentUser);
    const [loading, setLoading] = useState<boolean>(true);

    const handleUserLoggedOut = useCallback(() => {
      router.push(routes.LOGIN);
    }, [router]);

    // Attach firebase observer that will setCurrentUser once auth state changes
    useEffect(
      () =>
        onAuthStateChangedObserver(
          auth,
          setCurrentUser,
          setLoading,
          handleUserLoggedOut
        ),
      []
    );

    console.log('loading', loading, currentUser);
    return (
      <CurrentUserContext.Provider value={{ currentUser, loading }}>
        {/* Only render component tree once user auth finishes */}
        {loading ? null : children}
      </CurrentUserContext.Provider>
    );
  };

export const useCurrentUserContext = () =>
  useContext<ICurrentUserContext>(CurrentUserContext);
