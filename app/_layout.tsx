
import {  Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

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
      </Stack>
  );
}
