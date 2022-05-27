import { StyleSheet, Text, View, StatusBar } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    paddingLeft: 50,
    paddingRight: 50,
    marginVertical: 8,
    borderRadius: 10,
    direction: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemHeader: {
    backgroundColor: "#dcefff",
    paddingLeft: 50,
    paddingRight: 50,
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
