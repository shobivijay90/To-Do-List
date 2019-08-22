import React from 'react'

import Lists from './components/Lists'

function App(){
    return(
        <div className="container" >
        <Lists item={ {name:"milk" } }/>
       <Lists item={ {name:"egg" } }/>
        <Lists item={ {name:"butter" } }/>
         <Lists item={ {name:"rice" } }/>
          <Lists item={ {name:"fruits" } }/>
        </div>
    )
}

export default App