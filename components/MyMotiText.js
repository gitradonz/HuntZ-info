import { Text, StyleSheet } from 'react-native'
import { MotiView } from "moti"

const MyMotiText = ({delay, text}) => {
  return (
    <MotiView from={{ opacity: 1, scale: 1, translateX: 500 }} animate={{ translateX: 0 }}
    transition={{
      translateX: {
        type: 'spring',
        delay: delay
      }
    }}>
    <Text style={styles.text}>{text}</Text>
  </MotiView>
  )
}

export default MyMotiText

const styles = StyleSheet.create({
  text:{
    fontSize: 20,
    textAlign: 'center',
  }
});

