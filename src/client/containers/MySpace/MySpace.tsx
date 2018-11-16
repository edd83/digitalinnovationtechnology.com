import * as React from "react";
import {connect} from 'react-redux';
import ImageHome from '../../components/ImageHome/ImageHome';
import SkillBar from '../../components/SkillBar/SkillBar';
import GithubRepo from '../../components/GithubRepo/GithubRepo';

const styles = require('./MySpace.scss');

const arrayLanguage = [
  { language: 'Javascript', percentage: 95 },
  { language: 'HTML', percentage: 100 },
  { language: 'CSS/SCSS/LESS', percentage: 85 },
  { language: 'Assembly', percentage: 35 },
  { language: 'Shell', percentage: 70 },
  { language: 'Bash', percentage: 50 },
  { language: 'SQL', percentage: 85 },
  { language: 'Python', percentage: 30 },
  { language: 'PHP', percentage: 75 },
  { language: 'VB.net', percentage: 40 },
  { language: 'C#', percentage: 60 },
  { language: 'C++', percentage: 60 },
  { language: 'C', percentage: 65 },
  { language: 'Swift', percentage: 45 },
  { language: 'Android', percentage: 45 },
  { language: 'JQuery', percentage: 90 }
];

const arrayLibrairies = [
  { language: 'Git', percentage: 95 },
  { language: 'SVN', percentage: 70 },
  { language: 'Mercurial', percentage: 30 },
  { language: 'TypeScript.js', percentage: 85 },
  { language: 'Node.js', percentage: 90 },
  { language: 'Express.js', percentage: 90 },
  { language: 'Electron.js', percentage: 85 },
  { language: 'PhpMyAdmin', percentage: 85 },
  { language: 'Webpack', percentage: 75 },
  { language: 'React.js', percentage: 85 },
  { language: 'ES5/ES6/ES7', percentage: 70 },
  { language: 'Nginx', percentage: 70 },
  { language: 'AWS', percentage: 45 },
  { language: 'NPM', percentage: 85 },
  { language: 'Redux', percentage: 80 },
  { language: 'Window', percentage: 85 },
  { language: 'Linux', percentage: 85 },
  { language: 'Linux command', percentage: 85 },
  { language: 'Nano/Emacs/Vim', percentage: 85 },
  { language: 'VS Code', percentage: 90 },
  { language: 'Atom', percentage: 75 },
  { language: 'Photoshop', percentage: 25 }
];
// va au mieux pas au plus facile, innovation and best practice fan
const arraySkills = [
  { language: 'Rigorous', percentage: 100 },
  { language: 'Passionate', percentage: 100 },
  { language: 'Perfectionist', percentage: 100 },
  { language: 'Adaptability', percentage: 100 },
  { language: 'Web', percentage: 90 },
  { language: 'Software', percentage: 80 },
  { language: 'Mobile', percentage: 45 },
  { language: 'Business Strategy', percentage: 60 },
  { language: 'SEO Strategy', percentage: 65 },
  { language: 'SEO Knowledge', percentage: 75 },
  { language: 'Leadership', percentage: 60 },
  { language: 'Teamwork', percentage: 85 },
  { language: 'Technical Audit', percentage: 55 },
  { language: 'UI / UX', percentage: 85 }
];

export class MySpaceLayout extends React.Component<{ counter: number }, {}> {
  render() {
    let index: number = -1;
    return (
      <div>
        <ImageHome />
        <div className={styles.skillcontainer}>
          <div className={styles.blockSkills}>
            <span className={styles.title}>Languages</span>
            <div className={styles.skillbar}>
              {arrayLanguage.map((element) => {
                index += 1;
                return <SkillBar key={index} order={index} percentage={element.percentage} name={element.language} />
              })}
            </div>
          </div>
          <div className={styles.blockSkills}>
            <span className={styles.title}>Librairies / Tools</span>
            <div className={styles.skillbar}>
              {arrayLibrairies.map((element) => {
                index += 1;
                return <SkillBar key={index} order={index} percentage={element.percentage} name={element.language} />
              })}
            </div>
          </div>
          <div className={styles.blockSkills}>
            <span className={styles.title}>Skills</span>
            <div className={styles.skillbar}>
              {arraySkills.map((element) => {
                index += 1;
                return <SkillBar key={index} order={index} percentage={element.percentage} name={element.language} />
              })}
            </div>
          </div>
        </div>
        <GithubRepo />
        <h1>Counter value though Redux : </h1>
        <h2>{this.props.counter}</h2>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    counter: state.counter.value
  };
}

export default connect(mapStateToProps)(MySpaceLayout);
