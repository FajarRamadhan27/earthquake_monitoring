import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearLocationData, createLocation, getLocation, setAllLocation, setLocationData, toogleLocationForm, updateLocation } from '../../utils';
import { HTTP_OK } from '../../utils/network/AxiosClient';

const InputLocationModal = () => {

  const dispatch = useDispatch()
  const { isFormOpen, data } = useSelector((state) => state.formLocation) 

  const handleInputChange = (event) => {
    dispatch(setLocationData({
      ...data,
      name: event.target.value
    }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here

    if (data.location_id) {
      updateLocation(data, (res) => {
        console.log(res.status)
        if (res.status === HTTP_OK) {
          getLocation((result) => {
            dispatch(setAllLocation(result))
          })
          handleFormClose();
        }
      })
    } else {
      createLocation(data, (res) => {
        console.log(res.status)
        if (res.status === HTTP_OK) {
          getLocation((result) => {
            dispatch(setAllLocation(result))
          })
          handleFormClose();
        }
      })
    }
  };

  const handleFormClose = () => {
    dispatch(clearLocationData())
    dispatch(toogleLocationForm())
  }

  return (
    <div>
      <Dialog open={isFormOpen} onClose={handleFormClose} fullWidth>
        <DialogTitle>{data.location_id ? 'Update Nama Lokasi' : 'Input Lokasi Baru'}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nama Lokasi"
              type="text"
              value={data.name}
              onChange={handleInputChange}
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose}>Batal</Button>
          <Button onClick={handleSubmit}>Simpan</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InputLocationModal;
