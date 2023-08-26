import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/colors";

import SurahScreen from "./SurahScreen";
import DuaaScreen from "./DuaaScreen";
import TasbeehScreen from "./TasbeehScreen";
import HomeScreen from "./HomeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import QuranScreen from "./QuranScreen";

const Tab = createBottomTabNavigator();

export default function MainScreens() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.accent,
        tabBarStyle: {
          backgroundColor: Colors.primaryDark,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Quran"
        component={QuranScreen}
        options={{
          title: "Quran",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="book" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Duaa"
        component={DuaaScreen}
        options={{
          title: "Duaas",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="chatbubble-sharp" size={size} color={color} />
            );
          },
          tabBarLabelStyle: {},
        }}
      />
      <Tab.Screen
        name="Tasbeeh"
        component={TasbeehScreen}
        options={{
          title: "Tasbeeh",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="sync" size={size} color={color} />;
          },
          tabBarLabelStyle: {},
        }}
      />
    </Tab.Navigator>
  );
}
