import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeacherLogin from '../screens/teacherLogin';
import StudentLogin from '../screens/studentLogin';
import StudentSignup from '../screens/studentSignup';
import TeacherSignup from '../screens/TeacherSignup';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import TeacherBottomTab from './TeacherBottomTabNav';
import StudentBottomTab from './StudentBottomTabNav';


const AppNavigator=()=>{
  

    const Stack= createNativeStackNavigator();
    const {state} = useContext(AuthContext);
    const authenticatedUser = state?.userToken && state?.userRole;

    return(
        <Stack.Navigator initialRouteName="StudentLogin" screenOptions={{ headerShown: false }}>
         {!authenticatedUser?(
            <>
            <Stack.Screen name='TeacherLogin' component={TeacherLogin}/>
            <Stack.Screen name='StudentLogin' component={StudentLogin}/>
            <Stack.Screen name='StudentSignup' component={StudentSignup}/>
            <Stack.Screen name='TeacherSignup' component={TeacherSignup}/>

            </>
         ):role==='teacher'?(
            <Stack.Screen name='teacherStack' component={TeacherBottomTab}/>
         ):role ==='student'?
         (
            <Stack.Screen name='StudentStack' component={StudentBottomTab}/>
         ):null
        }
           
        </Stack.Navigator>
    )
};

export default AppNavigator;