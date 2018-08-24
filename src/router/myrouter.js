import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import LiveRoute from 'react-live-route';
import AllContent from '../component/allcontent';
import Home from '../page/home';
import App from '../App';

export default class MyRouter extends React.Component{

    render() {
        return (
           <Router>
               <App>
                {/* <Switch>
                    <Route path='/detail' component={AllContent}/>
                    <Route path='/' component={Home}/>
                </Switch>   */}
                    
                    
                    <LiveRoute path="/search" livePath="/detail" component={Home} ></LiveRoute>  
                    <LiveRoute path="/detail" component={AllContent} ></LiveRoute> 
                     {/* 不加Switch，在重定向路由时会出现警告 */}
                    <Switch>
                        <Route exact path='/'  >
                            <Redirect to="/search" />
                        </Route>
                    </Switch>
               </App>
           </Router>
            
        );
    }
}

