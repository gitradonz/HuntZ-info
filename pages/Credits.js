import { StyleSheet } from "react-native";
import { MotiView, MotiText } from "moti";
import MyMotiText from "../components/MyMotiText";

export const Credits = () => {
  

  return (
    <>
      {/* MOTIVIEW FORMULARIO */}
      <MotiView style={styles.container}>

        <MotiText style={styles.titleForm}>Staff</MotiText>

        <MyMotiText text={'CEO - Pablo Ríos'} delay={50}/>
        <MyMotiText text={'Developer - Pablo Ríos'} delay={100}/>
        <MyMotiText text={'Designer - Pablo Ríos'} delay={150}/>
        <MyMotiText text={'DBA - Pablo Ríos'} delay={200}/>
        <MotiView style={styles.separator}/>

        <MotiText style={styles.titleForm}>Tech stack</MotiText>

        <MyMotiText text={'React'} delay={400}/>
        <MyMotiText text={'React Native'} delay={450}/>
        <MyMotiText text={'Expo'} delay={500}/>
        <MyMotiText text={'Moti'} delay={550}/>
        <MyMotiText text={'Firebase'} delay={600}/>
        <MyMotiText text={'React-navigation'} delay={650}/>
        <MotiView style={styles.separator}/>
        <MotiView style={styles.separator}/>



        <MyMotiText text={'© 2020 radonzStudio'} delay={1000}/>

      </MotiView>
 

    </>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  titleForm: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold'
  },
  text:{
    fontSize: 20,
    textAlign: 'center',
  },
  textFooter: {
    fontSize: 10,
    marginLeft:10,
  },
  separator: {
    marginTop: 60,
  }
});
