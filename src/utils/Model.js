import React, { Component } from 'react';

export const MyContext = React.createElement{
    constructor(){
        super();
        this.state = {
            books: [],
            currentlyReading: [],
            wanttoread:[],
            read: [],
        }
    }

    render(){
        return(
            <MyContext.Provider value={this.props.state}>
            {this.props.children}
            </MyContext.Provider>            )
    }
}  