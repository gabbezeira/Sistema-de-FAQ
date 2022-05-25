import React from 'react';

import { ThemeProvider} from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './pages/Home'
import { Filter } from './pages/Filter'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import GlobalStyle from './styles/globalStyles'
import theme from './styles/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Router>
        <Routes >
          <Route  path='/' element={<Home />} />
          <Route  path='/filter' element={<Filter />} />
     </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
    
  );
}

export default App;

