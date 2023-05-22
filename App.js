import 'node-libs-react-native/globals';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import ZeroDevWrapper from './ZeroDevWrapper';
import ConnectButton from './ConnectButton';

export default function App() {
  return (
    <View style={styles.container}>
      <ZeroDevWrapper>
          <ConnectButton />
      </ZeroDevWrapper>
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
});
