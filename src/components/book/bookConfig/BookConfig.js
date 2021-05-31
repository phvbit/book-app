import { Button, Input } from 'antd'
import React from 'react'

class BookConfig extends React.Component {

  render() {
    return (
      <div className="book__modify">
        <h4>{this.props.onAddBook ? 'Add Book' : 'Update Book'}</h4>
        <Input onChange={this.props.handleChange} type="text" name="name" placeholder="Name" value={this.props.name} /><br />
        <Input onChange={this.props.handleChange} type="text" name="title" placeholder="Title" value={this.props.title} /><br />
        <Button type='primary' onClick={this.props.onAddBook ? this.props.onAddAsync : this.props.onUpdateAsync}>{this.props.onAddBook ? 'Add Async' : 'Update Async'}</Button>
      </div>
    )
  }
}

export default BookConfig