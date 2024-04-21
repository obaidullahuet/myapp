import React from 'react'

function Alert(props) {
  return (
  props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <stong>{props.alert.type}</stong>:{props.alert.msg}
</div>
  )
}

export default Alert
