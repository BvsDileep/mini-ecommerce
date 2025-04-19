import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListingPage from './pages/productListing/productListingPage';
import ProductDetailPage from './pages/productDetailPage/productDetailPage';
import { PATH_CONSTANTS } from './utils/constants/globalConstants';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATH_CONSTANTS.ROOT} element={<ProductListingPage />} />
        <Route path={PATH_CONSTANTS.PRODUCT} element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
