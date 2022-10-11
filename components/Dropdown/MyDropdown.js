import { Menu, Transition  } from "@headlessui/react";
import { Fragment } from 'react'
import MyLink from '../Dropdown/MyLink'

export default function MyDropdown() {
  const styles = {
    profileBut: "bg-black text-white py-2 px-4 rounded-full cursor-pointer",
    dropDownItems:
      "focus:outline-none absolute right-0 top-20 mr-9 origin-top-left w-56  divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black",
  };

  const items = [
    {name: "profile", disable: false, href: "/"},
    {name: "switch to learner", disable: false, href: "/"},
    {name: "logout", disable: false, href: "/"},
  ]
  return (
    <Menu>
      <Menu.Button className={styles.profileBut}>T</Menu.Button>

      <Transition
        as={Fragment}
        enter="transition duration-1000 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >

      <Menu.Items className={styles.dropDownItems}>
        <div className="px-1 py-1 ">
            {items.map(item=>(
                <Menu.Item  key={item.name}>
                {({ active }) => (
                  <MyLink
                    disabled={item.disable}
                    href="/" active={active}
                  >
                    {item.name}
                  </MyLink>
                )}
              </Menu.Item>
            ))}
          
        </div>
      </Menu.Items>

      </Transition>
    </Menu>
  );
}
