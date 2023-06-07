import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './bottomtabnav';

const Navs = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default Navs;
