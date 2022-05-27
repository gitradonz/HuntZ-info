import { StyleSheet, Text, View } from "react-native";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>HuntZ</Text>
      </View>
      <View style={styles.content}>
        <Text>Bienvenido a HuntZ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },
  titleView: {
    flex: 1,
    alignItems: "center",
    maxHeight: 100,
    marginVertical: 10,
  },
  titleText: {
    fontSize: 80,
    fontFamily: "Trebuchet MS",
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
});
