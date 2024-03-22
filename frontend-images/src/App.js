import 'devextreme/dist/css/dx.light.css';

import './App.css';
import { Route, Routes } from 'react-router-dom';

import Individuals from './components/Individuals/Individuals';
import Occurrences from './components/Occurrences/Occurrences';
import Measurements from './components/Measurements/Measurements';
import Conditions from './components/Conditions/Conditions';
import Features from './components/Features/Features';
import Devices from './components/Devices/Devices';

import Cohorts from './components/Cohorts/Cohorts';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/NavBar/Navbar';
import SignInForm from './components/SignIn/SignInForm';
import ResultsDatasets from './components/Datasets/ResultsDatasets';
import CrossQueries from './components/CrossQueries/CrossQueries';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Individuals />} />
        <Route path='/individuals' element={<Individuals />} />
        <Route path='/occurrences' element={<Occurrences />} />
        <Route path='/measurements' element={<Measurements />} />
        <Route path='/conditions' element={<Conditions />} />
        <Route path='/features' element={<Features />} />
        <Route path='/devices' element={<Devices />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}



export default App;