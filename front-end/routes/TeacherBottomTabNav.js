import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherHome from '../app/Teacher/TeacherHome';
import TeacherDashboard from '../app/Teacher/TeacherDashboard';
import TeacherSetting from '../app/Teacher/TeacherSetting';

const Tab = createBottomTabNavigator();

export default function TeacherBottomTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={TeacherHome} />
      <Tab.Screen name="Dashboard" component={TeacherDashboard} />
      <Tab.Screen name="Settings" component={TeacherSetting} />
    </Tab.Navigator>
  );
}
