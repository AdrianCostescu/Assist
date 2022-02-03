import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./componets/Footer";
import Navbar from "./componets/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const Page = styled.div`
  width: 100%;
  display: flex;
`;

const PageHome = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Page>
      <BrowserRouter>
        <Navbar />
        <PageHome>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </PageHome>
      </BrowserRouter>
    </Page>
  );
}

export default App;
