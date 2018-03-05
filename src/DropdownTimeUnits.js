import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// import { timeUnitOptions } from '../common'
const timeUnitOptions = [
  {
    text: 'days',
    value: 'days',
  },
  {
    text: 'weeks',
    value: 'weeks',
  },
  {
    text: 'months',
    value: 'months',
  },
  {
    text: 'years',
    value: 'years',
  },
];


const DropdownTimeUnits = () => (
  <Dropdown
    // TODO: Get `defaultValue` from {this.state}, and update this.state when a dropdown option is selected.
    defaultValue='days'
    fluid
    selection
    options={timeUnitOptions}
  />
);

export default DropdownTimeUnits;
