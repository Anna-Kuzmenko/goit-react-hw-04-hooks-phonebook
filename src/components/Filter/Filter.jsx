import React from 'react';

import { FilterInput, FilterLabel } from './Filter.styled';

function Filter({ filterValue, onChangeFilter }) {
  return (
    <div>
      <FilterLabel>
        {' '}
        Find contacts by name
        <FilterInput
          type="text"
          value={filterValue}
          onChange={onChangeFilter}
        />
      </FilterLabel>
    </div>
  );
}

export default Filter;
