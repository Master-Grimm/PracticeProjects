import React, { Component } from 'react'
import NavBar from './components/navbar'
import './App.css'
import Counters from './components/counters'

class App extends Component {
  state = {
    counters: [
      { name: 'item #1', id: 1, value: 1 },
      { name: 'item #2', id: 2, value: 5 },
      { name: 'item #3', id: 3, value: 3 },
      { name: 'item #4', id: 4, value: 2 },
      { name: 'item #5', id: 5, value: 7 },
    ],
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    if (counters[index].value < 9) counters[index].value++
    this.setState({ counters })
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    if (counters[index].value > 0) counters[index].value--
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId)
    this.setState({ counters })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            name={this.state.name}
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default App
