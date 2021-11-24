const data = [
  { id: '♬ Perc 1 ♬', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/perc1.mp3' },
  { id: '♬ Perc 2 ♬', letter: 'W', src: 'https://www.myinstants.com/media/sounds/perc2.mp3' },
  { id: '♬ Perc 3 ♬', letter: 'E', src: 'https://www.myinstants.com/media/sounds/perc3.mp3' },
  { id: '♬ Kick 1 ♬', letter: 'A', src: 'https://www.myinstants.com/media/sounds/1_IebVFVY.mp3' },
  { id: '♬ Kick 2 ♬', letter: 'S', src: 'https://www.myinstants.com/media/sounds/kick2.mp3' },
  { id: '♬ Kick 3 ♬', letter: 'D', src: 'https://www.myinstants.com/media/sounds/kick3.mp3' },
  { id: '♬ Snare 1 ♬', letter: 'Z', src: 'https://www.myinstants.com/media/sounds/snare1.mp3' },
  { id: '♬ Snare 2 ♬', letter: 'X', src: 'https://www.myinstants.com/media/sounds/snare2.mp3' },
  { id: '♬ Snare 3 ♬', letter: 'C', src: 'https://www.myinstants.com/media/sounds/snare3.mp3' }
]

class DrumPad extends React.Component {
 
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
  }
    
  handleKeydown = i => {
    if(i.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)        }
  }
 
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  
  render() {
    return (
      <div className='drum-pad' id={this.props.id} onClick={this.handleClick}>
        <h2>{this.props.letter}</h2>
        <audio id={this.props.letter} className='clip' src={this.props.src}
                ref={ref => this.audio = ref}></audio>
      </div> ) }  
  }

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {display: 'Drum Machine'}
  }
  
  handleDisplay = display => this.setState({ display })
  
  render(){
    return(
      <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
          <div id='aligner'>
            <div id='drum-pads'>{data.map(i => (
              <DrumPad
                key={i.id}
                id={i.id}
                letter={i.letter}
                src={i.src}
                handleDisplay={this.handleDisplay}
              /> ) ) }
            </div> 
          </div>
        </div>  ) }
}

ReactDOM.render(<App/>,document.getElementById("app"))