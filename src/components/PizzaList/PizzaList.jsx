import PizzaCards from '../PizzaCards/PizzaCards';
import { useSelector } from 'react-redux';

export default function PizzaList() {

    const pizzas = useSelector(store => store.pizzaList)


    return (
        <div>
          <ul>
            {pizzas.map(pizza => {
              return <PizzaCards key={pizza.id} pizzaName={pizza.name} />;
            })}
          </ul>
        </div>
      );
}
