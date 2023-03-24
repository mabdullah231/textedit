import React, { useState } from 'react'

export default function alert(props) {
return(
props.text && <div className="alert alert-warning alert-dismissible fade show" role="alert">
   <strong>{props.text.type}</strong> : {props.text.msg}
   <button type="button" className="close" data-dismiss="alert" aria-label="Close">
     <span aria-hidden="true">&times;</span>
   </button>
 </div>
    )
}