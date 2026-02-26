import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      //   screenOptions={{ tabBarActiveTintColor: "green", tabBarShowLabel: false }}
      screenOptions={{
        tabBarActiveTintColor: "indigo",
        // tabBarStyle: { backgroundColor: "black" },
        // tabBarActiveBackgroundColor: "red",
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          headerShown: false,
          title: "Stack",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color }) => (
            <Ionicons name="star-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
