import PizzaCards from '../PizzaCards/PizzaCards';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

export default function PizzaList() {
    const cart = useSelector(store => store.cart)
    const pizzas = useSelector(store => store.pizzaList)

    return (
     

        <>
        <div>
          <ul>
            {pizzas.map(pizza => {
              return <PizzaCards key={pizza.id} pizzaName={pizza.name} description={pizza.description} price={pizza.price} image={pizza.image_path} id={pizza.id}/>;
            })}
          </ul>
        </div>
        <Button variant="contained" style={{marginBottom:'25px', width:'200px', height:'50px'}}>Next</Button>
        </>
      );
}
