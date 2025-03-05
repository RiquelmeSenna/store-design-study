import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handleClick = () => {
    alert('ola')
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleClick}>
        <Text>Aperte aqui!</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0000',
    borderRadius: 15
  }
});
