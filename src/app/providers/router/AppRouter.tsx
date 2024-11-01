import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/ui/PageLoader';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Switch>
            {Object.values(routeConfig).map(({ path, component }) => (
                <Route key={path as string} exact path={path} component={component} />
            ))}
        </Switch>
    </Suspense>
);

export default AppRouter;
