import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './index';
import CreateNews from './Pages/CreateNews';
import EditNews from './Pages/EditNews';

const Stack = createStackNavigator();

function StackScreens() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CreateNews" component={CreateNews} />
      <Stack.Screen
        name="EditNews"
        component={EditNews}
        options={{headerShown: true, title: 'Editar Notícia'}}
      />
    </Stack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();

function TabScreens() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} options={{title: 'Inicio'}} />
      <Tabs.Screen
        name="News"
        component={StackScreens}
        options={{title: 'Nova Noticia'}}
      />
    </Tabs.Navigator>
  );
}

function Route() {
  return (
    <NavigationContainer>
      <TabScreens />
    </NavigationContainer>
  );
}

export default Route;
