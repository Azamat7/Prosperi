import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getPrice from './services/price';
import { PriceContext } from './context/price';
import Navigation from "./components/Navigation"
import WelcomePage from "./components/WelcomePage"
import PaymentPage from "./components/PaymentPage"

function App() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const setTrialPrice = async () => {
      const price = await getPrice();
      setPrice(price);
    }
    setTrialPrice();
  }, []);

  return (
    
    <PriceContext.Provider value={price}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </PriceContext.Provider>
  );
}

export default App;
