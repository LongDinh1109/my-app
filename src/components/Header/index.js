import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  GiftIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Communities from "../Communities";
import SidePanel from "../SidePanel";
import { useStoreState } from "easy-peasy";
import { useLocation } from "react-router-dom";

const navigation = [
  { name: "Communities", href: "#", current: false },
  { name: "QuesterCamp", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { communities, menuItems } = useStoreState((state) => state.data);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
    <Disclosure as="nav" className="bg-white border-b gap-5">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start gap-2">
            <Bars3Icon
              className="lg:hidden h-7 w-7 p-1 rounded-md bg-white"
              onClick={() => setIsOpen(true)}
            />
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="./img/Group.svg"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-[#111827] hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute gap-3 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" aria-hidden="true" className="size-8">
              <span class="relative inline-block">
                <GiftIcon aria-hidden="true" className="size-8" />
                <span class="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
              </span>
            </button>

            <button type="button" aria-hidden="true" className="size-8">
              <span class="relative inline-block">
                <ChatBubbleOvalLeftEllipsisIcon
                  aria-hidden="true"
                  className="size-8"
                />
                <span class="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
              </span>
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="./img/avatar.jpg"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 ">
          <div className="bg-white w-fit">
            <div className=" flex justify-between p-5 h-16 border-b border-neutral-200">
              <img src="./img/Logo.svg" alt="logo" className="h-fit w-auto" />
              <XMarkIcon className="w-6 h-6" onClick={() => setIsOpen(false)} />
            </div>
            <div className="w-fit h-full flex flex-row">
              <Communities communities={communities} />
              <SidePanel menuItems={menuItems}></SidePanel>
            </div>
          </div>
        </div>
      )}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
