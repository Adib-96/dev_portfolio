import "./hero.scss";
import {motion} from "framer-motion"

const textVariants = {
  initial :{
    x:-500,
    opacity:0
  },
  animate : {
    x:0,
    opacity:1,
    transition : {
      duration:1,
      staggerChildren:0.1,
    },
  },
};

const sliderVariants = {
  initial :{
    x:0,
  },
  animate : {
    x:"-220%",
    transition : {
      repeat:Infinity,
      repeatType:"mirror",
      duration:10,
    },
  },
};


function Hero() {
  return (
    <motion.div className="hero" >
      <motion.div className="wrapper" >
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Adib Ben Haddada</motion.h2 >
          <motion.h1 variants={textVariants}>Full-stack developer.</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>See Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="slider" variants={sliderVariants} initial="initial" animate="animate">
        Full-stack developer, Coding
      </motion.div>
      {/* <div className="imageContainer">
        <img src="/fullstack.png" alt=""/>
      </div> */}
    </motion.div>
  );
}

export default Hero;
