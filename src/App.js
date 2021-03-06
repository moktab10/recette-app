import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import recettes from './recettes'
import Admin from './components/Admin'
import Card from './components/Card'

// Firebase configuration

import base from './base'


class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount () {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  ajouterRecette = recette => {
    const recettes = {...this.state.recettes}
    recettes[`recette-${Date.now()}`] = recette
    this.setState({recettes})
  }

  chargerExemple = () => {
    this.setState({recettes})
  }

  render () {
    const cards = Object.keys(this.state.recettes)
    .map(key => <Card key={key} details={this.state.recettes[key]}></Card>)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}></Header>
        <div className='cards'>
          <div className='card'>
            <h2>{cards}</h2>
          </div>
        </div>
        <Admin ajouterRecette={this.ajouterRecette} chargerExemple={this.chargerExemple}></Admin>
      </div>
    )
  }
}

export default App
