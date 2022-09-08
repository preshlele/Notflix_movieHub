import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HiChevronDown } from "react-icons/hi"
import classNames from 'classnames';
import {NavLink} from 'react-router-dom'

const PopularMenu = () => {
  return (
    <Menu as="div" className=" flex flex-col items-center text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border bg-primary px-4 py-2 text-sm font-medium text-gray-300 shadow-sm  focus:outline-none">
          People    
          <HiChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-12 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            
            
              <Menu.Item>
                {({ active }) => (
                  <NavLink to="/popular-people"
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Popular People
                  </NavLink>
                )}
              </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  
  )
}

export default PopularMenu