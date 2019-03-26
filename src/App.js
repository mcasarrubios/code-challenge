import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import apiService from './services/api.service';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './components/home/home.component';
import ArticleDetailPage from './components/articles/article-detail-page/article-detail.page';
import { StateProvider } from './state/provider';
import { initialState } from './state/state';
import { reducer } from './state/reducer';
import './App.css';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <div className="App">
          <Header title="Billin code challenge"></Header>
          <main className="main">
            <Route exact path="/" render={(props) => <Home {...props} requestProvider={apiService} />} />
            <Route path="/:id" render={(props) => <ArticleDetailPage {...props} requestProvider={apiService} />} />
          </main>
          <Footer className="footer" slogan="Made with ❤︎ by mcasarrubios"></Footer>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
