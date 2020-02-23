import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    lineHeight: 28,
    marginTop: 16,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(0,0,0,0.5)',
  },
  button: {
    width: '50%',
    height: 40,
    borderRadius: 25,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

interface Props {
  onPress: Function;
}

export default ({ onPress }: Props) => (
  <View style={styles.container}>
    <Icon name="bug" type="entypo" size={40} color="rgba(0,0,0,0.5)" />
    <Text style={styles.title}>Oops!</Text>
    <Text style={styles.subtitle}>Something went wrong</Text>

    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>Retry</Text>
    </TouchableOpacity>
  </View>
);
