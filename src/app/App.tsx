import React, {Suspense} from 'react';
import "./styles/index.scss"
import {Link, Route, Switch} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to='/'>Main page</Link>
            <Link to='about'>About page</Link>
            <Suspense fallback={'Loading...'}>
                <Switch>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/" component={MainPage}/>
                </Switch>
            </Suspense>
        </div>
    );
};
