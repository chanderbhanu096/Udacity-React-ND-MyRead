import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// import Shelf from './utils/Shelf';
import Search from "./utils/Search";
import Home from "./utils/Home";

class BooksApp extends React.Component {
  // state = {
  //   books: [],
  //   searched: [],
  //   query: "",
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   // showSearchPage: false
  // };
  // componentDidMount = () => {
  //   BooksAPI.getAll().then((books) => {
  //     this.setState({
  //       books: books,
  //     });
  //   });
  // };

  // updateBook = (b, shelve) => {
  //   //update book on server
  //   BooksAPI.update(b, shelve).then((res) => {
  //     //shelf for updated book
  //     b.shelf = shelve;
  //     //update component state
  //     this.setState((currentState) => ({
  //       books: currentState.books.filter((book) => book.id !== b.id) + b,
  //     }));
  //   });
  // };

  render() {
    const books = this.state;
    return (
      <div className="app">
        {/* {this.state.showSearchPage ? ( */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Search" component={Search} />
        </Switch>
        <Search />
      </div>
    );
  }
}

export default BooksApp;
