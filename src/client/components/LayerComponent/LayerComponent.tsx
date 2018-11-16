import * as React from "react";
import { runInThisContext } from "vm";

const styles = require('./LayerComponent.scss');

export default class LayerComponent extends React.Component<{idx:number, component: any}, {}> {
    render() {
        return (
            <div className={styles.layerComponent}>
                {/* <this.props.component /> */}
            </div>
        );
    }
}
