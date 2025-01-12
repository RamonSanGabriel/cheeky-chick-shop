import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import css from './FollowUs.module.css';

const FollowUs = () => {
  return (
    <div className={css.followUsWrapper}>
      <h6>Follow us</h6>
      <ul>
        <div className={css.followUsContainer}>
          <li className={css.socialMedia}>
            <span className={css.socialMediaSpan}>
              <div className={css.socialMediaItemContainer}>
                <FaFacebook />
                &nbsp; <p>Facebook</p>
              </div>
            </span>
          </li>
          <li className={css.socialMedia}>
            <span className={css.socialMediaSpan}>
              <div className={css.socialMediaItemContainer}>
                <FaInstagramSquare />
                &nbsp; <p>Instagram</p>
              </div>
            </span>
          </li>
          <li className={css.socialMedia}>
            <span className={css.socialMediaSpan}>
              <div className={css.socialMediaItemContainer}>
                <FaTwitterSquare />
                &nbsp; <p>Twitter</p>
              </div>
            </span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default FollowUs;
