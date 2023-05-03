// import { useState } from "react";
// import "./App1.css";
// function App1() {

//     let data=[
//         {
//             id:1,
//             name:'sam',
//             age:8,
//         },
//         {
//             id:2,
//             name:'peter',
//             age:10,
//         },{
//             id:3,
//             name:'ram',
//             age:20,
//         },

//     ]

//     const [datas, setdatas] = useState(data);

//     function del(id){
//         setdatas(prevGoals => {
//       const updatedGoals = prevGoals.filter(goal => goal.id !== id);
//       return updatedGoals;
//         })
//     //     var index  = data.map((e)=>{
//     //         return e.id;
//     //     }).indexOf(id);
//     //   data.splice(index,1);       
//      }
    
//   return (
//     <div>
//       <h1>welcome to react crud</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>

//             {datas.length > 0  ?  datas.map((d)=>{
//          return <tr>
//             {/* <td>{ d.id}</td> */}
//            <td>{d.name}</td> 
//            <td>{d.age}</td>
//            <td><button type="submit" onClick={() =>del(d.id)}>delete</button>&nbsp;
//            <button onClick={(()=> alert(d.id))}>edit</button>
//            </td>
//            </tr>
//         }) :(<h1>No Datas Found</h1>)
          
//     }
    
    
//         </tbody>
        
//       </table>
 
//       <button style={{width:'100%', height:'40px'}}>Create</button>     
//     </div>
//   );
// }

// export default App1;


import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Create from './components1/Create'
import Read from './components1/Read'
import Update from './components1/update'

function App1() {
 
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path='/' element={ <Create></Create>}></Route>
      <Route path='/read' element={<Read></Read>}></Route>
      <Route path='/update' element={<Update ></Update>}></Route>
    </Routes>
    </HashRouter>
   
    </>
  )
}

   export default App1