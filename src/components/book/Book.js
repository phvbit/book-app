import React from 'react'
import BookConfig from './bookConfig/BookConfig'
import BookList from './bookList/BookList'
import './Book.css'

class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entities: {
        '1': {
          id: '1',
          name: 'Book 1',
          title: 'Outliers'
        }
      },
      ids: ['1'],
      newBook: {name: '', title: ''},
      onAddBook: true,
      currentId: '1'
    }

  }
  handleChange = (event) => {
    const {name, value} = event.target
    if (name === 'name') {
      this.setState((state) => ({
        newBook: {name: value, title: state.newBook.title}
      }))
    }
    else if (name === 'title') {
      this.setState( (state) => ({
        newBook: {name: state.newBook.name, title: value}
      }))
    }
  }
  onAddAsync = () => {
    const lastId = (Number(this.state.ids[this.state.ids.length -1]) || 0 )
    const newId = (lastId + 1).toString()
    this.setState({
      ids: [...this.state.ids, newId],
      entities: {...this.state.entities,
        [newId]: {
          id: newId,
          name: this.state.newBook.name,
          title: this.state.newBook.title
        }
      }
    })
  }
  onUpdateAsync = () => {
    this.setState({
      onAddBook: false,
      entities: {
        ...this.state.entities,
        [this.state.currentId]: {
          id: this.state.currentId,
          name: this.state.newBook.name,
          title: this.state.newBook.title
        }
      }
    
    })
  }
  handleAddBook = () => {
    this.setState({
      newBook: {name: '', title: ''},
      onAddBook: true
    })
  }
  handleUpdateBook = (id) => {
    return (e) => {

      this.setState({
        newBook: {
          name: this.state.entities[id].name,
          title: this.state.entities[id].title},
        onAddBook: false,
        currentId: id
      })

    }
  }
  handleDeleteBook = (id) => {
    return (e) => {

    const newIds = this.state.ids.filter (element => element !== id)
      const copyEntities = {...this.state.entities}
      delete copyEntities[id]
      
      this.setState({
        ids: newIds,
        entities: copyEntities
      })
    }
  }


  render() {
    return (
      <div className='book'>
        <h3>Book List</h3>
        <div className="d-flex">
        <BookList
          handleAddBook={this.handleAddBook}
          ids={this.state.ids}
          entities={this.state.entities}
          handleUpdateBook={this.handleUpdateBook}
          handleDeleteBook={this.handleDeleteBook}
        />
        <BookConfig
          onAddBook={this.state.onAddBook}
          handleChange={this.handleChange}
          onAddAsync={this.onAddAsync}
          onUpdateAsync={this.onUpdateAsync}
          name={this.state.newBook.name}
          title={this.state.newBook.title}
        />
        </div>
        
      </div>
    )
  }
}
export default Book