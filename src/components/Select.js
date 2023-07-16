import React from 'react'

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';
import SelectCard from './SelectCard';

const Select = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectCard bg={BoraBora} text='Bora Bora'/>
    <SelectCard bg={BoraBora2} text='Acuna'/>
    <SelectCard bg={Maldives} text='Daizy'/>
    <SelectCard bg={Maldives2} text='Boom'/>
    <SelectCard bg={Maldives2} text='Jamica'/>
    <SelectCard bg={KeyWest} text='Flex'/>

    </div>  

  )
}

export default Select
