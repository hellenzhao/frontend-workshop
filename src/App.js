import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage"


// These will be the exercises
import ButtonPopupPage from "./pages/events/ButtonPopupPage";
import LightSwitchPage from './pages/events/LightSwitchPage';
import ColorSwitch from "./pages/events/ColorSwitchPage";
import Counter from "./pages/states/CounterPage";
import ToDo from "./pages/states/ToDoPage";

const events_exercises = [
  ButtonPopupPage,
  LightSwitchPage,
  ColorSwitch
]

const states_exercises = [
  Counter,
  ToDo
]


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="events">
              {events_exercises.map((Component, index) => 
                <Route path={`${index+1}`} key={index} element={<Component/>}/>
              )}
            </Route>
            <Route path="states">
              {states_exercises.map((Component, index) => 
                <Route path={`${index+1}`} key={index} element={<Component/>}/>
              )}
            </Route>
          </Route>
          <Route path="*" element={<NoPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
