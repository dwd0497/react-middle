import React, {Suspense} from 'react';
import "../../styles/index.scss"
import {Link, Route, Switch} from "react-router-dom";
import {AboutPageAsync} from "../../pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../../pages/MainPage/AboutPage.async";
import {useTheme} from "../../theme/useTheme";
import {classNames} from "../../helpers/classNames";




export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to='/'>Main page</Link>
            <Link to='about'>About page</Link>
            <Suspense fallback={'Loading...'}>
                <Switch>
                    <Route path="/about" component={AboutPageAsync}/>
                    <Route path="/" component={MainPageAsync}/>
                </Switch>
            </Suspense>
        </div>
    );
};
