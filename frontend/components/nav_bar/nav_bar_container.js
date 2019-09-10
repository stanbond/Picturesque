import { connect } from 'react-redux';
import NavBar from './nav_bar';

const mapStateToProps = state => {
  let user = state.entities.users[state.session.currentUserId];

  return ({
    user
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar); 