import { createStackNavigator } from "react-navigation-stack";
import BeritaShowScreen from "../screens/BeritaShowScreen";
import MasjidShowScreen from "../screens/MasjidShowScreen";
import BottomTab from "../navigation/BottomTab";

const Navigator = createStackNavigator(
  {
    Home: BottomTab,
    BeritaShow: BeritaShowScreen,
    MasjidShow: MasjidShowScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Info Masjid",
      cardStyle: { backgroundColor: "#fff" },
    },
  }
);

export default Navigator;
