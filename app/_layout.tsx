
import {  Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from './Dashboard/CustomHeader'

export const unstable_settings = {
  initialRouteName: 'index',
};



export default function RootLayoutNav() {

  const navigate = useNavigation()
  return (
    
      <Stack>
        <Stack.Screen name="index" options={{headerShown : false}} />
        <Stack.Screen name="welcomeOne" options={{headerShown : false}} />
        <Stack.Screen name="welcomeTwo" options={{headerShown : false}} />
        <Stack.Screen name="welcomeThree" options={{headerShown : false}} />
        <Stack.Screen name="Register/login" options={{headerShown : false}} />
        <Stack.Screen name="Register/success" options={{headerShown : false}} />
        <Stack.Screen name="Dashboard/DashHome" options={{
          headerTitle : '',
          header : ()=> (<CustomHeader />),
        
        }} />

        <Stack.Screen 
          name="Register/verify" options={{
          presentation : 'modal',
          headerTitle : '',
          headerTitleAlign : 'center',
          headerShadowVisible : false,
          headerBackVisible : false,
          headerLeft: () => ( 
            <TouchableOpacity onPress={()=> navigate.goBack()}>
              <Ionicons name='arrow-back' size={25}/>
            </TouchableOpacity>
          ),
        }}/>
      </Stack>
  );
}
