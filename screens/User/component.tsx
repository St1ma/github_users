import * as React from 'react';
import {
  Image, ActivityIndicator, View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Icon } from 'react-native-elements';

import ListItem from '../../components/ListItem';
import ErrorPlaceholder from '../../components/ErrorPlaceholder';

import styles from './styles';

interface User {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
}

interface Props {
  userFollowers: Array<User>;
  fetchFollowers: Function;
  fetchFinished: boolean;
  fetchError: boolean;
  navigation: {
    push: Function;
    popToTop: Function;
  };
  route: {
    params: User;
  };
}

interface State {
  loading: boolean;
}

export default class LinksScreen extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);

    props.navigation.setOptions({
      title: props.route.params.login,
      headerLeft: ({ tintColor }) => (
        <TouchableOpacity onPress={props.navigation.popToTop} style={styles.backButton}>
          <Icon color={tintColor} size={28} name="chevron-left" type="entypo" />
        </TouchableOpacity>
      ),
    });

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.fetchFollowers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.fetchFinished && !prevProps.fetchFinished) {
      this.setState({ loading: false });
    }
  }

  openUserPage = (item) => {
    this.props.navigation.push('User', item);
  }

  refetchFollowers = () => {
    this.setState({ loading: true }, () => this.props.fetchFollowers());
  }

  renderItem = ({ item }) => (
    <ListItem
      item={item}
      onPress={() => this.openUserPage(item)}
    />
  );

  keyExtractor = (item) => `${item.id}`;

  render() {
    const user = this.props.route.params;

    return (
      <>
        <View style={styles.header}>
          <Image
            source={{ uri: user.avatar_url }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.login} numberOfLines={1}>{user.login}</Text>
            <Text
              style={[styles.subtitle, styles.url]}
              numberOfLines={1}
              onPress={() => WebBrowser.openBrowserAsync(user.html_url)}
            >
              {user.html_url}
            </Text>
          </View>
        </View>

        {this.state.loading
          ? <ActivityIndicator />
          : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.props.userFollowers}
              contentContainerStyle={(this.props.fetchError || !this.props.userFollowers?.length) && styles.emptyContainer}
              renderItem={this.renderItem}
              ListEmptyComponent={this.props.fetchError
                ? <ErrorPlaceholder onPress={this.refetchFollowers} />
                : (
                  <Text>No results</Text>
                )}
              ListFooterComponent={<View style={styles.placeholder} />}
            />
          )}
      </>
    );
  }
}
