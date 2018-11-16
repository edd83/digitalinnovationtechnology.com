import connect from 'react-redux/es/connect/connect';
import {
  decreaseCounter as decreaseCounterAction,
  increaseCounter as increaseCounterAction,
} from '../../redux/actions/counter';
import AppLayout from './CounterIncrementer';


function mapStateToProps(state) {
  return {
    counter: state.counter.value,
  };
}

function mapActionsToProps(dispatch) {
  return {
    increaseCounter() {
      dispatch(increaseCounterAction());
    },
    decreaseCounter() {
      dispatch(decreaseCounterAction());
    },
  };
}

export default connect(mapStateToProps, mapActionsToProps)(AppLayout);
