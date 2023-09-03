import React, { useContext } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import {
  PowerIcon,
} from "@heroicons/react/24/outline";
import AuthContext from '../context/auth';

export default function Logout() {
  const { logout } = useContext(AuthContext);

  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => {
    setOpen(!open)
  };

  const logOut = () => {
    setOpen(!open)
    logout();
    localStorage.removeItem("user");
  }

  return (
    <>
      {/* <Button onClick={handleOpen}>Sign Out</Button> */}
      <IconButton
          size="md"
          color="red"
          variant="outlined"
          onClick={handleOpen}
          className="mx-5"
        >
        <PowerIcon className="h-6 w-6" />
      </IconButton>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Atenção necessaria!
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
        </svg>
          <Typography color="red" variant="h4">
            Certeza que você quer delogar?
          </Typography>
          <Typography className="text-center font-normal">
            Todas as configurações e formulários não salvos serão perdidos!
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            Cancelar
          </Button>
          <Button variant="gradient" color="red" onClick={logOut}>
            Deslogar!
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
