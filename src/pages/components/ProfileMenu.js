import React, {useState, createElement, useContext } from "react";
import { State } from '../../context/stateContext';
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon
} from "@heroicons/react/24/outline";
import Logout from "../../components/Logout";

const profileMenuItems = [
    {
      label: "Meu Perfil",
      icon: UserCircleIcon,
      route: '/user'
    },
    {
      label: "Editar Perfil",
      icon: Cog6ToothIcon,
    },
    {
      label: "Inbox",
      icon: InboxArrowDownIcon,
    },
    // {
    //   label: "Help",
    //   icon: LifebuoyIcon,
    // },
    // {
    //   label: "Sign Out",
    //   icon: PowerIcon,
    // },
  ];
   
  export default function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data } = useContext(State);
    const getData = data || JSON.parse(localStorage.getItem("data"));
    const { picture, username } = getData;

    const navigate = useNavigate();
   
    const closeMenu = () => {
      setIsMenuOpen(false)
    };
   
    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src={picture}
            />
            <Typography
                  as="span"
                  variant="small"
                  className="font-normal hidden lg:block"
                  color={"black"}
                >
                  {username}
                </Typography>
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon, route }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={() => { navigate(route) }}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {createElement(icon, {
                  className: `h-4 w-4`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color="inherit"
                  onClick={closeMenu}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
        <Logout/>
      </Menu>
    );
  }