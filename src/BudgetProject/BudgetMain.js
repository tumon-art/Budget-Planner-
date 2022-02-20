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

            <div className='Expense_and_AddExprense'>
            <div className='Sect1'>
            <h3> Expenses</h3>
            <ExpensesList />
            </div>
            
            <div className="Sect2">
            <div>
            <h3> Add Expenses </h3>
            <AddExpense />
            </div>
            <div className="qoute">
                <div className="qouteText">
                 " Everyday is a bank account, 
                 and time is our currency.
                 No one is rich, no one is poor, 
                 we've got 24 hours each."
                </div>
            </div>

            </div>
            
            </div>

            </Provider>
        </div>
        </div>
    )
}
