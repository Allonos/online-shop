import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

const getModalClassName = type => {
  if (type === 'error-modal') return 'error-modal'
  if (type === 'bought') return 'bought'
  return 'modal';
}

const Backdrop = props => {
  return <div className='backdrop' onClick={props.onClose} />
}

const ModalOverlay = props => {
  return (
    <div className={getModalClassName(props.type)}>
      <div className='content'>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays');

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay type={props.type}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default Modal