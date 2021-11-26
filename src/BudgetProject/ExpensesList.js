import React, { useState } from 'react'
import { UC } from './Context/UC'
import { ExpenseItem } from './ExpenseItem'

export const ExpensesList = () => {
    const [searchINP, setsearchINP] = useState('')
    // Context Api 
    const {expenses} = React.useContext(UC);

    // Filtering for Search Result
    const filterd = expenses.filter((e)=> e.name.toLowerCase().includes(searchINP) )
    return (
        <>
            <div className="searchInputHold">
            <input placeholder='🔍 Type to Search Items ...' 
            className='searchInput' type='text' value={searchINP}
            onChange={(e)=> setsearchINP(e.target.value.toLowerCase())}
            /> 
            </div>
            
            
            {filterd.map((e)=> {
            return  <ExpenseItem key={e.id} e={e} />
            })}
        </>
    )
}
