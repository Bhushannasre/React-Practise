import React from 'react';

const Header = () => {
     const  welcome="Welcome home Hero";
     const  currdate= new Date().toDateString();
     const  isStudent= false;
    return (
        
        
      <div className="header">
         <h2>{welcome}</h2>
         <h3>{currdate}</h3>
        {isStudent && <h4>student are present</h4>}
         {!isStudent && <h4>student are not present</h4>}
      
       </div>
    );
};

export default Header;