import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
/* const ProductDetailsPage = lazy(() =>
  import('../pages/ProductDetailsPage/ProductDetailsPage')
); */
const Footer = lazy(() => import('./Footer/Footer'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route index element={<HomePage />} />
        {/* <Route path="products" element={<MoviePage />} /> */}
        {/* <Route path="products/:productsId" element={<ProductDetailsPage />} /> */}
        {/* <Route path="footer" element={<Footer />} /> */}
      </Routes>
      {/*  <Header />
      <NavBar />
      <Product />
      <Information />
      <Footer /> */}
    </>
  );
};

export default App;
