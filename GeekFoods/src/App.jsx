import "./App.css";
import { Home } from "./pages/HomePage/Home";
import { Quotes } from "./pages/QuotesPage/Quotes";
import { Routes, Route } from "react-router";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { RestaurantsPage } from "./pages/RestaurantsPage/RestaurantsPage";

function App() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/restaurants" element={<RestaurantsPage/>}></Route>
                <Route path="/contact" element={<ContactPage />}></Route>
            </Routes>
        </>
    );
}

export default App;
