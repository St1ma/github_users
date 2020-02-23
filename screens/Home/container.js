import { connect } from 'react-redux';

import { fetchUsers } from '../../redux/actions/users';

import HomeView from './component.tsx';

const mapStateToProps = (state) => ({
  users: state.users.users,
  fetchFinished: state.users.finished,
  fetchError: state.users.error,
});

export default connect(
  mapStateToProps,
  { fetchUsers },
)(HomeView);
