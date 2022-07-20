import React from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';

var url = 'http://finity.pro/clients/mkautomobile/search';

const Search = () => {

  const loadOptions = (inputValue, callback) => {
    axios.get(url)
      .then((response) => {
        const options = []
        response.data.forEach(() => {
            options.push({
            label: response.data.make,
            value: response.data.make
          })
        })
        callback(options);
      })
  }
  return ( 
    <AsyncSelect 
      cacheOptions 
      loadOptions={loadOptions}
    />
  )
}

export default Search