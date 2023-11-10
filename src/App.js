
import './App.css';

import React from 'react';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      link: 'https://example.com/project1'
    },
  
  ];

  const skills = ['React', 'JavaScript', 'HTML', 'CSS', '...', /* Add more skills */];

  const contactInfo = {
    email: 'dhruv.02v@gmail.com',
    phone: '8368338920',
    social: ''
  };

  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>

      <main>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
        <Skills skills={skills} />
        <Contact {...contactInfo} />
      </main>
    </div>
  );
}

export default App;

