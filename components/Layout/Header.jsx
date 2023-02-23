import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <nav className="bg-[#EDEDED] w-full h-[200px]  flex flex-wrap  items-center justify-between pr-[34px] pl-[62px] border-current border-b 
    md:h-[70px]">
      <Image
        width={104}
        height={31}
        alt="Logo premios goula"
        src="/logo.png"
      />
    
      <ul className='sm:w-[50%] flex flex-col gap-4 text-center md:flex-row  text-xs font-bold justify-center items-center'>
        <li>ACERCA DE</li>
        <li>CATEGORIAS</li>
        <li>JUECES</li>
      <Button className='bg-[#FA6162] shadow-[#FA6162] shadow-sm'>Participar</Button>
      </ul>
    </nav>
  )
}

export default Header
