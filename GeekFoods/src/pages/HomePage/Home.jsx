import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Feedback } from "./Feedback/Feedback";
import { Hero } from "./Hero/Hero";
import { Info } from "./Info/Info";

export function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Info />
            <Feedback />
            <Footer />
        </>
    );
}
