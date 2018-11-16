import connect from 'react-redux/es/connect/connect';
import CounterDisplay from './CounterDisplay';

function mapStateToProps(state) {
  return {
    counter: state.counter.value,
  };
}

export default connect(mapStateToProps)(CounterDisplay);
