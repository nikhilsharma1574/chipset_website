import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion"
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

export const Test1 = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <button className='bg-red-600 w-full h-full'  onClick={() => setIsOpen(isOpen => !isOpen)} />
          {/* <Items /> */}
        </motion.nav>
      )
}
