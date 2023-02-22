import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="bg-[#EDEDED] w-full h-[73px] flex flex-row flex-nowrap items-center justify-between pr-[34px] pl-[62px] ">
      <Image
        width={104}
        height={31}
        alt="Logo premios goula"
        src="/logo.png"
      />
      <ul className='flex wrap row gap-4 text-xs font-bold justify-center items-center content-center'>
        <li>ACERCA DE</li>
        <li>CATEGORIAS</li>
        <li>JUECES</li>
        <li>ALIADOS Y MEDIOS DE COMUNICACION</li>
      <Button className='bg-[#FA6162] shadow-[#FA6162] shadow-sm'>Participar</Button>
      </ul>
    </div>
  )
}

export default Header
