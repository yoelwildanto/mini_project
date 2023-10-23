import './App.css';
import { Button, ChakraProvider, CSSReset, extendTheme, OrderedList } from '@chakra-ui/react';
import { BrowserRouter as Router, Routers, Route } from 'react-router-dom';
import Checkout from './components/button';
import Buyingcard from './components/eventdetail';
import Countertickets from './components/counterticket';
import Choosecard from './components/cardstyle2';
import Order from './pages/order';
import Bold from './components/boldtext';
import Grey from './components/greyText';
import {Infocard, Priceinfo, Qtyinfo} from './components/infoticket';
import VoucherValidationCard from './components/vouchervalid';
import TicketPriceCard from './components/paymentinfo';
import BackButton from './components/backbutton';
import Ordersummary from './pages/ordersummary';




const theme = extendTheme({
  
});

function App() {
  return (
    <ChakraProvider> {/* theme={theme} */}
      {/* <CSSReset /> */}
    {/* <Checkout/> */}
      {/* <Buyingcard/>  */}
      {/* <Infocard type="Presale 1"/>
      <Priceinfo price="45000" />
      <Qtyinfo qty="1"/> */}
    {/* <Choosecard></Choosecard> */}
    {/* <Order></Order> */}
 {/* <BackButton /> */}
 <Ordersummary />

 {/* <TicketPriceCard /> */}
    </ChakraProvider>
  );
}

export default App;
