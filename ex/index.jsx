import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'


ReactDOM.render(
    <Family lastName='Cabral'>
        <Member name='Guilherme' />
        <Member name='Raphael' />
        <Member name='Fernanda' />
    </Family>,
    document.getElementById('app')
)

