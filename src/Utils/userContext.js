import React from 'react';

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_USER': {
      return action.user ? {...action.user} : null;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({children}) {
  const [state, dispatch] = React.useReducer(userReducer, null);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
}
function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
}

function UserConsumer({children}) {
  return (
    <UserStateContext.Consumer>
      {context => {
        if (context === undefined) {
          throw new Error('UserConsumer must be used within a UserProvider');
        }
        return children(context);
      }}
    </UserStateContext.Consumer>
  );
}

function useUser() {
  return [useUserState(), useUserDispatch()];
}

export {UserProvider, UserConsumer, useUserState, useUser, useUserDispatch};
