import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./routes/AppNavigation";
import { AuthProvider } from './context/authContext';


export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </AuthProvider>
  );
}
