# Description

React component that allows you to render JSON documents or serializable JavaScript objects written with TypeScript.

Read a blog post about it below:
[Recursive rendering in React: Building a universal JSON renderer](https://dev.to/baso53/recursive-rendering-in-react-building-a-universal-json-renderer-f59)

# Usage
- run `npm install react-json-component` in your React project
- `import ReactJsonRenderer from 'react-json-component'` in your app

NOTE: Currently only supports ES6 modules

# Example
```tsx
import * as React from 'react';
import RecursiveProperty from 'react-json-component';

const testJson = {
  "_id": "5bc32f3f5fbd8ad01f8265fd",
  "objectWithNulls": {
     "firstNullValue": null,
     "secondNullValue": null     
  },
  "longitude": 65.090852,
  "tags": [
    "ea",
    "officia",
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
    }
  ]
};

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <RecursiveProperty property={testJson} propertyName="Root Property" excludeBottomBorder={false} rootProperty={true}/>
      </div>
    );
  }
}
```

# Props
```tsx
<RecursiveProperty
    property={json} // your JSON document
    propertyName="root" // root dropdown menu label
    excludeBottomBorder={true} // to include or exclude bottom border on the last entry in the list, default: false
    emptyPropertyLabel="Property is empty" // text to display for null or undefined values
    rootProperty={true} // to signify that this is the root of the document, from a user perspective always needs to be true
    propertyNameProcessor={(name) => name + ": "} // function that processes property names, default: processes from camelCase to normal text
/>
```



# Development
- `git clone` or download this repository
- run `npm install` in repository
- run `npm start` to start the development server
