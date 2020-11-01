import React, {useEffect} from 'react'
import ReactPixel from 'react-facebook-pixel'
import { CardDeck, Card } from 'react-bootstrap'
import ButtonOrder from '../components/ButtonCart'
import {useSelector} from 'react-redux'
import { envi } from '../config'
import { useHistory } from 'react-router-dom'
import model1 from '../assets/kahla-model-a.jpg'
import model2 from '../assets/kahla-model-b.jpg'
import model3 from '../assets/kahla-model-c.jpg'



export default function Abaya() {
    const history = useHistory()
    const pushToItem = (itemId) => {
        history.push('/item/' + itemId)
    }
    useEffect(()=>{
        if (envi === "production") {
            ReactPixel.init("614220549496198")
            ReactPixel.track("ViewContent")

        }
      }, [])

    const line1 = useSelector(state => state.items.filter(item => item.id > 37 && item.id < 43))
    const line2 = useSelector(state => state.items.filter(item => item.id > 42 && item.id < 48 ))
    const line3 = useSelector(state => state.items.filter(item => item.id > 47 && item.id < 53 ))
    return (<div className="container"> 
    <h1 style={{marginBottom: 100}}>Kahla Hijab</h1><div className="container col-sm-9" >
       
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={model1} />
               
            </Card>
            <Card>
                <Card.Img variant="top" src={model2} />
            </Card>
            <Card>
                <Card.Img variant="top" src={model3} />
            </Card>
            
            
        </CardDeck>
        

    </div >
    <h4 style={{marginTop : 100}}>Variant</h4>
  
            {renderVariants(line1)}
            {renderVariants(line2)}
            {renderVariants(line3)}
            
     
   
    </div>
    )
}

const renderVariants = (variants) =>{
    return (  
    <div className="container col-sm-9">
        <CardDeck >
            {
            variants.map(item => {
                return (<Card key={item.id}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Text>{item.name.split("-")[1]}</Card.Text>
                            <ButtonOrder id={item.id}/>
                        </Card>)
            })
            }
        </CardDeck>
    </div>) 
}