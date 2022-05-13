import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.15)',
          width: '370px',
          height: '50px',
        }}
      >
        <span
          className={this.getBadgeClasses()}
          style={{
            width: '100px',
          }}
        >
          <h5>{this.props.counter.name}</h5>
        </span>

        <span
          className={this.getBadgeClasses()}
          style={{
            width: '40px',
          }}
        >
          <h5>{this.props.counter.value}</h5>
        </span>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary m-2"
        >
          -
        </button>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary m-2"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </div>
    )
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-'
    classes += this.props.counter.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount() {
    const { value: count } = this.props.counter
    return count === 0 ? 'Zero' : count
  }
}

export default Counter
