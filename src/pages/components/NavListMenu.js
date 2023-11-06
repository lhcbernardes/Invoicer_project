import React, {useState, Fragment } from "react";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

  const navListMenuItems = [
    {
      title: 'Cadastrar Nota',
      description: 'Cadastrar Nota para tal coisa',
      imageUrl: 1,
      route: 'invoice'
    },
    {
      title: 'Novo cliente',
      description: 'Cadastrar um novo cliente',
      imageUrl: 2,
      route: 'newclient'
    },
    {
      title: 'Card 3',
      description: 'Descrição do Card 3',
      imageUrl: 3,
      route: 'invoice'
    },
  ];
   
  export default function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const renderItems = navListMenuItems.map(({ title, description, route }) => (
      <a href={`/${route}`} key={title}>
        <MenuItem>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            {title}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {description}
          </Typography>
        </MenuItem>
      </a>
    ));
   
    return (
      <Fragment>
        <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
          <MenuHandler>
            <Typography as="a" href="#" variant="small" className="font-normal">
              <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
                <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </MenuItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
            <Card
              color="blue"
              shadow={false}
              variant="gradient"
              className="col-span-3 grid h-full w-full place-items-center rounded-md"
            >
              <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
            </Card>
            <ul className="col-span-4 flex w-full flex-col gap-1">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
        <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
          <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
        </MenuItem>
        <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
          {renderItems}
        </ul>
      </Fragment>
    );
  }