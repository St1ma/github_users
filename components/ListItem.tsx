import React from 'react';
import { ListItem } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  subtitle: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 12,
    lineHeight: 16,
  },
});

interface Props {
  onPress: Function;
  item: {
    login: string;
    html_url: string;
    avatar_url: string;
  };
}

export default ({ item, onPress }: Props) => (
  <ListItem
    onPress={onPress}
    leftAvatar={{ source: { uri: item.avatar_url } }}
    title={item.login}
    subtitle={item.html_url}
    subtitleStyle={styles.subtitle}
    bottomDivider
    chevron
  />
);
