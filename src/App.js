// import React from 'react';
// import Navbar from './components/Navbar';
// // import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// // import './App.css';

// import { BrowserRouter as Routes, Route } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import Home from './components/Home';
// import './App.css';

// function App() {
//   return (
//     <>
  
//   <Routes>
//       <Navbar />
//       <Routes>
//         <Route exact path='/' exact component={Home} />
//       </Route>
//     </Routes>
      

      
//     </>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Home from './components/Home';
import './App.css';
import Home from './components/pages/Home';
// alt+shift+down-arrow
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/sign-up' element={<SignUp/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;


