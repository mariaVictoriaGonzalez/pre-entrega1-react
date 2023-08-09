import React from 'react'
import './ListContainer.css'

export const ListContainer = ({greeting})=> {
    return(
        <h1 className='listContainer'>{greeting}</h1>
    )
}