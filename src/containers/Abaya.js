import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Card'


export default () => {
    const abaya = useSelector(state => state.abaya)
    return abaya.map(aba => < CardProduct el={aba} key={aba.id} />)
}