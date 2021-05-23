import styles from './css/styles.css';

export default ({ name, staticPath }) =>
  `<div class=${styles.awesome}>
    Hello ${name}! Another variant!
    <img src="${staticPath}img/logo.png" />
  </div>`;
