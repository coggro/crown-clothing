import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import HomePage from './Pages/Homepage/Homepage.component'
import ShopPage from './Pages/ShopPage/ShopPage.component'
import SignInAndSignUpPage from './Pages/SignInAndSignUpPage/SignInAndSignUpPage.component'
import Header from './Components/Header/Header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          })
        })
      }
      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
