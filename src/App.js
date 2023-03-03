import {useState} from "react";
import "./App.css";
// import { BsPencilSquare } from "react-icons/bs";
// import { RiDeleteBin6Fill } from "react-icons/ri";




function App() {

  const[apple, setApple] = useState([
    ["Maths", "Learn basic concepts about Maths"],
    ["CSS", "Learn basic concepts about CSS"],
    ["React", "Learn basic concepts about React"],
    ["JavaScript", "Learn basic concepts about JavaScript"],
    ["Python", "Learn basic concepts about Python"]
    
   ])

  return (        
        
    <div className="App">
      <div className="to">Todo List</div>
      <button className="btn">Create Task</button>

      <div className="white_body">
        <h3 className="tasks">All Tasks</h3>

        <div className="flex_container">
        
          {
            apple.map((head)=>{
              return(
                <div className="cards">
                 <button className="btn_1">{head[0]}</button>
                <p>{head[1]}</p>
                {/* <BsPencilSquare className="icon"/><RiDeleteBin6Fill className="icon"/> */}
              </div> 
              )

            })
          }
          

        </div>

      </div>
    </div>
    
    );
}

export default App;










{/* <div className="cards">
  <button className="btn_1">React</button>
  <p>Learn basic concepts about React</p>
  <BsPencilSquare/>
</div>

<div className="cards">
  <button className="btn_1">JavaScript</button>
  <p>Learn basic concepts about JavaScript</p>
</div> */}

{/* <div className="cards">
  <button className="btn_1">HTML</button>
  <p>Learn basic concepts about HTML</p>
</div> */}


// let ball = [
  //   {
  //     name:'Maths', 
  //     sub: 'Learn basic concepts about Maths'
  //   },
  //   {
  //     name:'CSS',
  //     sub: 'Learn basic concepts about CSS'
  //   }
  
  // ]



