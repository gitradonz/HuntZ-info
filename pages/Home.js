import { StyleSheet, Text, View, Image } from "react-native";
import { MotiView } from "moti";

export const Home = () => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ scale: 0, translateY: -100 }}
        animate={{ scale: 1, translateY: 0 }}
        exit={{ opacity: 0 }}
        delay={500}
        style={styles.titleView}
      >
        {/* <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png",
          }}
          style={styles.logo}
        /> */}
        <Text style={styles.titleText}>HuntZ</Text>
      </MotiView>
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        delay={1000}
        style={styles.content}
      >
        <Text>Game download already available !</Text>
      </MotiView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#e8e8e8",
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
  logo: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
});
