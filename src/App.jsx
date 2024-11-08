

import { AllRoutes } from "./components/AllRoutes";

import { Navbar } from "./components/NavBar";

import { Footer } from "./components/Footer";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    < Box fontFamily="'Roboto', sans-serif" >    
      <Navbar />
      <hr />
      <AllRoutes />

      <Footer/>
    </Box>
  );
}

export default App;
