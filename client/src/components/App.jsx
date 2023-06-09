import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// import Navigation from './Navigation';
import Landing from './Landing';
import Prices from './Prices';

const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
  componentDidMount() { // Once component is visible, will be used to fetch current user. 
    this.props.fetchUser();
  }

  render() {
      return (
        <BrowserRouter className="container">
          <Routes>
              <Route path="/" exact component={Landing} />
              <Route path="/prices" exact component={Prices} />
              <Route path="/surveys/new" component={SurveyNew}/>
          </Routes>
        </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);// 1st arg is for mapstatetoprops(null), 2nd actions. Both assigned to App as props.(we can use fetchUser in App now.) 