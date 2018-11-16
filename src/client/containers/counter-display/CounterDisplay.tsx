import * as React from 'react';

export default class CounterDisplay extends React.Component<{counter: number}, {}> {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>Counter value though Redux : </h1>
        <h2>{counter}</h2>
      </div>
    );
  }
}