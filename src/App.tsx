import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {colors} from './utils/colors';

function App(): JSX.Element {
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.color4,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: colors.color2,
    marginVertical: 10,
  },
});

export default App;
