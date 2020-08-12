import React, { Component } from 'react';
import Shelf from '././Shelf';
import {get,getAll,update} from '../BooksAPI'

class Home extends Component{
  async componentDidMount(){
    try {
      const books = await getAll();
      console.log(books);
    }catch(error){
      console.log(error)

    }
  }
    render(){
        return (<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf title="Currently Reading Books List"/>
          <Shelf title="Want TO Read"/>
          <Shelf title="Already Read"/>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>)
    }
}

export default Home; 