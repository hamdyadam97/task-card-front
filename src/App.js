import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
// import BookDetail from './components/BookDetail';
// import BookCreate from './components/BookCreate';
// import BookUpdate from './components/BookUpdate';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<BookList />} />
        {/* <Route exact path="/books/:id" component={BookDetail} />
                <Route exact path="/create" component={BookCreate} />
                <Route exact path="/update/:id" component={BookUpdate} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
