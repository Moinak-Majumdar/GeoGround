import { useState } from 'react'
import { Button, TextField, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle } from '@mui/material'


const PlaceError = ({ place, search }) => {

    const [open, setOpen] = useState(true);
    const [newPlace, setNewPlace] = useState('')

    function handleSubmit() {
        search(newPlace)
        setOpen(false)
    }
    return (
        <section className="min-h-screen flex justify-center items-center">
            <div>
                <Dialog open={open}>
                    <DialogTitle>Invalid Place</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Opps! the place you are trying to fetch might be unreachable at this moment or it&apos;s spells incorrectly : '{place}'
                        </DialogContentText>
                        <TextField
                            value={newPlace}
                            onChange={(e) => { setNewPlace(e.target.value) }}
                            autoFocus
                            margin="dense"
                            label="New place name"
                            type="text"
                            fullWidth required
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleSubmit}>Search</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </section>
    )
}

export default PlaceError