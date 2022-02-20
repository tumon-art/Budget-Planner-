import React, { useState } from 'react'
import { UC } from './Context/UC'

export const Budget = () => {
    // Use Context 
    const {budget,dispatch} = React.useContext(UC)

    // States
    const [editClick, seteditClick] = useState(false)
    const [editInp, seteditInp] = useState('')

    // Functions 
    const EditClick = () => {
        seteditClick(prev => !prev)
    }

    const saveClick = () => {
        dispatch({
            type:"BUDGET_INPUT",
            payload:parseInt(editInp)
        })

        seteditClick(prev=> !prev)
    }
    
    return (
        // If else on Edit Click =========
        <>
        {editClick ? (
        <div className='budget_editable'>
        <input value={editInp} onChange={e=>seteditInp(e.target.value)} 
        type="text"/>

        <button onClick={saveClick}> Save </button> </div>  )
        :
        (<div className='budget_not_editable'> Budget : ${budget}
        <button onClick={EditClick}> Edit </button> </div>  ) }
        </>
    )
}
