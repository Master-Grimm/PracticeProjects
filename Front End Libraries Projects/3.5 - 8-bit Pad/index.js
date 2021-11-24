const data = [
  { id: '♬ org1 ♬', letter: '1', src: 'https://www.myinstants.com/media/sounds/organ_1.mp3' },
  { id: '♬ org2 ♬', letter: '2', src: 'https://www.myinstants.com/media/sounds/organ_2.mp3' },
  { id: '♬ org3 ♬', letter: '3', src: 'https://www.myinstants.com/media/sounds/organ_3.mp3' },

  { id: '♬ org4 ♬', letter: '5', src: 'https://www.myinstants.com/media/sounds/organ_4.mp3' },
  { id: '♬ vox1 ♬', letter: '6', src: 'https://www.myinstants.com/media/sounds/vox_1.mp3' },
  { id: '♬ vox2 ♬', letter: '7', src: 'https://www.myinstants.com/media/sounds/vox_2.mp3' },  
  
  { id: '♬ tom1 ♬', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/tom_1.mp3' },  
  { id: '♬ tom2 ♬', letter: 'W', src: 'https://www.myinstants.com/media/sounds/tom_2.mp3' },
  { id: '♬ tom3 ♬', letter: 'E', src: 'https://www.myinstants.com/media/sounds/tom_3.mp3' },
  
  { id: '♬ tom4 ♬', letter: 'T', src: 'https://www.myinstants.com/media/sounds/tom_4.mp3' },
  { id: '♬ vox3 ♬', letter: 'Y', src: 'https://www.myinstants.com/media/sounds/vox_3.mp3' },
  { id: '♬ vox4 ♬', letter: 'U', src: 'https://www.myinstants.com/media/sounds/vox_4.mp3' },  

  { id: '♬ perc1 ♬', letter: 'A', src: 'https://www.myinstants.com/media/sounds/perc_1.mp3' },
  { id: '♬ perc2 ♬', letter: 'S', src: 'https://www.myinstants.com/media/sounds/perc_2.mp3' },  
  { id: '♬ perc3 ♬', letter: 'D', src: 'https://www.myinstants.com/media/sounds/perc_3.mp3' },  

  { id: '♬ perc4 ♬', letter: 'G', src: 'https://www.myinstants.com/media/sounds/perc_4.mp3' },  
  { id: '♬ perc5 ♬', letter: 'H', src: 'https://www.myinstants.com/media/sounds/perc_5.mp3' },
  { id: '♬ bass ♬', letter: 'J', src: 'https://www.myinstants.com/media/sounds/bass_LsD8EUY.mp3' },  
  
  { id: '♬ kick1 ♬', letter: 'Z', src: 'https://www.myinstants.com/media/sounds/kick_1.mp3' },
  { id: '♬ kick2 ♬', letter: 'X', src: 'https://www.myinstants.com/media/sounds/kick_2.mp3' },
  { id: '♬ kick3 ♬', letter: 'C', src: 'https://www.myinstants.com/media/sounds/kick_3.mp3' }, 
 
  { id: '♬ kick4 ♬', letter: 'B', src: 'https://www.myinstants.com/media/sounds/kick_4.mp3' },
  { id: '♬ kick5 ♬', letter: 'N', src: 'https://www.myinstants.com/media/sounds/kick_5.mp3' },
  { id: '♬ kick6 ♬', letter: 'M', src: 'https://www.myinstants.com/media/sounds/kick_6.mp3' }  
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
    this.state = {display: '8-bit Pad'}
  }
  
  handleDisplay = display => this.setState({ display })
  
  render(){
    return(
      <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
          <div id='aligner'>
            <div id='drum-pads'>{data.map(d => (
              <DrumPad
                key={d.id}
                id={d.id}
                letter={d.letter}
                src={d.src}
                handleDisplay={this.handleDisplay}
              /> ) ) }
            </div> 
          </div>
        </div>  ) }
}

ReactDOM.render(<App/>,document.getElementById("app"))