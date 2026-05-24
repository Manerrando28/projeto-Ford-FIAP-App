import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].surfaceElevated,
          borderTopColor: Colors[colorScheme ?? "light"].border,
          borderTopWidth: 1,
          height: 72,
          paddingTop: 10,
          paddingBottom: 10,
          shadowColor: "#000",
          shadowOpacity: colorScheme === "dark" ? 0.35 : 0.08,
          shadowOffset: { width: 0, height: -4 },
          shadowRadius: 18,
          elevation: 18,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "700",
          marginBottom: 2,
        },
        tabBarItemStyle: {
          borderRadius: 18,
          marginHorizontal: 2,
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
        sceneContainerStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
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
          href: null,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="detalhes"
        options={{
          href: null,
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
        name="comparacao"
        options={{
          title: "Comparar",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="arrow.left.arrow.right" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pecas"
        options={{
          title: "Loja",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="cart.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Novidades",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="newspaper.fill" color={color} />
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
