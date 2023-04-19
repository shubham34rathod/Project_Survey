
import './App.css';
import CreateSurvey from './Pages/CreateSurvey';
import Header from './Pages/Header';
import SignIn from './Pages/SignIn';
import Register from './Pages/Register'
import SurveyList from './Pages/SurveyList';
import Sidebar from './Pages/Sidebar';
import PreviewSurvey from './Pages/PreviewSurvey';
import Theme from './Pages/Theme';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Sidebar/> */}
      {/* <SurveyList/> */}
      <SignIn/>
      {/* <Register/> */}
      {/* <CreateSurvey/> */}
      {/* <PreviewSurvey/> */}
      {/* <Theme/> */}
    </div>
  );
}

export default App;
