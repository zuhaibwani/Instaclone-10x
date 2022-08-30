// NOTE :RUN [ npm install react-icons --save ]  IF ICONS ARE NOT VISIBLE 
// import UploadPost from "./uploadPost";
import { Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { BsCamera } from "react-icons/bs";
import "./header.css"

const Header = ()=>{
    return(
        <>
        <div className="header">
            <div className="logoAndheadingDiv">
            <Link to="/"><GrInstagram id="logo"/> </Link><Link to="/postview"><h1 className="heading">Instaclone</h1></Link>
            <span className="cameraIcon">
            <Link to="/uploadpost"><BsCamera/></Link>   
            </span>
            </div>

            
        </div>
         
        </>
        
    );
}

export default Header;