import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';

class Excel02 extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>

            {/*This is a more compact version of previous, iterating over the array using Array.prototype.map */}
            {this.props.headers.map((title) => {
              return <th>{title}</th>;
            })}
          </tr>
        </thead>
      </table>
    );
  }
}
export default Excel02;