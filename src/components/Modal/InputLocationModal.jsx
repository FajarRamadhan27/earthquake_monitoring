import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const InputLocationModal = ({ open, handleClose}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    setName('');
    setEmail('');
    setPhone('');
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Input Lokasi Baru</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nama Lokasi"
              type="text"
              value={name}
              onChange={handleInputChange}
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Batal</Button>
          <Button onClick={handleSubmit}>Simpan</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InputLocationModal;
