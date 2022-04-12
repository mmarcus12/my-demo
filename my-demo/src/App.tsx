import React from 'react';
import { JsxEmit } from 'typescript';
import './App.css';

type PropType = {
  item?: string
  itemList?: string[]
}

function App() {
  return (
    <div className="App">
      <HeaderComponent item="test"></HeaderComponent>
      <hr />
      <Navigation itemList = {['item1', 'item2', 'item3']} />
    </div>
  );
}

type HeadingType = {
  heading:string
}

const HeaderComponent: React.FC<PropType> = ({item}):JSX.Element => {
  return (
    <> <h1>{item}</h1> </>
  )
}

type User = {
  uid: string |undefined;
}

const Navigation: React.FC<PropType> = ({itemList}) = ():JSX.Element => {
  return (
    <div>
      <ul>
        {itemList?.mmap(item => {})}
      </ul>
    </div>
  )
}

const NavListItem: React.FC<PropType> = ({item}): JSX.Element => {
  return (
    <li>{item}</li>
  )
}

export default App;
