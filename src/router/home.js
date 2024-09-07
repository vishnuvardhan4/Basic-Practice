// import React, { useState } from 'react'
// import  {Redirect}  from 'react-router-dom';

// const home=()=> {
//     const [auth, setAuth]=useState(false);
//     if (auth){
//        return <Redirect to='/dashboard' />
//     }
//   return (
//     <div>
//         <h1>welcome home</h1>
//     <button onClick={()=> setAuth(true)} >Login</button>

//     </div>


//   )
// }

// export default home

import React, { useState } from 'react'
import  {vuseHistory}  from 'react-router-dom';

const home=()=> {
    let history =useHistory();

  return (
    <div>
        <button onClick={()=>history.push('/dashboard')}>Login</button>

    </div>


  )
}

export default home