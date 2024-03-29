import React, { StrictMode } from 'react';
import { Navbar } from "./components/Navbar"
import { NavigationContainer} from '@react-navigation/native';
import { Loading } from "./pages/Loading";
import { Splashscreen } from './components/Splashscreen';
import { stateManager } from './components/Statemanager';

import { Text, View, Animated, StyleSheet, Image, Easing  } from 'react-native';

const MainTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(240, 107, 5)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(255, 255, 255)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  const [ApiData, setApiData] = React.useState('Default State');

  return (
    <NavigationContainer theme={MainTheme}>
      <stateManager.Provider value={{ ApiData, setApiData}}>
        <Splashscreen/>
        <Navbar/>
      </stateManager.Provider>
    </NavigationContainer>
  );   
}
