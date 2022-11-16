import React from 'react';
import Container from './components/Container';
import Logo from './components/Logo';
import './scss/main.scss';

const App = () => {
  return (
    <div className='app'>
      <Logo/>
      <Container/>
    </div>
  );
};

export default App;