import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './03.table.css';
import Excel01 from './03.01.table-th-loop';
import Excel02 from './03.02.table-th-map';
import Excel03 from './03.03.table-th-loop-key';
import Excel04 from './03.04.table-th-map-key';
import Excel05 from './03.05.table-th-td';
import Excel06 from './03.06.table-th-td-prop-types';
import Excel07 from './03.07.table-sort';
import Excel08 from './03.08.table-sortby';
import Excel09 from './03.09.table-editable';
import Excel10 from './03.10.table-search';
import Excel11 from './03.11.table-replay';
import Excel12 from './03.12.table-replay-clean';
import Excel14 from './03.14.table-fetch';

const top_level_headers = ['Book', 'Author', 'Language', 'Published', 'Sales'];

//used from Excel05 onwards
const data = [
  [
    'A Tale of Two Cities',
    'Charles Dickens',
    'English',
    '1859',
    '200 million',
  ],
  [
    'Le Petit Prince (The Little Prince)',
    'Antoine de Saint-Exupéry',
    'French',
    '1943',
    '150 million',
  ],
  [
    "Harry Potter and the Philosopher's Stone",
    'J. K. Rowling',
    'English',
    '1997',
    '120 million',
  ],
  [
    'And Then There Were None',
    'Agatha Christie',
    'English',
    '1939',
    '100 million',
  ],
  [
    'Dream of the Red Chamber',
    'Cao Xueqin',
    'Chinese',
    '1791',
    '100 million',
  ],
  ['The Hobbit', 'J. R. R. Tolkien', 'English', '1937', '100 million'],
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Excel01 headers={top_level_headers} />
    <Excel02 headers={top_level_headers} />
    <Excel03 headers={top_level_headers} />
    <Excel04 headers={top_level_headers} />
    <Excel05 headers={top_level_headers} initialData={data}/>
    <Excel06 headers={top_level_headers} initialData={data}/>
    <Excel07 headers={top_level_headers} initialData={data}/>
    <Excel08 headers={top_level_headers} initialData={data}/>
    <Excel09 headers={top_level_headers} initialData={data}/>
    <Excel10 headers={top_level_headers} initialData={data}/>
    <Excel11 headers={top_level_headers} initialData={data}/>
    <Excel12 headers={top_level_headers} initialData={data}/>
    <Excel14 headers={top_level_headers} initialData={data}/>
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
