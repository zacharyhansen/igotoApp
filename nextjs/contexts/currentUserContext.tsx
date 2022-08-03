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

interface ICurrentUserContext {
  currentUser: User | null;
}

const CurrentUserContext = createContext<ICurrentUserContext | null>(null);

interface ICurrentUserProviderProps {
  auth: Auth;
  children: JSX.Element | JSX.Element[];
}

export const CurrentUserProvider: FunctionComponent<ICurrentUserProviderProps> =
  ({ children, auth }) => {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState(auth.currentUser);

    const handleUserLoggedOut = useCallback(() => {
      router.push('/login');
    }, [router]);

    // Attach firebase observer that will setCurrentUser if auth state changes
    useEffect(
      () =>
        onAuthStateChangedObserver(auth, setCurrentUser, handleUserLoggedOut),
      []
    );

    return (
      <CurrentUserContext.Provider value={{ currentUser }}>
        {children}
      </CurrentUserContext.Provider>
    );
  };

export const useCurrentUserContext = () =>
  useContext<ICurrentUserContext | null>(CurrentUserContext);
