import React, {useState , Component } from 'react';
import { render } from 'react-dom';
import Item from "./components/Item";
import UserItem from "./components/UserItem";
import useList from "./hooks/useList";
import './css/style.css';


  const initList = [
  { name: "tomato", calorie: 20 },
  { name: "rice", calorie: 340 },
  { name: "candys", calorie: 10 }, { name: "ricee", calorie: 80 },
  { name: "candy", calorie: 170 }
];


function App(){
    // const [list, setList ] = useState(initList);
    const item = useList(initList)
    const [editable, setEditable ] = useState(false);
    
    
 function removeItemHandle(){
    // console.dir(e.target.name);
    // let filteredList = list.filter(v => v.calorie < 50 );
    item.removeByFilter();
    // setList(filteredList);
};

function removeThisItemHandle(e){
console.dir(e.target);
item.removeItem(e.target.name);
//  let  filteredList = list.filter(v => v.name !== e.target.name );
//  setList(filteredList);
};

function editableThisItemHandle(){
 setEditable(true);
}

function keyPressHandler(e,i){
if(e.key === 'Enter'){
  item.addItem( e.target.value, i)
//   let copylist = [...list]
// copylist[i].name = e.target.value                                      
setEditable(!editable);
}
}

    return (
      <div>
        <Item />
        {item.list.map((k,i)=>{ return <UserItem key={i} user={k} 
                                        onClick={removeThisItemHandle}
                                        editable={editable}
                                       onDoubleClick={editableThisItemHandle}
                                       onKeyPress={keyPressHandler}  
                                       index={i}/>})}
        <button onClick={removeItemHandle}  >adf </button>
        <p>
          Start editing to see some magic happen  :)
        </p>
      </div>
    );
  
}

render(<App />, document.getElementById('root'));
