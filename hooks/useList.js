import {useState} from 'react';

function useList(init){
  const [list, setList] = useState(init);
  return({
    list,
    removeItem(item){
      console.log(item)
       let  filteredList = list.filter(v => v.name !== item );
       setList(filteredList);
    },
    addItem(newValue,index){
        let copylist = [...list]
        copylist[index].name = newValue  
    },
    removeByFilter(){
       let filteredList = list.filter(v => v.calorie < 50 );
       setList(filteredList)
    }
  });
}

export default useList;