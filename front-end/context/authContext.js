import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create the context
export const AuthContext = createContext();

// Initial state for auth
export const initialAuthState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
  userRole: null,
};

// Reducer to handle auth state changes
export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        userToken: action.payload.token,
        userRole: action.payload.role,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        isSignout: false,
        userToken: action.payload.token,
        userRole: action.payload.role,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isSignout: true,
        userToken: null,
        userRole: null,
      };
    case 'REFRESH_TOKEN':
      return {
        ...state,
        userToken: action.payload.token,
      };
    default:
      return state;
  }
};

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  // Load token from storage and restore session
  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      let userRole;

      try {
        userToken = await AsyncStorage.getItem('userToken');
        userRole = await AsyncStorage.getItem('userRole');
      } catch (e) {
        console.error('Failed to load user token:', e);
      }

      dispatch({
        type: 'RESTORE_TOKEN',
        payload: { token: userToken, role: userRole },
      });
    };

    bootstrapAsync();
  }, []);

  const authContextValue = useMemo(
    () => ({
      state,
      signIn: (token, role) => {
        dispatch({ type: 'SIGN_IN', payload: { token, role } });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
          await AsyncStorage.removeItem('userRole');

          dispatch({ type: 'SIGN_OUT' });
        } catch (error) {
          console.error('Logout failed:', error);
        }
      },
      refreshToken: async () => {
        try {
          const response = await axios.post('https://yourapi.com/auth/refresh', {
            token: state.userToken,
          });

          const { token } = response.data;
          await AsyncStorage.setItem('userToken', token);

          dispatch({ type: 'REFRESH_TOKEN', payload: { token } });
        } catch (error) {
          console.error('Token refresh failed:', error);
          // Optionally, force logout if refresh fails
          dispatch({ type: 'SIGN_OUT' });
        }
      },
    }),
    [state.userToken]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
