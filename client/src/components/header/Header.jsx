import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

const navigation = [
  { name: 'Dashboard', to: '/tasks-list', current: true },
  { name: 'Create Task', to: '/tasks/create', current: true }
  // { name: 'Projects', to: '#', current: false },
  // { name: 'Calendar', to: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const {isAuthenticated,email} = useContext(AuthenticationContext);

    return (
        <header>
             <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-between">
        {isAuthenticated ? 
          (
            <>
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      'bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
              <MenuButton className="relative flex items-center space-x-3 rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none px-3 py-1">
                <img
                    alt="User avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    className="size-8 rounded-full"
                />
                <span className="text-white text-sm font-medium">{email}</span>
              </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >        
                <MenuItem>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          </>
          )
          :
          (
            <div className="flex items-center justify-end flex-1">
              <Link to="/login"
                  className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer"
                  >
                  Login
              </Link>
            </div>
          )
        }
        </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </header>
    );
}