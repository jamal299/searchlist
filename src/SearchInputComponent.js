import React from 'react';

const SearchInputComponent = (props) => (
 <div>
   <input type="text" onChange={(e)=> props.textSearchHandler(e)} />
   <input type="button" onClick={props.searchAction} value="Search"/>
 </div>);

export default SearchInputComponent;
