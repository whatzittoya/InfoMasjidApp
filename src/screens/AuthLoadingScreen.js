import React, { useEffect, useContext, useState } from "react";
import {
  ActivityIndicator,
  Text,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { Context as BeritaContext } from "../context/BeritaContext";
import { Context as MasjidContext } from "../context/MasjidContext";
import { Context as UserContext } from "../context/UserContext";
import infomasjid from "../api/infomasjid";
import Constants from "expo-constants";
import { colorTheme } from "../styles/global";
const AuthLoadingScreen = ({ navigation }) => {
  const [selectedMasjid, setSelectedMasjid] = useState();
  const { getBerita, setSelectedCategory,setBeritaProfile } = useContext(BeritaContext);
  const { state: stateUser, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { getMasjid, getMasjidProfile } = useContext(MasjidContext);
  useEffect(() => {
    setLoading(true);
    getBerita(() => {
      setLoading(false);
    });
    getMasjid();
    setSelectedCategory({ name: "Semua", value: "All" });

    (async () => {
      const device_id = Constants.deviceId;

      const response = await infomasjid.post("/login", {
        device_id: device_id,
      });
      setUser(response.data.user, device_id);

      if (response.data.result === "choose_mesjid") {
        navigation.navigate("Auth");
        return "choose_mesjid";
      } else if (response.data.result === "choose_mesjid_exists") {
        navigation.navigate("Auth");
        return "choose_mesjid";
      } else {
        getMasjidProfile(response.data.masjid);
        navigation.navigate("App");
        return "home";
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="light-content" backgroundColor="#4F6D7A" />
      <Text style={styles.welcome}>Selamat Datang di InfoMasjid</Text>
      <Text style={styles.instructions}></Text>
      <Text style={styles.instructions}></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorTheme.primary,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#F5FCFF",
  },
  instructions: {
    textAlign: "center",
    color: "#F5FCFF",
    marginBottom: 5,
  },
});
export default AuthLoadingScreen;
