import { Feedback } from "./Feedback/Feedback";
import { Hero } from "./Hero/Hero";
import { Info } from "./Info/Info";


export function Home() {
  return (
    <>
     <Hero/>
     <Info/>
     <Feedback/>
    </>
  );
}
