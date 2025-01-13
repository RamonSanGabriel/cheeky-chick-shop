import About from './About/About';
import CustomerService from './CustomerService/CustomerService';
import FollowUs from './FollowUs/FollowUs';
import css from './Information.module.css';
import Payment from './Payment/Payment';

const Information = () => {
  return (
    <div className={css.informationWrapper}>
      <About />
      <CustomerService />
      <Payment />
      <FollowUs />
    </div>
  );
};

export default Information;
