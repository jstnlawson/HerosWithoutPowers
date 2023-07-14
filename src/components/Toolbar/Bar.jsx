import {AppBar, Button, Toolbar} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useHistory } from 'react-router-dom'

export default function Bar() {
    const history = useHistory()
    function checkout() {
        history.push("/order")
      }

      function home() {
        history.push("/")
      }

      function customerInfo () {
        history.push('/pizzaform')
      }
return  (<AppBar position="fixed">
<Toolbar> Prime Pizza Parlor
<Button color='success' variant='contained' onClick={home} style={{marginLeft:'10px'}}>Home</Button>
<Button color='success' variant='contained' onClick={customerInfo} style={{marginLeft:'20%'}}>Your Information</Button>
<Button color='success' variant='contained' style={{marginLeft:'20%'}} onClick={checkout}><ShoppingCartIcon />Checkout</Button>

</Toolbar>
</AppBar>)
}