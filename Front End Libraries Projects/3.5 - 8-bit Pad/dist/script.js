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
    id: '♬ org1 ♬',
    letter: '1',
    src: 'https://www.myinstants.com/media/sounds/organ_1.mp3',
  },
  {
    id: '♬ org2 ♬',
    letter: '2',
    src: 'https://www.myinstants.com/media/sounds/organ_2.mp3',
  },
  {
    id: '♬ org3 ♬',
    letter: '3',
    src: 'https://www.myinstants.com/media/sounds/organ_3.mp3',
  },

  {
    id: '♬ org4 ♬',
    letter: '5',
    src: 'https://www.myinstants.com/media/sounds/organ_4.mp3',
  },
  {
    id: '♬ vox1 ♬',
    letter: '6',
    src: 'https://www.myinstants.com/media/sounds/vox_1.mp3',
  },
  {
    id: '♬ vox2 ♬',
    letter: '7',
    src: 'https://www.myinstants.com/media/sounds/vox_2.mp3',
  },

  {
    id: '♬ tom1 ♬',
    letter: 'Q',
    src: 'https://www.myinstants.com/media/sounds/tom_1.mp3',
  },
  {
    id: '♬ tom2 ♬',
    letter: 'W',
    src: 'https://www.myinstants.com/media/sounds/tom_2.mp3',
  },
  {
    id: '♬ tom3 ♬',
    letter: 'E',
    src: 'https://www.myinstants.com/media/sounds/tom_3.mp3',
  },

  {
    id: '♬ tom4 ♬',
    letter: 'T',
    src: 'https://www.myinstants.com/media/sounds/tom_4.mp3',
  },
  {
    id: '♬ vox3 ♬',
    letter: 'Y',
    src: 'https://www.myinstants.com/media/sounds/vox_3.mp3',
  },
  {
    id: '♬ vox4 ♬',
    letter: 'U',
    src: 'https://www.myinstants.com/media/sounds/vox_4.mp3',
  },

  {
    id: '♬ perc1 ♬',
    letter: 'A',
    src: 'https://www.myinstants.com/media/sounds/perc_1.mp3',
  },
  {
    id: '♬ perc2 ♬',
    letter: 'S',
    src: 'https://www.myinstants.com/media/sounds/perc_2.mp3',
  },
  {
    id: '♬ perc3 ♬',
    letter: 'D',
    src: 'https://www.myinstants.com/media/sounds/perc_3.mp3',
  },

  {
    id: '♬ perc4 ♬',
    letter: 'G',
    src: 'https://www.myinstants.com/media/sounds/perc_4.mp3',
  },
  {
    id: '♬ perc5 ♬',
    letter: 'H',
    src: 'https://www.myinstants.com/media/sounds/perc_5.mp3',
  },
  {
    id: '♬ bass ♬',
    letter: 'J',
    src: 'https://www.myinstants.com/media/sounds/bass_LsD8EUY.mp3',
  },

  {
    id: '♬ kick1 ♬',
    letter: 'Z',
    src: 'https://www.myinstants.com/media/sounds/kick_1.mp3',
  },
  {
    id: '♬ kick2 ♬',
    letter: 'X',
    src: 'https://www.myinstants.com/media/sounds/kick_2.mp3',
  },
  {
    id: '♬ kick3 ♬',
    letter: 'C',
    src: 'https://www.myinstants.com/media/sounds/kick_3.mp3',
  },

  {
    id: '♬ kick4 ♬',
    letter: 'B',
    src: 'https://www.myinstants.com/media/sounds/kick_4.mp3',
  },
  {
    id: '♬ kick5 ♬',
    letter: 'N',
    src: 'https://www.myinstants.com/media/sounds/kick_5.mp3',
  },
  {
    id: '♬ kick6 ♬',
    letter: 'M',
    src: 'https://www.myinstants.com/media/sounds/kick_6.mp3',
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
    this.state = { display: '8-bit Pad' }
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
          data.map((d) =>
            React.createElement(DrumPad, {
              key: d.id,
              id: d.id,
              letter: d.letter,
              src: d.src,
              handleDisplay: this.handleDisplay,
            })
          )
        )
      )
    )
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'))
