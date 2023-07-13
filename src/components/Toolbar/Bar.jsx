import {AppBar, Button, Toolbar} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Bar({nextPage}) {
return  (<AppBar position="fixed">
<Toolbar> Prime Pizza Parlor<Button color='success' variant='contained' style={{marginLeft:'80%'}} onClick={nextPage}><ShoppingCartIcon />Checkout</Button></Toolbar>
</AppBar>)
}