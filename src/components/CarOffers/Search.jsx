import React from "react";
import SelectSearch from 'react-select-search';
import "./Search.css";

const Search = (props) => (

  <div>
  <SelectSearch
      className="select-search"
      options={[]}
      defaultValue="15997"
      getOptions={(query) => {
          return new Promise((resolve, reject) => {
              fetch(
                  `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
              )
                  .then((response) => response.json())
                  .then(({ drinks }) => {
                      resolve(
                          drinks.map(({ idDrink, strDrink }) => ({
                              value: idDrink,
                              name: strDrink,
                          })),
                      );
                  })
                  .catch(reject);
          });
      }}
      search
      placeholder="Suche..."
  />
  </div>
)

export default Search