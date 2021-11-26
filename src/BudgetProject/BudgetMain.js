import React from 'react'
import { AddExpense } from './AddExpense'
import { Budget } from './Budget'
import { Provider } from './Context/UC'
import './CSS/Main.css'
import { ExpensesList } from './ExpensesList'
import { Remaining } from './Remaining'
import { Spent } from './Spent'

export const BudgetMain = () => {
    
    return (
        <div className='main'>
        <div className='container'>
            <h1 className="header"> The Budget Planner  </h1>

            {/* === Use Context Provider Used
            From A imported function  === */}
            <Provider>
            <div className='budgetStatus'>
                <Budget />
                <Remaining />
                <Spent />
            </div>
            <h3> Expenses</h3>
            <ExpensesList />
            
            <h3> Add Expenses </h3>
            <AddExpense />
            </Provider>
        </div>
        </div>
    )
}
