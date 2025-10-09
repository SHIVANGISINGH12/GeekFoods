import "./App.css";
import { Feedback } from "./components/Feedback/Feedback";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Info } from "./components/Info/Info";

function App() {
  return (<>
  <Header/>
  <Hero/>
  <Info/>
  <Feedback/>
  <Footer/>
  </>);
}

export default App;
