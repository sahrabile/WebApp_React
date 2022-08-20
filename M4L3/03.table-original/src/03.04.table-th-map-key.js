import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';

class Excel04 extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            {/* ...and more terse using Array.prototype.map, map also provides the idx of the element if you want it
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
            {this.props.headers.map((title, idx) => {
              return <th key={idx}>{title}</th>;
            })}
          </tr>
        </thead>
      </table>
    );
  }
}

export default Excel04;