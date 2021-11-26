import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { UC } from './Context/UC'
import css from './CSS/AddExpense.module.css'

export const AddExpense = () => {
    const [name, setname] = useState('')
    const [cost, setcost] = useState('')

    // Use Context 
    const {dispatch} = React.useContext(UC)

    // ON Submit Form 
    const onSubmit = (e) => {
        e.preventDefault()

        // Creating New Obj
        const expenses = {
            id: nanoid(),
            name: name,
            cost: parseInt(cost),
        }

        // Dispatch with Payload
        dispatch({
            type:'ADD_EXPENSES',
            payload: expenses,
        })

        // Reset State
        setname('')
        setcost('')
    }
    return (
        <>
        <form onSubmit={onSubmit} 
        className={css.form}>

            {/* Item Name ======= */}
            <label> Name </label>
            <input required='required' type="text"
            id='cost' 
            value={name}
            onChange={(e)=>setname(e.target.value)}
            />
            
            {/* Item Cost ======= */}
            <label> Cost</label>
            <input required='required' type="number"
            id='cost'
            value={cost}
            onChange={(e)=>setcost(e.target.value)}
             />

            <button 
             type='submit'> Add</button>
        </form>
        </>
    )
}
