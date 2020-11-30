import React, {Component} from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const Tablebody = () => {
  return <tbody />
}

class Table extends Component {
  render() {
    const {characterData} = this.props
    return (
      <table>
        <TableHeader />
        <Tablebody characterData={characterData}/>
      </table>
    )
  }
}

export default Table
