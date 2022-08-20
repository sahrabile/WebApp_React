import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';

class Excel03 extends React.Component {
  render() {

    //React wants you to provide a unique identifier for the array elements 
    //so it can update them more efficiently later on. Let's provde the unique key
    //note the for..in iteration over an array which gives the index of the element
    const headers = [];
    for (const idx in this.props.headers) {
      const title = this.props.headers[idx];
      headers.push(<th key={idx}>{title}</th>);
    }
    return (
      <table>
        <thead>
          <tr>{headers}</tr>
        </thead>
      </table>
    );
  }
}
export default Excel03;