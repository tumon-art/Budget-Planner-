import React from 'react'
import { UC } from './Context/UC'

export const Spent = () => {
    const {expenses} = React.useContext(UC)

    const expensesTotal = expenses.reduce((prev,cur)=> prev + cur.cost ,0)
    return (
        <div className='spent'> Spent : ${expensesTotal} </div>
    )
}
