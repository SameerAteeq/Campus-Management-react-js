import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CommonDialog({ openDialog, setOpenDialog }) {

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <div>

            <Dialog
                open={openDialog.isOpen}
                onClose={openDialog.isOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Do You want to delete this Job?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog({ ...openDialog, isOpen: false })}>Disagree</Button>
                    <Button onClick={openDialog.onCinfirm} >
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
