import Postview from "./Components/postview";
import LandingPage from "./Components/landingPage";
// import NotFound from "./Components/NotFound";
import UploadPost from "./Components/uploadPost";
import {Route, Routes} from 'react-router-dom';
const App = () =>{
  return(
    <>
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/postview" element={<Postview/>}/>
        <Route path="/uploadpost" element={<UploadPost/>}/>
    </Routes>
    </>
  );
}

export default App;