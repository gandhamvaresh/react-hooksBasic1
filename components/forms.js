import React, {useState} from 'react';

function controlledForms(){
  const [name, setName] = useState('');
  const [rate, setRate] = useState('');

function nameChange(e){
setName(e.target.value);
}

function rateChange(e){
setRate(e.target.value);
}

function onSubmitHandle(){
  console.log('values', name , rate)
}

return(<div>
<form onSubmit={onSubmitHandle}>
<span> Name:</span><input type='text' value={name} onChange={nameChange} /> 
<span> Rate:</span><select value={rate} onChange={rateChange}>
      <option value='high'>High</option>
      <option value='mid'>Mid</option>
      <option value='low'>Low</option>
      </select>
  <input type='submit' value='submit' />     
</form>
</div>)

}

export default controlledForms;