import React, {useState, useEffect, useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  Bars2Icon,
} from "@heroicons/react/24/outline";
import NavList from "./NavList"
import ProfileMenu from "./ProfileMenu"
import AuthContext from '../../context/auth';
 
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user } = useContext(AuthContext);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <>
    {user ? 
      <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 mt-3">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Typography
          as="a"
          href="/home"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Invoice Maker
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar> : ''
  }
  </>
  );
}
