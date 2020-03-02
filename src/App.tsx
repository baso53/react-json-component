import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import RecursiveProperty from './RecursiveProperty';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <RecursiveProperty property={testJson} propertyName="Root Property" excludeBottomBorder={false} rootProperty={true}/>
        </div>
      </div>
    );
  }
}

export default App;

const testJson = {
  "_id": "5bc32f3f5fbd8ad01f8265fd",
  "index": 0,
  "guid": "87cfbb5d-71fb-45a7-b268-1df181da901c",
  "isActive": true,
  "balance": "$3,583.12",
  "picture": "http://placehold.it/32x32",
  "age": 31,
  "eyeColor": "brown",
  "nullTestValue": null,
  "arrayWithNulls": [null, null, null],
  "objectWithNulls": {
     "firstNullValue": null,
     "secondNullValue": null     
  },
  "name": "Becky Vega",
  "gender": "female",
  "company": "ZOID",
  "email": "beckyvega@zoid.com",
  "phone": "+1 (957) 480-3973",
  "address": "426 Hamilton Avenue, Holtville, New Hampshire, 3431",
  "about": "Duis do occaecat commodo velit exercitation aliquip mollit ad reprehenderit non cupidatat dolore ea nulla. Adipisicing ea voluptate qui sunt non culpa labore reprehenderit qui non. Eiusmod ad do in quis cillum sint pariatur. Non laboris ullamco ea voluptate et anim qui quis id exercitation mollit ullamco dolor incididunt. Ad consequat anim velit culpa. Culpa Lorem eiusmod cupidatat dolore aute quis sint ipsum. Proident voluptate occaecat nostrud officia.\r\n",
  "registered": "2016-11-19T01:14:28 -01:00",
  "latitude": -80.66618,
  "longitude": 65.090852,
  "tags": [
    "ea",
    "officia",
    "fugiat",
    "anim",
    "consequat",
    "incididunt",
    "est"
  ],
  "friends": [
    {
      "id": 0,
      "name": "Genevieve Cooke",
      "ownFriends": {
         "1": "Rebbeca",
         "2": "Julia",
         "3": "Chopper only"
      },
    },
    {
      "id": 1,
      "name": "Eaton Buck"
    },
    {
      "id": 2,
      "name": "Darla Cash"
    }
  ],
  "greeting": "Hello, Becky Vega! You have 8 unread messages.",
  "favoriteFruit": "strawberry"
};
