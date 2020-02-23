import * as React from 'react';
import {
  FlatList, View, ActivityIndicator, RefreshControl, Text,
} from 'react-native';

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
  users: Array<User>;
  fetchUsers: Function;
  fetchFinished: boolean;
  fetchError: boolean;
  navigation: {
    navigate: Function;
  };
}

interface State {
  refreshing: boolean;
  pageLoading: boolean;
}

export default class HomeScreen extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      pageLoading: true,
    };
  }

  componentDidMount() {
    if (this.props.users?.length) {
      this.setState({ pageLoading: false });
    } else {
      this.props.fetchUsers();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.fetchFinished && !prevProps.fetchFinished) {
      this.setState({ refreshing: false, pageLoading: false });
    }
  }

  openUserPage = (item) => {
    this.props.navigation.navigate('User', item);
  }

  refreshPayload = () => {
    this.setState({ refreshing: true }, () => this.props.fetchUsers());
  }

  fetchOnEndReached = () => {
    if (this.state.pageLoading || this.props.users.length > 100) return;

    const lastId = this.props.users[this.props.users.length - 1]?.id || 0;

    this.setState({ pageLoading: true }, () => this.props.fetchUsers(lastId));
  }

  renderItem = ({ item }) => (
    <ListItem item={item} onPress={() => this.openUserPage(item)} />
  );

  keyExtractor = (item) => `${item.id}`;

  render() {
    if (this.state.pageLoading && !this.props.users?.length) {
      return <ActivityIndicator />;
    }

    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.users}
          renderItem={this.renderItem}
          contentContainerStyle={(this.props.fetchError || !this.props.users?.length) && styles.flex}
          refreshControl={(
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.refreshPayload}
            />
          )}
          onEndReached={this.fetchOnEndReached}
          ListEmptyComponent={this.props.fetchError
            ? <ErrorPlaceholder onPress={this.fetchOnEndReached} />
            : (
              <Text>No results</Text>
            )}
          ListFooterComponent={this.state.pageLoading ? <ActivityIndicator /> : <View style={styles.placeholder} />}
        />
      </View>
    );
  }
}
