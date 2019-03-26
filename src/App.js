import React, { Component } from 'react';
import apiService from './services/api.service';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './components/home/home.component';
import { StateProvider } from './state/provider';
import { initialState } from './state/state';
import { reducer } from './state/reducer';
import './App.css';

class App extends Component {

  // Renders
  render() {
    return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <div className="App">
          <Header title="Billin code challenge"></Header>
          <main className="main">
            <Home requestProvider={apiService}></Home>
          </main>
          <Footer className="footer" slogan="Made with ❤︎ by mcasarrubios"></Footer>
        </div>
      </StateProvider>
    );
  }
}

export default App;
