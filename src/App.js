import './App.css';
import Header from './global_components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from './home/components/Home';
import AboutUs from './about-us/components/AboutUs';
import Blog from './blogs/components/Blogs';
import Events from './events/components/Events';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#0000ff', // primary color is blue
      },
      secondary: {
        main: '#ffeb3b', // I have made this a yellow but probally will change it
      },
    },
  }
);


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/about-us" element={<AboutUs></AboutUs>} />
          <Route path="/blog" element={<Blog></Blog>} />
          <Route path="/events" element={<Events></Events>} />

          {/* Defined french routes here */}
          <Route path="/accueil" element={<Home></Home>} />
          <Route path="/à-propos" element={<AboutUs></AboutUs>} />
          <Route path="/blog" element={<Blog></Blog>} />
          <Route path="/événements" element={<Events></Events>} />
          {/* Add other routes here */}
        </Routes>
      </ThemeProvider>
    </Router>
  );

}

export default App;
