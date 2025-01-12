import css from './Payment.module.css';
import bdo from '../../../images/bdoLogo.png';
import bpi from '../../../images/bpi.png';
import gcash from '../../../images/gcashLogo.png';

const Payment = () => {
  return (
    <div className={css.paymentWrapper}>
      <h6>Payment</h6>
      <ul>
        <div className={css.paymentLogoContainer}>
          <li className={css.payment}>
            <span className={css.paymentSpan}>
              <img className={css.paymentLogo} src={bdo} alt="BDO Logo" />
            </span>
          </li>
          <li className={css.payment}>
            <span className={css.paymentSpan}>
              <img className={css.paymentLogo} src={bpi} alt="BPI Logo" />
            </span>
          </li>
          <li className={css.payment}>
            <span className={css.paymentSpan}>
              <img
                className={css.paymentLogoGcash}
                src={gcash}
                alt="Gcash Logo"
              />
            </span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Payment;
