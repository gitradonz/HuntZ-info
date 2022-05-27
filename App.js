import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ranking } from "./pages/Ranking";

const { Navigator, Screen } = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="HuntZ">
        <Screen name="HuntZ" component={Home} />
        <Screen name="Ranking" component={Ranking} />
      </Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>HuntZ</Text>
    </View>
  );
};
