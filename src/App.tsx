import React, { } from 'react';

import { Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Buy from './components/buy/buy'
import Job from './components/job/job';
import Info from './components/info/info';
import Contact from './components/contact/contact';

function App(): JSX.Element {

  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/buy' element={<Buy/>}/>
      <Route path='/Job' element={<Job/>}/>
      <Route path='/Info' element={<Info/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
  );
}

export default App;