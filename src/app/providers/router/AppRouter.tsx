import {Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={'Loading...'}>
            <Switch>
                {Object.values(routeConfig).map(({path, component}) => (
                    <Route key={path as string} path={path} component={component} />
                ))}
            </Switch>
        </Suspense>
    );
};

export default AppRouter;