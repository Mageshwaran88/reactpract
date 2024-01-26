import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ToDoList.css";

export const ToDoList = () => {
  let myid = uuidv4();
  const [todoinput, settodoinput] = useState("");
  const [todoarray, settodoarray] = useState([
    {
      id: 1,
      task: "Magesh",
    },
    {
      id: 2,
      task: "waran",
    },
  ]);

  const handleinput = (e) => {
    settodoinput(e.target.value);
  };

  const handleadd = () => {
    console.log(myid);
    settodoarray([...todoarray, { id: myid, task: todoinput }]);
  };

  const handleupdate = (index) => {
    // console.log(index);
    const changetext = prompt("edit the text", todoarray[index].task);

    const copied = [...todoarray];
    copied[index].task = changetext;
    settodoarray(copied);
  };
  const handledelete =(id)=>{
    const filterdata = todoarray.filter(da => da.id != id)
    settodoarray(filterdata)
  }



  return (
    <div>
      <div className="mypage">
        <div className="container">
          <h1 className="myhead">ToDoList</h1>
          <input onChange={handleinput} type="text" />
          <button onClick={handleadd} className="addbtn">Add</button>
          <div>
            {todoarray.map((da, i) => (
              <div key={i} className="mybuttons">
                <h2>{da.task}</h2>
                <button onClick={() => handleupdate(i)} className="mybtn">edit</button>
                <button onClick={()=>handledelete(da.id)} className="mybtn">delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
