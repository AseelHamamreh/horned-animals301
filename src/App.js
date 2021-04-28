import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer ';
import Main from './components/Main';
import MyForm from './components/MyForm';

class App extends React.Component{
  render(){
    return(
      <section>
        <Header/>
        <MyForm />
        <Main />
        <Footer />
      </section>
    );
  }
}
export default App;
