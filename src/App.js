import {Routes,Route } from "react-router-dom";
import Header from "./component/Header";
import Coin from "./component/Coin";
import CoinDetail from "./component/CoinDetail";
import Exchange from "./component/ExchangeDetail";
import Home from "./component/Home";
import Footer from "./component/footer";

const App=()=>{
  return (
    <div>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/coin' element={<Coin />}/>
      <Route path='/coin/:id' element={<CoinDetail/>}/>
      <Route path='/exchange' element={<Exchange />}/>
    </Routes>
    <Footer />
    </div>
  )
}

export default App;
