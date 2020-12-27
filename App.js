import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
//Importing Screens
import Health from "./Screens/Health";
import searchCountry from "./Screens/searchCountry";
import Home from "./Screens/Home";
import Country from "./Screens/Country";

export default function App() {
  const Stack = createStackNavigator();

  const Drawer = createDrawerNavigator();

  const header_config = {
    title: null,
    headerStyle: { backgroundColor: "#121517" },
    headerTintColor: "#CFCFCF",
    headerTintSize: 25,
  };

  const DrawerStack = () => {
    return (
      <Drawer.Navigator
        openByDefault={false}
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: '#121517',
        }}
        drawerType={"slide"}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SearchCountry" component={searchCountry} />
        {/* <Drawer.Screen name="Notification" component={Notification} /> */}
      </Drawer.Navigator>
    );
  };

  const MainStack = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => {},
          }}
        />
        <Stack.Screen
          name="SearchCountry"
          component={searchCountry}
          options={header_config}
        />
        <Stack.Screen
          name="Country"
          component={Country}
          options={header_config}
        />
        <Stack.Screen
          name="Health"
          component={Health}
          options={header_config}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Drawer" component={DrawerStack} options={{header: () => {}}}/>
        <Stack.Screen name="Main" component={MainStack}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
