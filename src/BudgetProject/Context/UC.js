import { nanoid } from 'nanoid'
import React, { useReducer } from 'react'


const initialState = {
    budget:2000,
    expenses:[
        {id:nanoid(),name:'Shoping',cost:33},
        {id:nanoid(),name:'Haircut',cost:83},
        {id:nanoid(),name:'Bill',cost:53},
        {id:nanoid(),name:'Wifi Bill',cost:33},
        {id:nanoid(),name:'Mobile Data',cost:63},
        {id:nanoid(),name:'Drinks',cost:13},
    ]
}

const Reducer = (state,action) => {
    switch (action.type) {
        case 'ADD_EXPENSES' :
            return {
                ...state,
                expenses:[...state.expenses,action.payload],
            };
        case 'DELETE_ARRAY' :
            return {
                ...state,
                expenses: state.expenses.filter((e)=> {
                    return e.id !== action.payload
                })
            } ;
        case "BUDGET_INPUT" :
            return {
                ...state,
                budget:action.payload,
            }
        default:
        return state;
    }
}
export const UC = React.createContext();

export const Provider  = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    
    return (
        <div>
            <UC.Provider
            value={{
                budget:state.budget,
                expenses:state.expenses,
                dispatch,
            }}
            >
                {children}
            </UC.Provider>
        </div>
    )
}
