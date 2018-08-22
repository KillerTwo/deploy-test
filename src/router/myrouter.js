import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import AllContent from '../component/allcontent';
import Home from '../page/home';
import App from '../App';

export default class MyRouter extends React.Component{

    render() {
        return (
           <Router>
               <App>
                <Switch>
                    <Route path='/detail/:id' component={AllContent}/>
                    <Route path='/' component={Home}/>
                </Switch>  
               </App>
           </Router>
            
        );
    }
}

