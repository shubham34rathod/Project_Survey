
import './App.css';
import CreateSurvey from './Pages/CreateSurvey';
import Header from './Pages/Header';
import SignIn from './Pages/SignIn';
import Register from './Pages/Register'
import SurveyList from './Pages/SurveyList';

function App() {
  return (
    <div className="App">
      <Header/>
      <SurveyList/>
      <SignIn></SignIn>
      <Register></Register>
      {/* <CreateSurvey/> */}
    </div>
  );
}

export default App;
