import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Button, CardActionArea, CardActions} from '@mui/material';
import { useDispatch } from 'react-redux';

 function PizzaCards(pizzaName) {

  const dispatch = useDispatch()
  
  let pizzaItem = {
    id:pizzaName.id,
    name:pizzaName.pizzaName,
    price:pizzaName.price
    }

  let [isAdded, setIsAdded] = useState(false)


  const handleClick = () => {

    setIsAdded(!isAdded)

      if (isAdded == false) {
        dispatch({
          type:'ADD_TO_CART',
          payload:{pizzaItem}
        })
      } else if (isAdded == true) {
        dispatch({
          type:'REMOVE_FROM_CART',
          payload: pizzaName.id
        })
      }

  }



  let buttonText;

   if (isAdded == false) {
    buttonText = (<Button size="small" color="primary" variant='contained' onClick={handleClick}>
                  Add
                 </Button>
    )
  } else if (isAdded == true) {
    buttonText = (<Button size="small" color="error" variant='contained' onClick={handleClick}>
    Remove
   </Button>)
  }


    return (
    
    <Card sx={{margin:'25px', display:'flex'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={pizzaName.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {pizzaName.pizzaName} ${pizzaName.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pizzaName.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {buttonText}
      </CardActions>
    </Card>
    )
}

export default PizzaCards