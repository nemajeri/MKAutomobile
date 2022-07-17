import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import AsyncSelect from 'react-select/async'
import './Search.css'



class Search extends Component {
  state = {
    inputValue: '',
    selectedValue: null
  }    

  render() {
    const getData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.data);
    };
    
    const loadOptions = (inputValue) => {
      return getData(inputValue).then((res) => {
        return res
          .filter((r) => r.name.toLowerCase().startsWith(inputValue))
          .map((t) => ({ value: t.id, label: t.name }));
      });
    };  

  return (
    <div>
<AsyncSelect
  className='select-search'
  loadOptions={loadOptions}
/>
    </div>
  );
}
}

export default Search;