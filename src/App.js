import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
function App() {
  return (
    <>
    <Layout/>
    <Routes>
          <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
