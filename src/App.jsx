import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

// SPA - Single Page Application
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App