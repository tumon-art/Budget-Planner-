import React from 'react'
import { UC } from './Context/UC'

export const Remaining = () => {
    const {budget,expenses} = React.useContext(UC)

    // Calculating with Array.reduce()
    const expensesTotal = expenses.reduce((pre,cur)=> pre + cur.cost ,0)
    
    return (
        <div className='remaining'> Remaining : ${budget - expensesTotal} </div>
    )
}
