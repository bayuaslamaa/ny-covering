import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Card'

export default () => {
    const packages = useSelector(state => state.packages)
    return packages.map(pack => <CardProduct el={pack} key={pack.id} />)
}