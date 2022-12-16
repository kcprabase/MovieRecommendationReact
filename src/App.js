import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Welcome from './Welcome';

function App() {
  return (
    <>
      <Welcome />
      <Routes>
        <Route path='/' element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
