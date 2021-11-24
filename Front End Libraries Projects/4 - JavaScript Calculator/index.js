const num = [7,8,9,4,5,6,1,2,3,0];
const ops =  ['/','*','-','+'];     

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
  '+': 'add'
}

class App extends React.Component {

state = {
  lastClicked: undefined,
  calc: '0',
  operation: undefined
}
  
  handleClick = (e) => {
    const { calc, lastClicked } = this.state;
    const { innerText } = e.target;
    
    switch(innerText) {
      case 'AC': {
        this.setState({
          calc: '0',
        });
        break;
      }
      
      case 'CE': {
        this.setState({
          calc: calc.slice(0, calc.length - 1),
        });
        break;
      }           
        
      case '=': {
        const evaluated = Math.round(1000000000000 * eval(calc)) / 1000000000000
        this.setState({
          calc: evaluated
        });
        break;
      }
      
      case '.': {
        const splitted = calc.split(/[\+\-\*\/]/);
        const last = splitted.slice(-1)[0];
        
        if(!last.includes('.')) {
          this.setState({
            calc: calc+'.'
          })
        }
        
        break;
      }  
        
      default: {
        let e;
        if(ops.includes(innerText)) {
          if(ops.includes(lastClicked) && innerText !== '-') {
            const lastNumberIdx = calc.split('').reverse()
                .findIndex(char => char !== ' ' && num.includes(+char)); 
            e = calc.slice(0, calc.length - lastNumberIdx) + ` ${innerText} `;          
          } else {
              e = `${calc} ${innerText} `;
            }
          } else {
          e = (calc === '0') ? innerText : (calc+innerText);
        }
        
        this.setState({
          calc:e
        });
        
      }
   } // switch end
 
    this.setState({
      lastClicked: innerText
    })    
    
} // handleclick end
    
  render () {
    const { calc, lastClicked} = this.state;
    
    return (
  <div className='calculator'>
  <p style={{position: 'absolute', opacity: 0, top: 0}}>{JSON.stringify(this.state,null,2)}</p> 
        <div id='display' className='display'>{calc}</div> 
      <div className='nums-container'>
        <button className='AC' id = 'clear' onClick={this.handleClick}>AC</button>
        <button className='CE' onClick={this.handleClick}>CE</button>
        
        {num.map(num => (
        <button onClick={this.handleClick} key={num} id={ids[num]}>{num}</button>))}
        
        <button className='ops' id='decimal' onClick={this.handleClick}>.</button>        
      </div>          
    
      <div className='ops-container'>{ops.map(op => (
        <button className='ops' onClick={this.handleClick} key={op} id={ids[op]}>{op}</button>))}
        <button className='equal' id = 'equals' onClick={this.handleClick}>=</button>
      </div>
  </div>
  );
  } 
} // app end

ReactDOM.render(<App />, document.getElementById('app'));