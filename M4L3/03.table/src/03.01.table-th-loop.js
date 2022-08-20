import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';

class Excel01 extends React.Component {
  render() {

    //I use normal js to prepare for the JSX generation in the return
    const tmp_headers = [];
    for (const title of this.props.headers) {

      //Fill the array header with JSX element <th>
      //note the {title} - I can in JSX put any js expression (calculation, variable oor function return) within {}
      tmp_headers.push(<th>{title /* title is a js expression */}</th>);
    }

    //tmp_headers is and array JSX elements expanded in the <tr> element
    console.log(tmp_headers);
    return (
      <table>
        <thead>
          <tr>{tmp_headers}</tr>
        </thead>
      </table>
    );
  }
}

export default Excel01;