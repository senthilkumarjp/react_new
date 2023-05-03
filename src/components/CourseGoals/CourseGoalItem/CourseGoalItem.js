import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  // function edit(){
  //  props.ed(props.da)
  // }
  return (
    <li className="goal-item" >
      {props.children}
      <button className='btn' onClick={deleteHandler}>Delete</button>
      {/* <button className='btn' onClick={edit}>Edit</button> */}
    </li>
  );
};

export default CourseGoalItem;
