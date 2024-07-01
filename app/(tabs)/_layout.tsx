import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
        headerShown: false,
        tabBarStyle: { backgroundColor: "#D4625E" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color="white"
            />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color="white"
            />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="download"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "download" : "download-outline"}
              color="white"
            />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color="white"
            />
          ),
          tabBarLabel: "",
        }}
      />
    </Tabs>
  );
}
