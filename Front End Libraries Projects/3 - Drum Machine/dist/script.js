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

const data = [
  {
    id: '♬ Perc 1 ♬',
    letter: 'Q',
    src: 'https://www.myinstants.com/media/sounds/perc1.mp3',
  },
  {
    id: '♬ Perc 2 ♬',
    letter: 'W',
    src: 'https://www.myinstants.com/media/sounds/perc2.mp3',
  },
  {
    id: '♬ Perc 3 ♬',
    letter: 'E',
    src: 'https://www.myinstants.com/media/sounds/perc3.mp3',
  },
  {
    id: '♬ Kick 1 ♬',
    letter: 'A',
    src: 'https://www.myinstants.com/media/sounds/1_IebVFVY.mp3',
  },
  {
    id: '♬ Kick 2 ♬',
    letter: 'S',
    src: 'https://www.myinstants.com/media/sounds/kick2.mp3',
  },
  {
    id: '♬ Kick 3 ♬',
    letter: 'D',
    src: 'https://www.myinstants.com/media/sounds/kick3.mp3',
  },
  {
    id: '♬ Snare 1 ♬',
    letter: 'Z',
    src: 'https://www.myinstants.com/media/sounds/snare1.mp3',
  },
  {
    id: '♬ Snare 2 ♬',
    letter: 'X',
    src: 'https://www.myinstants.com/media/sounds/snare2.mp3',
  },
  {
    id: '♬ Snare 3 ♬',
    letter: 'C',
    src: 'https://www.myinstants.com/media/sounds/snare3.mp3',
  },
]

class DrumPad extends React.Component {
  constructor(...args) {
    super(...args)
    _defineProperty(
      this,
      'handleKeydown',

      (i) => {
        if (i.keyCode === this.props.letter.charCodeAt()) {
          this.audio.play()
          this.audio.currentTime = 0
          this.props.handleDisplay(this.props.id)
        }
      }
    )
    _defineProperty(
      this,
      'handleClick',

      () => {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
      }
    )
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
  }

  render() {
    return React.createElement(
      'div',
      {
        className: 'drum-pad',
        id: this.props.id,
        onClick: this.handleClick,
      },
      React.createElement('h2', null, this.props.letter),
      React.createElement('audio', {
        id: this.props.letter,
        className: 'clip',
        src: this.props.src,
        ref: (ref) => (this.audio = ref),
      })
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    _defineProperty(
      this,
      'handleDisplay',

      (display) => this.setState({ display })
    )
    this.state = { display: 'Drum Machine' }
  }

  render() {
    return React.createElement(
      'div',
      { id: 'drum-machine' },
      React.createElement('div', { id: 'display' }, this.state.display),
      React.createElement(
        'div',
        { id: 'aligner' },
        React.createElement(
          'div',
          { id: 'drum-pads' },
          data.map((i) =>
            React.createElement(DrumPad, {
              key: i.id,
              id: i.id,
              letter: i.letter,
              src: i.src,
              handleDisplay: this.handleDisplay,
            })
          )
        )
      )
    )
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'))
