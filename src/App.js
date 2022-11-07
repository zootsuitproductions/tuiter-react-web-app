
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Labs from "./labs/";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter, Link, useLocation, useParams} from "react-router-dom";
import {Routes, Route} from "react-router";
import {useState} from "react";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/*" element={<Labs/>}/>.
            <Route path="/hello"
                   element={<HelloWorld/>}/>
            <Route path="/tuiter"
                   element={<Tuiter/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;
// //
// // const A = () => {
// //   const {pathname} = useLocation();
// //   const paths = pathname.split('/');
// //   const a = paths[1];
// //   const b = paths[2];
// //   return(
// //       <span>{a + b}</span>
// //   )
// // }
// //
// // // const B = () => {
// // //   const {pathname} = useLocation();
// // //   const paths = pathname.split('/');
// // //   const c = paths[1];
// // //   const d = paths[2];
// // //   return(
// // //       <span>{c - d}</span>
// // //   )
// // // }
// //
// // const B = () => {
// //   const [e, f] = useState(true)
// //   return(
// //       <div>
// //         {  e && <h1 onClick={() => f(false)}>G</h1>}
// //         { !e && <h1 onClick={() => f(true) }>H</h1>}
// //       </div>
// //   )
// // }
// //
// //
// //
// //
// //
// // const GBAXF = () => {
// //   const [xiv, setXiv] = useState({gcliad: 5});
// //
// //   let tr = [21,32,43,54,76];
// //   let re = [98,87];
// //   let ew = [65,54,...tr,43,32,re]
// //
// //   console.log(ew.length);
// //
// //   return (
// //       <div>
// //         <button
// //             onClick={
// //               () => setXiv({
// //                 ...xiv,
// //                 gcliad: xiv.gcliad + 5
// //               })}>
// //           Fup
// //         </button>
// //         <h1>{xiv.gcliad}</h1>
// //         <button
// //             onClick={
// //               () => setXiv({
// //                 ...xiv,
// //                 gcliad: xiv.gcliad - 4
// //               })}>
// //           Qdewaesf
// //         </button>
// //       </div>
// //   )
// // }
// //
// //
// // const Xyatwd = () => {
// //   return(
// //       <BrowserRouter>
// //         <Link to="/elpmqbsu/3/9">
// //           Xftqrkem
// //         </Link>
// //         <Routes>
// //           <Route path="/*" element={<Npcmwa/>}/>
// //         </Routes>
// //       </BrowserRouter>
// //   );
// // }
// //
// // const Npcmwa = () => {
// //   return(
// //       <div>
// //         <Routes>
// //           <Route path="/elpmqbsu/:vz/:qtg" element={<Eyvhdws/>}/>
// //         </Routes>
// //       </div>
// //   );
// // };
// //
//
// import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
//
// const Eyvhdws = () => {
//   return(
//       <h1 id="jfjci">Hi</h1>
//   );
// };
//
//
//
//
// // import DEF from './someComponent'
// const NavigationComponent = () => (
//     <BrowserRouter>
//       <Link  to="/GHI">ABC</Link>
//       <Routes>
//         <Route  path="/GHI"  element={<Eyvhdws/>}/>
//       </Routes>
//     </BrowserRouter>
// )
//
//
//
// function App() {
//   const ewq = [28, 107, 26, 65, 95]
//   return (
//       <NavigationComponent/>
//   );
// }
// export default App;
