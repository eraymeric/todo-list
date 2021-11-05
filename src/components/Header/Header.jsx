import React from 'react'
import './Header.css'

function Header() {
    console.log('HEADER');
    return (
        <h1 className="main-header">To Do List</h1>
    )
}

export default React.memo(Header)
