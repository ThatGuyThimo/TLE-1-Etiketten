import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from "./js/components/navbar"

export default function App() {
  return (
    <View>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Ik ga even een lekker bakkie koffie zettendd!</Text>
      <StatusBar style="auto" />
    </View>
      <Navbar/>
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
});
