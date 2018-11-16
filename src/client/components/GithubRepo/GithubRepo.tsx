import * as React from "react";

const styles = require('./GithubRepo.scss');

export default class GithubRepo extends React.Component<{}, { data: [] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    let response = await fetch('https://api.github.com/users/edd83/repos');
    let json = await response.json();
    console.log(json);
    this.setState({data: json});
  }

  sortByName(x, y) {
    return ((x.Name == y.Name) ? 0 : ((x.Name > y.Name) ? 1 : -1));
  }

  render() {
    return (
      <div className={styles.githubrepo}>
        {this.state.data.length && this.state.data.map((lol: any, idx: number) => {
          return <div key={idx}>{lol.name}</div>
        })}
      </div>
    );
  }
}
