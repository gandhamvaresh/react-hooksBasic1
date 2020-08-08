import React, { useEffect, useRef } from "react";

function forms2(){
  const nameRef = useRef();
  const ageRef = useRef();
  const matRef = useRef();
  const submitRef = useRef();

useEffect(()=>{
  console.log('d');
  nameRef.current.focus()
},[])

function keyPressHandle(e){
if(e.keyCode ===13){
    if(e.target.id === 'nameInput'){
        ageRef.current.focus();
    }
     if(e.target.id === 'ageInput'){
      matRef.current.focus();
    }
    if(e.target.id === 'matInput'){
      submitRef.current.focus();
    }

}
}

function submitHandle(){
  alert('submitted');
}


  return(<div>
  <span>Name:</span>
  <input type='text' id='nameInput' ref={nameRef} className='form-field'    onKeyDown={keyPressHandle} />
   <span>age:</span>
  <input type='text' id='ageInput' ref={ageRef} className='form-field'   onKeyDown={keyPressHandle} />
   <span>Married :</span>
  <input type='checkbox' id='matInput' ref={matRef} className='form-field'  onKeyDown={keyPressHandle}/>
  <button ref={submitRef}   onKeyDown={keyPressHandle} onClick={submitHandle}>submit</button>
   </div>) 

}

export default forms2;
