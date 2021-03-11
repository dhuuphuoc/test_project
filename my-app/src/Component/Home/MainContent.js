import { Switch, Route, useRouteMatch } from "react-router-dom";
import Tweet from '../Tweet/Tweet'
import Home from './Home'

export default function MainContent() {
    let match = useRouteMatch();
    return(
        <Switch>
            <Route path="/tweet">
                <Tweet/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    )
}