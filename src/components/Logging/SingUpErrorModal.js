import React from 'react'
import { GrClose } from 'react-icons/gr';
import Modal from '../../modal/Modal'

function SingUpErrorModal(props) {

  return (
    <Modal onClose={props.onClose} type='error-modal'>
      <div>
        <GrClose className='close' onClick={props.onClose} />
      </div>
      <h1 className='error-text'>{props.error}</h1>
    </Modal>
  )
}

export default SingUpErrorModal