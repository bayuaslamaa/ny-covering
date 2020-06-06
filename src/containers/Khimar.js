import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Card'

export default function Khimar() {
    const [blue, setBlue] = useState(false)
    const [pink, setPink] = useState(false)
    const [olive, setOlive] = useState(false)
    const khimar = useSelector(state => state.khimar)
    let babyBlue = khimar.filter(khim => (khim.name.toLowerCase().includes("baby")))
    let candyPink = khimar.filter(khim => (khim.name.toLowerCase().includes("pink")))
    console.log(candyPink)
    if (!blue && !pink) {
        return khimar.map(khim => <CardProduct el={khim} key={khim.id} setBlue={setBlue} setPink={setPink} />)
    } else if (blue) {
        return babyBlue.map(babe => <CardProduct el={babe} key={babe.id} setBlue={setBlue} setPink={setPink} />)
    } else if (pink) {
        return candyPink.map(candy => <CardProduct el={candy} key={candy.id} setBlue={setBlue} setPink={setPink} />)
    }
}