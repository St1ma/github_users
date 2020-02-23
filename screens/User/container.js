import { connect } from 'react-redux';

import { fetchFollowers } from '../../redux/actions/user';

import HomeView from './component.tsx';

const mapStateToProps = (state) => ({
  userFollowers: state.user.followers,
  fetchFinished: state.user.finished,
  fetchError: state.user.error,
});

export default connect(
  mapStateToProps,
  (dispatch, props) => ({
    fetchFollowers: () => dispatch(fetchFollowers(props.route.params.followers_url)),
  }),
)(HomeView);
