import React from 'react'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from '@coreui/react'

const ConfirmActionModal = ({
  visible,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  confirmColor = 'danger',
  loading = false,
}) => {
  return (
    <CModal visible={visible} onClose={onClose} alignment="center">
      <CModalHeader>
        <CModalTitle>{title}</CModalTitle>
      </CModalHeader>

      <CModalBody>{message}</CModalBody>

      <CModalFooter>
        <CButton color="secondary" onClick={onClose} disabled={loading}>
          Cancel
        </CButton>
        <CButton color={confirmColor} onClick={onConfirm} disabled={loading} className='text-white'>
          {confirmText}
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default ConfirmActionModal
