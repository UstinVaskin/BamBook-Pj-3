import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'


import SecureRoute from './components/common/SecureRoute'
import FlashMessages from './components/common/FlashMessages'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Team from './components/common/Team'
import Feed from './components/common/Feed'


import booksShow from './components/books/Show'


import storiesShow from './components/stories/StoryShow'



import booksNew from './components/books/New'
import storiesNew from './components/stories/storyNew'



import booksIndex from './components/books/Index'
import storyIndex from './components/stories/StoryIndex'



import booksEdit from './components/books/Edit'
import storiesEdit from './components/stories/StoryEdit'


import Login from './components/auth/Login'
import Register from './components/auth/Register'
import UsersShow from './components/users/Show'
import UsersEdit from './components/users/Edit'
import 'bulma'
import './style.scss'

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <HashRouter>
        <Navbar />
        <FlashMessages />
        <Switch>

          {/* User */}
          <SecureRoute path="/users/:id/edit" component={UsersEdit} />
          <SecureRoute path="/users/:id" component={UsersShow} />

          {/* Feed */}
          <SecureRoute path="/feed" component={Feed} />

          {/* Books */}
          <SecureRoute path="/books/:id/edit" component={booksEdit} />
          <SecureRoute path="/books/new" component={booksNew} />
          <Route path="/books/:id" component={booksShow} />
          <Route path="/books/genre" component={booksIndex} />
          <Route path="/books" component={booksIndex} />

          {/* Stories */}
          <SecureRoute path="/stories/:id/edit" component={storiesEdit} />
          <SecureRoute path="/stories/new" component={storiesNew} />
          <Route path="/stories/:id" component={storiesShow} />
          <Route path="/stories" component={storyIndex} />

          {/* Auth */}
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />

          {/* Team */}
          <Route path="/team" component={Team} />

          {/* Home */}
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)



