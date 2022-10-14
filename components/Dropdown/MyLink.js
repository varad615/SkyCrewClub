import { forwardRef } from 'react'
import Link from 'next/link'
import { Menu } from '@headlessui/react'

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <button ref={ref} {...rest}
      className={`${active && "bg-blue-500 text-white"} w-full rounded-md p-2`}>
        {children}
      </button>
    </Link>
  )
})