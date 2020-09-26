import { createStackNavigator } from "react-navigation-stack";
import BeritaShowScreen from "../screens/BeritaShowScreen";
import MasjidShowScreen from "../screens/MasjidShowScreen";
import BottomTab from "../navigation/BottomTab";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomePageScreen from "../screens/HomeScreen";
import TestScreen from "../screens/TestScreen";

const navigator = createStackNavigator(
  {
    Home: BottomTab,
    BeritaShow: BeritaShowScreen,
    MasjidShow: MasjidShowScreen,
    HomePage: HomePageScreen,
    Welcome: WelcomeScreen,
    TestPage: TestScreen
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      title: "Info Masjid"
    },
  }
);

export default navigator;
