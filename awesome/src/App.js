import Header from "./Components/_1_Header";
import Main from './Components/_2_Main';
import WeAreAwesome from './Components/_3_Section_WeAreAwesome';
import AwesomeTeam from './Components/_4_Section_AwesomeTeam';
import OurAwesomeThings from './Components/_5_Section_OurAwesomeThings';
import AwesomePortfolio from './Components/_6_Section_AwesomePortfolio';
import ContactAwesome from './Components/_7_Footer_ContactAwesome';

import { AnimateSharedLayout } from "framer-motion";

function App() {
    return (
    <>
      <AnimateSharedLayout>
      <Header/>
      <Main/>
      <WeAreAwesome/>
      <AwesomeTeam/>
      <OurAwesomeThings/>
      <AwesomePortfolio/>
      <ContactAwesome/>
      </AnimateSharedLayout>
    </>
  );
}

export default App;
