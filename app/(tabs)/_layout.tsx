import { Tabs } from "expo-router";
import React from "react";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="specs"
        options={{
          title: "Especificações",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="doc.text.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="carros"
        options={{
          title: "Carros",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="car.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pecas"
        options={{
          title: "Peças",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="wrench.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="suporte"
        options={{
          title: "Suporte",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="lifepreserver.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
