import { 
    createContext, 
    useContext,
    useReducer 
} 
from "react";
import { AuthContext } from "./AuthContext";

const ChatContext = createContext({});

const ChatContextProvider = ({ children }) => {
    const {currentUser} = useContext(AuthContext); 

    const INITIAL_STATE = {
        chatId:"null",
        user:{}
    };

    const chatReducer = (state,action) => {
        switch (action.type) {
            case "CHANGE_USER":
                return {
                    user: action.payload,
                    chatId: 
                    currentUser.uid > action.payload.uid
                        ? currentUser.uid + action.payload.uid
                        : action.payload.uid + currentUser.uid,
                };        
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
    console.log("ChatContextProvider state:", state);
    console.log("ChatContextProvider dispatch:", dispatch);


    return (
        <ChatContext.Provider value={{ state,dispatch }}>
            {children}
        </ChatContext.Provider>
    )
}

export {ChatContext, ChatContextProvider};