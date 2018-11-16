import { INCREASE_COUNTER, DECREASE_COUNTER } from '../actions/counter';

const initialState = {
  value: 0,
};

export default function (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case INCREASE_COUNTER:
      return Object.assign({}, state, {
        value: state.value + 1,
      });
    case DECREASE_COUNTER:
      return Object.assign({}, state, {
        value: state.value - 1,
      });
    default:
      return state;
  }
}
