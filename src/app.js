/**
 * Created by lhy on 2017/7/25.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {instanceOf} from 'prop-types'
import {CookiesProvider, Cookies} from 'react-cookie'
import 'ASSET/less/app.less'
import LoginRoute from 'COMPONENT/login'
import HomeRoute from 'COMPONENT/home'
import SquareRoute from 'COMPONENT/square'
import store from 'STORE'
import {
    BrowserRouter,
    Route
} from 'react-router-dom'


class Basic extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    render() {
        return (
            <BrowserRouter basename="/#">
                <div>
                    <div className="routerContent">
                        <Route exact path='/' component={LoginRoute}/>
                        <Route path='/LoginRoute' component={LoginRoute}/>
                        <Route path='/home' component={HomeRoute}/>
                        <Route path='/square' component={SquareRoute}/>
                    </div>
                </div>
            </BrowserRouter>)
    }
}

ReactDOM.render((
    <Provider store={store}>
        <CookiesProvider>
            <Basic/>
        </CookiesProvider>
    </Provider>
), document.getElementById('cnt'))


