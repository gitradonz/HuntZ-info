import { StyleSheet, Text, View, Image } from "react-native";
import { MotiView } from "moti";
import { OpenURLButton } from "../components/OpenURLButton";
import { huntzURL } from "../components/constants";

export const Home = () => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ scale: 1.8, translateY: 100 }}
        animate={{ scale: 1, translateY: -50 }}
        exit={{ opacity: 0 }}
        delay={500}
        style={styles.titleView}
      >
        <Image
          source={{
            uri: "https://i.ibb.co/dtj0MV7/huntz-Logo.png",
          }}
          style={styles.logo}
        />
        {/* <Text style={styles.titleText}>HuntZ</Text> */}
      </MotiView>
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        delay={1000}
        style={styles.content}
      >
        <Text>Game download already available !</Text>
        <Image
          source={{
            uri: "https://i.ibb.co/ysVW5wW/huntz-Menu.png",
          }}
          style={styles.logo2}
        />
         <Image
          source={{
            uri: "https://i.ibb.co/HYsPHYk/huntz.png",
          }}
         
          style={styles.logo2}
        />
        <Text>more info about download:</Text>
        <OpenURLButton url={huntzURL}>huntz.vercel.app</OpenURLButton>
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
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  logo2:{
    height: 170,
    width: 340,
    resizeMode: "contain",
    marginVertical: 10,
  }
});
