import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { createContact, getContacts, setContact } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';

const intialFormValue = {
  name: { value: null, errMsg: null },
  phone: { value: null, errMsg: null },
  address: { value: null, errMsg: null },
  title: { value: null, errMsg: null }
}

const InputContactModal = ({ open, handleClose }) => {

  const dispatch = useDispatch()

  const { location_id } =  useSelector((state) => state.marker.selectedMarker)

  const [data, setData] = useState(intialFormValue)

  const handleModalClose = () => {
    setData(intialFormValue)
    handleClose()
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let  valid = true;

    if (!data.name.value) {
      setData((prevVal) => ({ ...prevVal, name: { value: prevVal.name.value, errMsg: "Nama tidak boleh kosong" }}))
      valid = false
    }

    if (!data.phone.value) {
      setData((prevVal) => ({ ...prevVal, phone: { value: prevVal.phone.value, errMsg: "Telepon tidak boleh kosong" }}))
      valid = false
    }

    if (!data.address.value) {
      setData((prevVal) => ({ ...prevVal, address: { value: prevVal.address.value, errMsg: "Alamat tidak boleh kosong" }}))
      valid = false
    }

    if (!valid) {
      return
    }

    const body = {
      location_id,
      name: data.name.value,
      phone: data.phone.value,
      address: data.address.value,
      title: data.title.value
    }

    createContact(body, (res) => {
      console.log(res.data)
      
      if (res.data.status === false) {
        setData((prevVal) => ({ ...prevVal, phone: { value: prevVal.phone.value, errMsg: res.data.message }}))
        return
      }

      getContacts({ location_id }, (result) => {
        dispatch(setContact(result))
      })

      handleModalClose()
    })
  };


  return (
    <div>
      <Dialog open={open} onClose={handleModalClose}>
        <DialogTitle>Input Kontak Darurat</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              error={data.name.errMsg}
              autoFocus
              margin="dense"
              id="name"
              label="Nama"
              type="text"
              value={data.name.value}
              required
              onChange={(e) => setData((prevVal) => ({ ...prevVal, name: { value: e.target.value, errMsg: null }}))}
              fullWidth
              helperText={data.name.errMsg}
            />
            <TextField
              error={data.phone.errMsg}
              margin="dense"
              id="phone"
              label="Telepon"
              type="number"
              value={data.phone.value}
              required
              onChange={(e) => setData((prevVal) => ({ ...prevVal, phone: { value: e.target.value, errMsg: null }}))}
              fullWidth
              helperText={data.phone.errMsg}
            />
             <TextField
              error={data.address.errMsg}
              margin="dense"
              id="address"
              label="Alamat"
              type="text"
              value={data.address.value}
              required
              onChange={(e) => setData((prevVal) => ({ ...prevVal, address: { value: e.target.value, errMsg: null }}))}
              fullWidth
              helperText={data.address.errMsg}
            />
            <TextField
              // error={data.address.errMsg}
              margin="dense"
              id="title"
              label="Jabatan"
              type="text"
              value={data.title.value}
              required
              onChange={(e) => setData((prevVal) => ({ ...prevVal, title: { value: e.target.value, errMsg: null }}))}
              fullWidth
              // helperText={data.title.errMsg}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose}>Batal</Button>
          <Button onClick={handleSubmit}>Simpan</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InputContactModal;
