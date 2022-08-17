import React, {createContext, useEffect, useState} from 'react';

//hold two components(provider gives data to components and consumer allows component to consume it)
const UserContext = createContext({});

const UserContextProvider = (props) => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('current_user')));
  
  // grab value when page  loads and set what ever the state was last time
  useEffect(() => {
   const data = localStorage.getItem('current_user');
   // if you cant find state value, like new user, or browsersession refreshed, we dont want to give bad data
   if (data !== null) {
     setUser(JSON.parse(data));
   }
  }, []);

  useEffect(() => {
    localStorage.setItem('current_user', JSON.stringify(user));
  }, [user]);
 
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };