import React from 'react';
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import { useEffect } from 'react';

function About() {

  const a = useContext(noteContext);
  useEffect(()=>{
    a.update();
    // eslint-disable-next-line
  },[])
  return (
    <div>
      This is About {a.state.name} and he is in class {a.state.class};
    </div>
  )
}

export default About