import {Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {useTranslation} from "react-i18next";

const AppRouter = () => {
    const {t} = useTranslation();

    return (
        <Suspense fallback={t('Загрузка...')}>
            <Switch>
                {Object.values(routeConfig).map(({path, component}) => (
                    <Route key={path as string} path={path} component={component} />
                ))}
            </Switch>
        </Suspense>
    );
};

export default AppRouter;