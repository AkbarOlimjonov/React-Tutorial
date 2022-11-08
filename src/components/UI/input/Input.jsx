import React from "react";
import classes from './Input.module.css'

const Input = function ({children,...props}) {
  return (
    <div>
        <input type="text" {...props} className={classes.myInput} />
    </div>
  );
}

export default Input;