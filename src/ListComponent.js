import React from 'react';

const ListComponent = (props) => (
 props.listValues.length !==0 ?
 <table>
  <tr>
  <th> ID</th> 
  <th>Name</th> 
  <th>Gender</th> 
  </tr>
  {
  props.listValues.map(val =>
  <tr key={val._id}> 
   <td>{val._id}</td>
   <td>{val.name}</td>
   <td>{val.gender}</td>
  </tr> 
  )
  }
 </table> : 'Sorry No matches found !!'
);

export default ListComponent;


