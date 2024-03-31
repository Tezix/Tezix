import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import IntroPage from "./pages/IntroPage/IntroPage";
import { useState, useEffect } from "react";
import FontFaceObserver from "fontfaceobserver";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import Footer from "./components/Footer/Footer";

function App() {
  const [showNavbarAndBackground, setShowNavbarAndBackground] = useState(false);

  useEffect(() => {
    const font = new FontFaceObserver("Outfit");

    font.load().then(() => {
      const timer = setTimeout(() => {
        setShowNavbarAndBackground(true);
      }, 2000);
      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <>
      {showNavbarAndBackground ? (
        <>
          <nav>
            <Navbar />
          </nav>
          <main>
            <Background />
            <AppRoutes role="region" aria-label="Main content" />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      ) : (
        <main>
          <IntroPage />
        </main>
      )}
    </>
  );
}

export default App;
