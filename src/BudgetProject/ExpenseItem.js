import React from 'react'
import { UC } from './Context/UC'
import css from './CSS/EpenseItem.module.css'

export const ExpenseItem = ({e}) => {
    
    const {dispatch} = React.useContext(UC)
    const btnClick = () => {
        dispatch({
            type:'DELETE_ARRAY',
            payload: e.id,
        })
    }
    return (
        <>
            <li className={css.li}> {e.name}
            <div className={css.spanHold}> 
            <span className={css.span} > ${e.cost} </span>
            <button onClick={btnClick}> X</button>
            </div>
            </li>
        </>
    )
}
