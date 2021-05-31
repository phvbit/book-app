import { Button, Space, Table } from 'antd'
import React from 'react'

class BookList extends React.Component {
  columns = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Title',
      dataIndex: 'title'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record, index) => {
        return (
          <Space>
            <Button type='primary' onClick={this.props.handleUpdateBook(record.key)} >Edit</Button>
            <Button type='danger' onClick={this.props.handleDeleteBook(record.key)} >Delete</Button>
          </Space>
        )
      }
    },
  ]

  render() {
    const dataSource = this.props.ids.map((id) => (
      {
        key: id,
        id: id,
        name: this.props.entities[id].name,
        title: this.props.entities[id].title,
      }
    ))
    return (
      <div className="book-list">
        <Button type='primary' onClick={this.props.handleAddBook} >Add Book</Button>
        <Table dataSource={dataSource} columns={this.columns} />
      </div>
    )
  }
}
export default BookList