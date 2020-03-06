import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import i18n from "./i18n";
import { withTranslation } from 'react-i18next';
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import logo from './nexon-logo.png';
import picture from './maple-img.jpg'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "en"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    console.log("selected val is ", event.target.value);
    let newlang = event.target.value;
    this.setState(prevState => ({ value: newlang }));
    console.log("state value is", newlang);
    i18n.changeLanguage(newlang);
  };


  render() {
    const { t } = this.props;
    return (
      <div className="App">
        <Navbar bg="dark">
          <Navbar.Brand>
          <img
              src={logo}
              height='40'
              width='40'
              className="d-inline-block align-top"
              alt="Nexon Logo"
            />{' '}
            NEXON
          </Navbar.Brand>
        </Navbar>
        <div className='text-body'>
          <Form className='language-select'>
            <Form.Label className='language-label'>Language: </Form.Label>
            <Form.Control as="select" className='language-options' onChange={this.handleChange}>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="sp">Spanish</option>
              <option value="ger">German</option>
              <option value="kr">Korean</option>
              <option value="jp">Japanese</option>
            </Form.Control>
          </Form>
        </div>
        <div className="test">
          {t('Example')}
        </div>
        <div className="wallpaper">
          <img src={picture} alt="Maple Story"/>
        </div>
      </div>
    );
  }
}

export default withTranslation()(App);
