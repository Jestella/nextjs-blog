import Container from './container';
import utilStyles from '../styles/utils.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={`${utilStyles.blackBg} ${utilStyles.whiteText}`}>
        <h4>Blog.</h4>
        <ul>
          <li>
            <a href='https://linkedin.com/in/jestellaa' target='_blank'>
              LinkedIn
            </a>
          </li>
          <li>
            <a href='https://stella-lee.com' target='_blank'>
              Portfolio
            </a>
          </li>
        </ul>

        <p>© STELLA LEE 2022</p>
      </div>
    </footer>
  );
}
