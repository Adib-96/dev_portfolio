import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span 
        initial={{opacity:0,scale:0.5}} 
        animate={{opacity:1,scale:1}} 
        transition={{duration:0.6}}>
          Adib Bh
        </motion.span>
        <div className="social_media">
            <a href="#"><img src="/facebook.png" alt="" /></a>
            <a href="#"><img src="/twitter.png" alt="" /></a>
            <a href="#"><img src="/github.png" alt="" /></a>
            <a href="#"><img src="/linkedin.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;