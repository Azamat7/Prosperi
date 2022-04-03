import {useEffect, useState} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { PriceContext } from './context/price';
import Navigation from "./components/Navigation"
import WelcomePage from "./components/WelcomePage"
import PaymentPage from "./components/PaymentPage"

function App() {
  const [price, setPrice] = useState(null);

  const getPrice = async () => {
    let uuid = window.localStorage.getItem('uuid');
    if (!uuid) {
      uuid = uuidv4();
      window.localStorage.setItem('uuid', uuid)
    }

    await axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/price/${uuid}`)
      .then(response => {
        setPrice(response.data.price);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err)
      }
    );
   };

  useEffect(() => {
    getPrice();
  }, []);

  return (
    <PriceContext.Provider value={price}>
      <div class="h-screen">
        <Navigation />
        {/* <WelcomePage /> */}
        <PaymentPage />
      </div>
    </PriceContext.Provider>
  );
}

export default App;
