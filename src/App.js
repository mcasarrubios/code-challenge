import React, { Component } from 'react';
import apiService from './services/api.service';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './components/home/home.component';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // // lifecycle
  // componentWillMount() {
  //   request(ARTICLES_QUERY).then(response => {
  //     this.setState({ articles: response.data.articles });
  //   });
  // }

  // Renders
  render() {
    return (
      <div className="App">
        <Header title="Billin code challenge"></Header>
        <Home requestProvider={apiService}></Home>
        <Footer slogan="Made with ❤︎ by mcasarrubios"></Footer>
      </div>
    );
  }
}

export default App;
