import Home from '../../components/Home/Home';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Cheeky Chip Shop | Homepage </title>
      </Helmet>
      <Home />
    </HelmetProvider>
  );
};

export default HomePage;
