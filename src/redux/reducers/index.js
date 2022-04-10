import React from 'react'
import {Continue }from './auth'

import { combineReducers } from 'redux'
import datainput from './dataReducers'

const rootReducer = combineReducers(
    {
        Continue,
datainput
    }
)
export default rootReducer