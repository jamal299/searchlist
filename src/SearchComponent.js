import React, {Component} from 'react';
import SearchInputComponent from './SearchInputComponent';
import ListComponent from './ListComponent';
import dummyValues from './dummy.json';

class SearchComponent extends Component {
 constructor(props){
  super(props);
  this.state={listValues : dummyValues, searchTerm: ''}
  this.searchAction = this.searchAction.bind(this);
  console.log(dummyValues);
 }
 textSearchHandler({target:val}) {
  this.setState({searchTerm: val.value})
 }
 searchAction(){
  console.log('key pressed', this.state.searchTerm)
  const searchResult =  dummyValues.filter(val => 
   val._id.includes(this.state.searchTerm) ||
   val.name.includes(this.state.searchTerm) ||
   val.gender.includes(this.state.searchTerm)
   )
   this.setState({listValues: searchResult});
 }
 render(){
 const { listValues } = this.state;
 return (
  <span>
    <SearchInputComponent textSearchHandler={(e) => this.textSearchHandler(e)} searchAction={this.searchAction}/>
    <ListComponent listValues= {listValues}/>
  </span>
);
 }
}
export default SearchComponent;
