import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import apiService from './services/api.service';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './components/home/home.component';
import ArticleDetail from './components/articles/article-detail/article-detail.component';
import { StateProvider } from './state/provider';
import { initialState } from './state/state';
import { reducer } from './state/reducer';
import './App.css';

// class App extends Component {
const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <div className="App">
          <Header title="Billin code challenge"></Header>
          <main className="main">
            <Route exact path="/" render={(props) => <Home {...props} requestProvider={apiService} />} />
            <Route path="/:id" render={(props) => <ArticleDetail {...props} requestProvider={apiService} />} />
          </main>
          <Footer className="footer" slogan="Made with ❤︎ by mcasarrubios"></Footer>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
