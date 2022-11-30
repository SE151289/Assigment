
 import Form from './components/Form';
 import Application from './components/Application';
 import Navigation from './components/Navigation';
 import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
      <Route path='/' element={<Form />}></Route>
      <Route path='/application' element={<Application />}></Route>
      <Route path='/form' element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
