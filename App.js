import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

export default function App() {
  const [oswalOverloaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoOverloaded] = useLato({
    Lato_400Regular,
  });

  if (!oswalOverloaded || !latoOverloaded) {
    return null;
  }

  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };

  const screenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];

    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
      headerShown: false,
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    };
  };

  const Tab = createBottomTabNavigator();

  const Settings = () => (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );

  const Map = () => (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
