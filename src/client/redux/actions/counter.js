export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

export const increaseCounter = () => dispatch => dispatch({
  type: INCREASE_COUNTER,
});

export const decreaseCounter = () => dispatch => dispatch({
  type: DECREASE_COUNTER,
});
