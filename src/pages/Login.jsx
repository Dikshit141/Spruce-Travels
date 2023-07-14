import React from 'react';

export default function Error() {


       const  checkSubmit = () =>
        {



        }


    return (
        <>

<div className='login'>

<form className="AppLogin" action='/' >
        
       
        <div className="input-container">
          <input type="text" placeholder="Email" required/>
          <i class="zmdi zmdi-account zmdi-hc-lg"></i>
        </div>
        
        <div className="input-container" >
          <input type="password" placeholder="Password" required/>
          <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
        </div>
        
       <button type="submit"> 
                      Login
               </button>
      </form>
</div>

        </>
    )
}
