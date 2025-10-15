import { createContext, useEffect, useReducer } from "react";

const AuthContext = createContext();

const DefaultState = {
    user : null
}

const AuthReducer = (state , action) => {
    switch (action.type) {
        case "user-log-in":
            localStorage.setItem('user',JSON.stringify(action.payload))
            return {...state , user : action.payload}
        case "user-log-out":
            localStorage.removeItem('user')
            return {...state , user : null}
        case "user-google-sign-in":
            localStorage.setItem('user',JSON.stringify(action.payload))
            return {...state , user : action.payload}
        case "user-update-info":
            localStorage.setItem('user', JSON.stringify(action.payload));
            return { ...state, user: action.payload };
        default:
            return state;
    }
}

const AuthContextProvider = ({children}) => {

    const [ state, dispatch] = useReducer(AuthReducer , DefaultState)

    
    useEffect(()=>{
        const storedData = localStorage.getItem('user')
        if(storedData){
            dispatch({
                type : "user-log-in",
                payload : JSON.parse(storedData)
            })
        }
    },[])

    return (
        <AuthContext.Provider value={{...state , dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext , AuthContextProvider}