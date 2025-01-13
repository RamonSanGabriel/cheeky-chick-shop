import css from './About.module.css';

const About = () => {
  return (
    <div className={css.aboutUsWrapper}>
      <h6>About us</h6>
      <ul>
        <div className={css.aboutListContainer}>
          <li className={css.aboutUs}>
            <span className={css.aboutUsSpan}>
              <p>Who we are </p>
            </span>
          </li>
          <li className={css.aboutUs}>
            <span className={css.aboutUsSpan}>
              <p>Policies </p>
            </span>
          </li>
          <li className={css.aboutUs}>
            <span className={css.aboutUsSpan}>
              <p>Privacy & Policy</p>
            </span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default About;
