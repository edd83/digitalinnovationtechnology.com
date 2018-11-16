import * as React from "react";
import {connect} from 'react-redux';
import ImageHome from '../../components/ImageHome/ImageHome';

const styles = require('./Blog.scss');

export class BlogLayout extends React.Component<{counter: number}, {}> {
  render() {
    let index: number = -1;
    return (
      <div>
        <ImageHome />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    counter: state.counter.value
  };
}

export default connect(mapStateToProps)(BlogLayout);
