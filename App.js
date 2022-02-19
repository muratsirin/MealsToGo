import React from "react";
import { initializeApp } from "firebase/app";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation/index";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyCNTprlPI-frSMDL8YEJW4HBFRjd2Xqb7s",
  authDomain: "mealstogo-e7432.firebaseapp.com",
  projectId: "mealstogo-e7432",
  storageBucket: "mealstogo-e7432.appspot.com",
  messagingSenderId: "416561647070",
  appId: "1:416561647070:web:5d0e5aef53676f8375614f",
};

initializeApp(firebaseConfig);

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
