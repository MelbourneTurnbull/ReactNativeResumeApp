import React from 'react';
import Resume from './screens/Resume';
import API from './screens/API';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen  
          name="Resume" 
          component={Resume}
          options={{
            tabBarLabel: 'Resume',
            tabBarIcon: ({ color, size}) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen  
          name="API" 
          component={API}
          options={{
            tabBarLabel: 'API',
            tabBarIcon: ({ color, size}) => (
              <MaterialCommunityIcons name="table" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}