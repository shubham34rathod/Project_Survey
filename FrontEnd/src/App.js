
import './App.css';
import CreateSurvey from './Pages/CreateSurvey';
import Header from './Pages/Header';
import SignIn from './Pages/SignIn';
import Register from './Pages/Register'
import SurveyList from './Pages/SurveyList';
import Sidebar from './Pages/Sidebar';
import AddQuiz from './Pages/AddQuiz';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Sidebar></Sidebar> */}
      {/* <SurveyList/> */}
      <SignIn></SignIn>
      {/* <Register></Register> */}
      {/* <CreateSurvey/> */}
      {/* <AddQuiz></AddQuiz> */}
    </div>
  );
}

export default App;
