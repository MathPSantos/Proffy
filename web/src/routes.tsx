import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Success from './pages/Success';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path='/' exact component={Landing}/>
            <Route path='/study' component={TeacherList}/>
            <Route path='/give-classes' exact component={TeacherForm}/>
            <Route path='/give-classes/success' component={Success}/>
        </BrowserRouter>
    );
}

export default Routes;
