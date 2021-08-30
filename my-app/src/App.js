import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Main from './components/Main';
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main  />
        <Footer />
      </>

    );
  }

}

export default App;