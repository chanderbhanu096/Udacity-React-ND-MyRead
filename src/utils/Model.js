import React, { Component } from 'react';

export const MyContext = React.createContext();

class Model extends Component{
    constructor(){
        super();
        this.state = {
            books: [],
            currentlyReading: [],
            wanttoread:[],
            read: []
        }
    }

    render(){
        return (
            <MyContext.Provider value={{...this.state}}>
            {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default Model;