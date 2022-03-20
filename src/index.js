import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import {UserProvider} from './Context/authUser'
import { GlobalStyles } from './global-styles'

ReactDOM.render(
    <>
        <GlobalStyles />
        <UserProvider>
            <App />
        </UserProvider>
    </>, document.getElementById('root')
)