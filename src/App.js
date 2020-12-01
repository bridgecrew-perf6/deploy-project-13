import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
  state = {
    characters: [],
  }
  //filter array based on an index passed through, and return the new array
  removeCharacter = (index) => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <Table 
          characterData={characters} 
          removeCharacter={this.removeCharacter} 
        />
      </div>
    )
  }
}

export default App