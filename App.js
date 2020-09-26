import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import navigator from "./src/navigation/Navigator";

export default createAppContainer(navigator);
