import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Card'

export default function Khimar() {
    const khimar = useSelector(state => state.khimar)
    return khimar.map(khim => <CardProduct el={khim} key={khim.id} />)
}