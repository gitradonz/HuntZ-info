import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ranking } from "./pages/Ranking";
import { Home } from "./pages/Home";
import { Credits } from "./pages/Credits";

const { Navigator, Screen } = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="Ranking" component={Ranking} />
        <Screen name="Credits" component={Credits} />
      </Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
