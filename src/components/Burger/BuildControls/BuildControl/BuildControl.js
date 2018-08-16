import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) =>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button onClick={props.removed} disabled={props.disabled}>-</button>
        <button onClick={props.added}>+</button>
    </div>
);

export default buildControl;