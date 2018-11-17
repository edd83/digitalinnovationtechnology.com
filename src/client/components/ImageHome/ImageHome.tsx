import * as React from "react";

const styles = require('./ImageHome.scss');

export default class ImageHome extends React.Component {
  render() {
    return (
      <div className={styles.imageHome}>
        <div className={styles.quote}>
          Nothing is impossible,
          <br />
          when you love what you do
        </div>
      </div>
    );
  }
}
