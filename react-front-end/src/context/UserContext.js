import React, {createContext, useEffect, useState} from 'react';

//hold two components(provider gives data to components and consumer allows component to consume it)
const UserContext = createContext({});

const UserContextProvider = (props) => {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => { //grab value when page  loads and set what ever the state was last time
   const data = localStorage.getItem('current_user');
   if (data !== null) { //if you cant find state value, like new user, or browsersession refreshed, we dont want to give bad data
     setUser(JSON.parse(data))
   } 
  }, []);

  useEffect(() => {
    localStorage.setItem('current_user', JSON.stringify(user))
   
  },[user] )


  useEffect(() => { //grab value when page  loads and set what ever the state was last time
    const data = localStorage.getItem('logged_in');
    if (data !== null) { //if you cant find state value, like new user, or browsersession refreshed, we dont want to give bad data
      setIsLoggedIn(JSON.parse(data))
    } 
   }, []);
 
   useEffect(() => {
     localStorage.setItem('logged_in', JSON.stringify(isLoggedIn)) 
   },[isLoggedIn] )

 
  return (
    <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };