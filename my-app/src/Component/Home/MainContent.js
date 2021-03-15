import { Switch, Route, useRouteMatch } from "react-router-dom";
import Tweet from '../Tweet/Tweet'
import Home from './Home'

export default function MainContent() {
    return(
        <Switch>
            <Route path="/tweet">
                <Tweet/>
            </Route>
            <Route path="/home">
                <Home/>
            </Route>
        </Switch>
    )
}