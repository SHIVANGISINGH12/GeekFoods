import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/HomePage/Home";
import { Quotes } from "./pages/QuotesPage/Quotes";


function App() {
  return (<>
  <Header/>
  {/* <Home/> */}
  <Quotes/>
  <Footer/>
  </>);
}

export default App;
