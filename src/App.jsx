import React, { createContext, lazy, Suspense, useEffect, useRef, useState } from "react";
import Main from "./component/main";
import { Skeleton } from "@mui/material";
import Header from "./component/header";
import Footer from "./component/footer";
import Skill from "./component/skill";
import Resume from "./component/resume";
const About = lazy(() => import('./component/about'));
const Project = lazy(() => import('./component/project'));
const Contact = lazy(() => import('./component/contact'));
export const api = createContext(null)
const My_app = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Main/>
      <Suspense fallback={<div style={{ textAlign: 'center', margin: '2rem' }}>Loading...</div>}>
        <About />
        <Skill/>
        <Project />
        <Skeleton sx={{ backgroundColor: 'rgb(255, 255, 255)', height: '10px', width: '85%', margin: '0 auto', my: 5 }} animation={false} />
        <Resume/>
        <Contact />
      </Suspense>
      </div>
    </>
  );
}

function App() {
  const [section,setsection]=useState('Home')
  const refhome=useRef(null);
  const refabout=useRef(null);
  const refskill=useRef(null);
  const refcontact=useRef(null);
  const refproject=useRef(null);
  const refResume=useRef(null);

  useEffect(() => {
    const offset = 0;
    let scrollTarget = 0;
  
    if (section === "Home" && refhome.current) {
      scrollTarget = refhome.current.offsetTop - offset;
    } else if (section === "About" && refabout.current) {
      scrollTarget = refabout.current.offsetTop - offset;
    } else if (section === "Skills" && refskill.current) {
      scrollTarget = refskill.current.offsetTop - offset;
    }
     else if (section === "Project" && refproject.current) {
      scrollTarget = refproject.current.offsetTop - offset;
    } else if (section === "Resume" && refResume.current) {
      scrollTarget = refResume.current.offsetTop - offset;
    }else if (section === "Contact" && refcontact.current) {
      scrollTarget = refcontact.current.offsetTop - offset;
    } else {
      return; 
    }
  
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
  }, [section]);
  
  

const value={
  section,
  setsection,
  refproject,
  refhome,
  refabout,
  refcontact,
  refskill,
  refResume
}
  return (
    <>
      <api.Provider value={value}>
      <Header />
        <My_app />
        <Footer />
      </api.Provider>

    </>
  );
}

export default App;
