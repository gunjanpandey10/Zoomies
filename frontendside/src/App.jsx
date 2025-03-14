import "./App.css";
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Landing from "./pages/Landing";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import { AuthProvider } from "./contexts/AuthContext";
import VideoMeet from "./pages/VideoMeet";
import History from "./pages/History";

const App = () => {
  return (
    <div className="App">
    <Router>
<AuthProvider>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/auth" element={<Authentication/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/:url' element={<VideoMeet/>}/>
      </Routes>
      </AuthProvider>
    </Router>
    </div>
  );
}

export default App;