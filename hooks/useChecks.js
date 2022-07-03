import {useState} from 'react';
const useCheckbox = (initialState = []) => {

    const [ values, setValues ] = useState(initialState);
  
    const reset = () => {
      setValues( initialState );
    }
    const handleChecks = (e) => {
      // Destructuring
      const { value, checked } = e.target;
      console.log(`${value} is ${checked}`);
      // Case 1 : The user checks the box
      if (checked) {
        setValues([...values, value]);
      }
    
      // Case 2  : The user unchecks the box
      else {
        setValues(values.filter((e) => e !== value));
      }
    };
  
  
    return [  values, handleChecks, reset  ];
  }

export default useCheckbox;