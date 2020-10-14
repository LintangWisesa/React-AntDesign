import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Typo from './pages/0_Typography'
import Button from './pages/1_Button'
import Icon from './pages/2_Icon'
import Layout from './pages/3_Layout'
import Grid from './pages/4_Grid'
import Menu from './pages/5_Menu'
import Pagination from './pages/6_Pagination'
import Forms from './pages/7_Form'
import Carousel from './pages/8_carousel'

const App = () => (
  <Router>
    <img alt="antd" width="100px" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
    <img alt="react" width="100px" src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"/>
    <br/><br/><br/>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home | </Link></li>
          <li><Link to="/typo">Typography | </Link></li>
          <li><Link to="/button">Button | </Link></li>
          <li><Link to="/icon">Icon | </Link></li>
          <li><Link to="/layout">Layout | </Link></li>
          <li><Link to="/grid">Grid | </Link></li>
          <li><Link to="/nav">Navigation | </Link></li>
          <li><Link to="/pagination">Pagination | </Link></li>
          <li><Link to="/forms">Forms | </Link></li>
          <li><Link to="/carousel">Carousel | </Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <div style={{marginLeft:'30px', marginRight:'30px'}}>
            <h1>React & Ant Design</h1>
            <p>Summary of how to implement Ant Design on React projects</p>
          </div>
        </Route>
        <Route path="/typo"><Typo/></Route>
        <Route path="/button"><Button/></Route>
        <Route path="/icon"><Icon/></Route>
        <Route path="/layout"><Layout/></Route>
        <Route path="/grid"><Grid/></Route>
        <Route path="/nav"><Menu/></Route>
        <Route path="/pagination"><Pagination/></Route>
        <Route path="/forms"><Forms/></Route>
        <Route path="/carousel"><Carousel/></Route>
      </Switch>
    </div>
  </Router>
);

export default App;