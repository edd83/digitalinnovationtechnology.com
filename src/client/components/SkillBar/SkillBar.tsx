import * as React from "react";

const styles = require('./SkillBar.scss');

export default class SkillBar extends React.Component<{order: number, percentage: number, name: string}, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const bar: NodeListOf<HTMLElement> = document.querySelectorAll('#bar');
    bar[this.props.order].style.setProperty('--m', this.props.percentage.toString() + '%');
    bar[this.props.order].style.setProperty('--w', this.props.percentage.toString() + '%');
  }

  render() {
    return (
      <div className={styles.container}>
        <span className={styles.title}>{this.props.name}</span>
        <div className={styles.barContainer}>
          <span className={styles.bar} id="bar" />
        </div>
      </div>
    );
  }
}
