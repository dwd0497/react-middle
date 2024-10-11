import React, {useCallback} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={increment}>increment</button>
        </div>
    );
};
