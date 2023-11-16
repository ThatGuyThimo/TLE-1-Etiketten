import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Details } from '../pages/Details';
import { CameraView } from '../pages/Camera';
import { Filters } from '../pages/Filters';
import { Loading } from '../pages/Loading';

const Tab = createBottomTabNavigator();

const Navbar = () => {
    return (
      <Tab.Navigator
        initialRouteName="Details"
        screenOptions={{
          tabBarHideOnKeyboard: false,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#000000',
          tabBarInactiveBackgroundColor: '#F06B05',
          tabBarActiveBackgroundColor: '#F06B05',
        }}
      >
        <Tab.Screen
          name="Details"
          component={Details}
          options={{
            tabBarLabel: 'Details',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraView}
          options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="camera" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Filters"
          component={Loading}
          options={{
            tabBarLabel: 'Filters',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  
export {Navbar};