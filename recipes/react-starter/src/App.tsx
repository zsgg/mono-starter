import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OthersPage from './pages/OthersPage';
import Playground from './pages/Playground';

const AsyncPage = React.lazy(() => import('./pages/AsyncPage'));

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">/</Link>
                        </li>
                        <li>
                            <Link to="/home">home</Link>
                        </li>
                        <li>
                            <Link to="/async">async</Link>
                        </li>
                        <li>
                            <Link to="/others">others</Link>
                        </li>
                        <li>
                            <Link to="/playground">playground</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/home">
                        <HomePage />
                    </Route>
                    <Route path="/async">
                        <Suspense fallback={<div>..</div>}>
                            <AsyncPage />
                        </Suspense>
                    </Route>
                    <Route path="/others">
                        <OthersPage />
                    </Route>
                    <Route path="/playground">
                        <Playground />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default hot(App);
