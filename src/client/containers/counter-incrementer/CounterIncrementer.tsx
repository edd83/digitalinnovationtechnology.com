import * as React from 'react';

export default class AppLayout extends React.Component<{counter: number, increaseCounter: () => void, decreaseCounter: () => void}, {}> {
  render() {
    const { counter, increaseCounter, decreaseCounter } = this.props;
    return (
      <div>
        <h1>
          Increase the counter through Redux :
          {counter}
        </h1>
        <input onClick={() => { increaseCounter(); }} type="submit" value="increase" />
        <input onClick={() => { decreaseCounter(); }} type="submit" value="decrease" />
      </div>
    );
  }
}
