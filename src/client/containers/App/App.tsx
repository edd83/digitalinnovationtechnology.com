import * as React from "react";
import {connect} from 'react-redux';
import ImageHome from '../../components/ImageHome/ImageHome';
import CircleList from '../../components/CircleList/CircleList';
import LayerComponent from '../../components/LayerComponent/LayerComponent';

const styles = require('./App.scss');

export class AppLayout extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <ImageHome />
        <CircleList />
        <LayerComponent idx={1} component={ImageHome} />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    counter: state.counter.value
  };
}

export default connect(mapStateToProps)(AppLayout);
