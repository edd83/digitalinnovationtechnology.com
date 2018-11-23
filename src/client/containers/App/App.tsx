import * as React from "react";
import {connect} from 'react-redux';
import ImageHome from '../../components/ImageHome/ImageHome';
import CircleList from '../../components/CircleList/CircleList';
import Circle from '../../components/Circle/Circle';
import LayerComponent from '../../components/LayerComponent/LayerComponent';
import { svgs } from '../../components/Circle/SvgList'

const styles = require('./App.scss');

export class AppLayout extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <ImageHome />
        <Circle source={svgs[0].source} text={svgs[0].text}/>
        <Circle source={svgs[1].source} text={svgs[1].text}/>
        <Circle source={svgs[2].source} text={svgs[2].text}/>
        <Circle source={svgs[3].source} text={svgs[3].text}/>
        {/* <CircleList /> */}
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
