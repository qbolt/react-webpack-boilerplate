import React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './containers/Home'
import About from './containers/About'
import Header from './components/Header'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path='/' component={Header} />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
)
