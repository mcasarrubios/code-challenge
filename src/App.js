import React, { Component } from 'react';
import request from './request';
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
        {/* <pre>{JSON.stringify(this.state.articles, null, 2)}</pre> */}
        <Home requestProvider={request}></Home>
        <Footer slogan="Made with ❤︎ by mcasarrubios"></Footer>
      </div>
    );
  }
}

export default App;
