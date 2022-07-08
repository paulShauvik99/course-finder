import {render, screen , cleanup} from '@testing-library/react'
import Home from '../Home'
import '@testing-library/jest-dom/extend-expect';

import {Provider} from 'react-redux'
import store from '../../Redux/store'
import React from 'react'








test('testing simple heading',()=>{
    
    render( 
        <>
            <Provider store={store}>
                <Home />
            </Provider>       
        </>
    )
    
     
})