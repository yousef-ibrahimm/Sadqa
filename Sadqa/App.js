import "react-native-gesture-handler";
import "react-native-url-polyfill/auto";
import { StyleSheet, AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Colors from "./constants/colors";
import IntroScreen from "./screens/IntroScreen";
import MainScreens from "./screens/MainScreens";
import QuranScreen from "./screens/QuranScreen";
import SurahScreen from "./screens/SurahScreen";
import { createClient } from "@supabase/supabase-js";
import { EXPO_PRIVATE_API_URL, EXPO_PRIVATE_API_KEY } from "@env";
import HomeScreen from "./screens/HomeScreen";

AppRegistry.registerComponent(appName, () => App);

export const supabase = createClient(
  EXPO_PRIVATE_API_URL,
  EXPO_PRIVATE_API_KEY
);
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.accent,
        }}
      >
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{
            headerBackButtonMenuEnabled: false,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="MainScreens"
          component={MainScreens}
          options={{
            headerBackButtonMenuEnabled: false,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Surah"
          component={SurahScreen}
          options={{
            headerBackButtonMenuEnabled: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
