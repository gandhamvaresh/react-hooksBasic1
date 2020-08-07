import React from 'react';


function UserItem(props){
return(<div className='item-style'>
        {props.editable? <input defaultValue={props.user.name} onKeyPress={e=>props.onKeyPress(e,props.index)}/> :
           <h3 onDoubleClick={props.onDoubleClick}> {props.user.name}</h3> }
        
          <h3>{props.user.calorie}</h3>
           <button name={props.user.name} 
                    onClick={props.onClick} >remove this </button>
  
 </div>)
}

export default UserItem;