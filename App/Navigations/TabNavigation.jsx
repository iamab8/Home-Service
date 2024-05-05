import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import BookingScreen from "../Screens/BookingScreen/BookingScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../Utils/Colors";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        hederShown: false,
        tabBarActiveTintColor: Colors.Primary,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -6 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="booking"
        component={BookingScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -6 }}>
              Booking
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -6 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
