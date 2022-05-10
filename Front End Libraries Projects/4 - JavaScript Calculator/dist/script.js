function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }
  return obj
}
const num = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
const ops = ['/', '*', '-', '+']

const ids = {
  7: 'seven',
  8: 'eight',
  9: 'nine',
  4: 'four',
  5: 'five',
  6: 'six',
  1: 'one',
  2: 'two',
  3: 'three',
  0: 'zero',
  '/': 'divide',
  '*': 'multiply',
  '-': 'subtract',
  '+': 'add',
}

class App extends React.Component {
  constructor(...args) {
    super(...args)
    _defineProperty(
      this,
      'state',

      {
        lastClicked: undefined,
        calc: '0',
        operation: undefined,
      }
    )
    _defineProperty(
      this,
      'handleClick',

      (e) => {
        const { calc, lastClicked } = this.state
        const { innerText } = e.target

        switch (innerText) {
          case 'AC': {
            this.setState({
              calc: '0',
            })

            break
          }

          case 'CE': {
            this.setState({
              calc: calc.slice(0, calc.length - 1),
            })

            break
          }

          case '=': {
            const evaluated =
              Math.round(1000000000000 * eval(calc)) / 1000000000000
            this.setState({
              calc: evaluated,
            })

            break
          }

          case '.': {
            const splitted = calc.split(/[\+\-\*\/]/)
            const last = splitted.slice(-1)[0]

            if (!last.includes('.')) {
              this.setState({
                calc: calc + '.',
              })
            }

            break
          }

          default: {
            let e
            if (ops.includes(innerText)) {
              if (ops.includes(lastClicked) && innerText !== '-') {
                const lastNumberIdx = calc
                  .split('')
                  .reverse()
                  .findIndex((char) => char !== ' ' && num.includes(+char))
                e =
                  calc.slice(0, calc.length - lastNumberIdx) + ` ${innerText} `
              } else {
                e = `${calc} ${innerText} `
              }
            } else {
              e = calc === '0' ? innerText : calc + innerText
            }

            this.setState({
              calc: e,
            })
          }
        }

        this.setState({
          lastClicked: innerText,
        })
      }
    )
  }

  render() {
    const { calc, lastClicked } = this.state

    return React.createElement(
      'div',
      { className: 'calculator' },
      React.createElement(
        'p',
        { style: { position: 'absolute', opacity: 0, top: 0 } },
        JSON.stringify(this.state, null, 2)
      ),
      React.createElement(
        'div',
        { id: 'display', className: 'display' },
        calc.length > 18 ? 'ERROR - YOUR INPUT IS TOO LONG' : calc
      ),
      React.createElement(
        'div',
        { className: 'nums-container' },
        React.createElement(
          'button',
          { className: 'AC', id: 'clear', onClick: this.handleClick },
          'AC'
        ),
        React.createElement(
          'button',
          { className: 'CE', onClick: this.handleClick },
          'CE'
        ),

        num.map((num) =>
          React.createElement(
            'button',
            { onClick: this.handleClick, key: num, id: ids[num] },
            num
          )
        ),

        React.createElement(
          'button',
          { className: 'ops', id: 'decimal', onClick: this.handleClick },
          '.'
        )
      ),

      React.createElement(
        'div',
        { className: 'ops-container' },
        ops.map((op) =>
          React.createElement(
            'button',
            {
              className: 'ops',
              onClick: this.handleClick,
              key: op,
              id: ids[op],
            },
            op
          )
        ),
        React.createElement(
          'button',
          { className: 'equal', id: 'equals', onClick: this.handleClick },
          '='
        )
      )
    )
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'))
