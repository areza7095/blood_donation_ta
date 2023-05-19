import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  Login,
  Home,
  Register,
  Onboarding1,
  Onboarding2,
  Onboarding3,
  ResetPassword,
  CreateARequest,
  DonationRequest,
  DonorsDetail,
  FindDonors,
  Profile,
  Report,
  SuccessCreateRequest,
} from '../screens';
import { Easing } from 'react-native';

const Stack = createNativeStackNavigator();

const config = {
  animation: 'timing',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};



const Routers = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: config,
          close: config
        },
        
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Onboarding3" component={Onboarding3} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="CreateARequest" component={CreateARequest} />
      <Stack.Screen name="DonationRequest" component={DonationRequest} />
      <Stack.Screen name="DonorsDetail" component={DonorsDetail} />
      <Stack.Screen name="FindDonors" component={FindDonors} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Report" component={Report} />
      <Stack.Screen
        name="SuccessCreateRequest"
        component={SuccessCreateRequest}
      />
    </Stack.Navigator>
  );
};
export default Routers;
