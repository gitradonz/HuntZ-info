import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
} from "react-native";

export const ItemsHeader = () => (
  <View style={styles.itemHeader}>
    <Text style={styles.title}>NAME</Text>
    <Text style={styles.title}>KILLS</Text>
  </View>
);
export const Item = ({ name, kills }) => (
  <View style={styles.item}>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.text}>{kills}</Text>
  </View>
);

export const LoadingIndicator = () => (
  <View style={{ marginTop: 20 }}>
    <ActivityIndicator size="large" color="#09f" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#e8eaeb",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginVertical: 2,
    marginHorizontal: 70,
    borderRadius: 15,
    direction: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemHeader: {
    backgroundColor: "#dcefff",
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 10,
    paddingBottom: 10,
    direction: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Trebuchet MS",
  },
  text: {
    fontSize: 16,
    fontFamily: "Trebuchet MS",
  },
});

const stylesIndicator = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
