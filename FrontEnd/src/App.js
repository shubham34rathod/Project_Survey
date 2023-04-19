
import './App.css';
import CreateSurvey from './Pages/CreateSurvey';
import Header from './Pages/Header';
import SurveyList from './Pages/SurveyList';

function App() {
  return (
    <div className="App">
      <Header/>
      <SurveyList/>
      {/* <CreateSurvey/> */}
    </div>
  );
}

export default App;
