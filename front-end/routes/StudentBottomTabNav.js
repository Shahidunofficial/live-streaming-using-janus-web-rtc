import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentHome from '../app/Student/StudentHome';
import StudentSettings from '../app/Student/StudentSetting';
import StudentDashboard from '../app/Student/StudentDashboard';

const Tab = createBottomTabNavigator();

export default function StudentBottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StudentHome} />
      <Tab.Screen name="Dashboard" component={StudentDashboard} />
      <Tab.Screen name="settings " component={StudentSettings} />
    </Tab.Navigator>
  );
}