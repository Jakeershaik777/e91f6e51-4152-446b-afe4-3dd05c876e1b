// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import EventManagementHome from "./components/EventManagementHome";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
function App() {

  return (
    <div className="App">
       <Navbar /> 
      <Routes>

        <Route path="/" element={<EventManagementHome />} />
        {/* <Route path="/user/login" element={<Login />} /> */}
        {/* <Route path="/user/signup" element={<Signup />} /> */}
        {/* <Route path="/admin/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}
export default App; 