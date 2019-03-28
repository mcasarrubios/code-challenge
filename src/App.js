import React from 'react';
import { BrowserRouter as Router, Switch, Route, history } from 'react-router-dom';
import apiService from './services/api.service';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './components/home/home.component';
import ArticleDetailPage from './components/articles/article-detail-page/article-detail.page';
import ArticleDetailEdit from './components/articles/article-detail-edit/article-detail-edit.component';
import { StateProvider } from './state/provider';
import { initialState } from './state/state';
import { reducer } from './state/reducer';
import './App.css';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <div className="App">
          <Header title="Billin code challenge" history={history} requestProvider={apiService}></Header>
          <section className="main">
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} requestProvider={apiService} />} />
              <Route path="/new" render={({history}) => <ArticleDetailEdit article={{}} requestProvider={apiService} onSave={() => history.goBack()}/>} />
              <Route path="/:id" render={(props) => <ArticleDetailPage {...props} requestProvider={apiService} />} />
            </Switch>
          </section>
          <Footer className="footer" slogan="Made with ❤︎ by mcasarrubios"></Footer>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
