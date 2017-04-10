import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import Main from '../components/Main';

function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
