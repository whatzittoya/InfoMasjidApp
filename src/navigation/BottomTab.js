import React from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "react-navigation-tabs";
import BeritaScreen from "../screens/BeritaScreen";
import MasjidScreen from "../screens/MasjidScreen";
import FollowScreen from "../screens/FollowScreen";
import HomeScreen from "../screens/HomeScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import { Feather, FontAwesome5, Entypo } from "@expo/vector-icons";

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#F6F8FA",
    height: 50,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
  },
});
const BottomTab = createBottomTabNavigator(
  {
    Berita: {
      screen: HomeScreen,

      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Feather name="home" color={tintColor} style={styles.iconStyle} />
          );
        },
      },
    },
    Masjid: {
      screen: MasjidScreen,

      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <FontAwesome5
              name="mosque"
              color={tintColor}
              style={styles.iconStyle}
            />
          );
        },
      },
    },
    Favourites: {
      screen: FavouriteScreen,

      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Feather name="star" color={tintColor} style={styles.iconStyle} />
          );
        },
      },
    },
    Folowing: {
      screen: FollowScreen,

      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Entypo name="news" color={tintColor} style={styles.iconStyle} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: styles.tabBarStyle,
    },
  }
);

export default BottomTab;
