import React, { useState } from 'react';
import axios from 'axios'
import { Input } from '@mui/material';
function PizzaForm() {

    let [customerToAdd, setCustomerToAdd] = useState({ name: '', address: '', city: '', zip: '' })
    let [pickUp, setPickUp] = useState(false)
    let [delivery, setDelivery] = useState(false)

    const handleNameChange = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            price: event.target.value,
        });
    }

    const handleAddressChange = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            price: event.target.value,
        });
    }

    const handleCityChange = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            price: event.target.value,
        });
    }

    const handleZipChange = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            price: event.target.value,
        });
    }

    const handlePickUp = () => {
        setPickUp(true)
        if (pickUp == true) {
            setDelivery(false)
        }
    }

    const handleDelivery = () => {
        setDelivery(true)
        if (delivery == true) {
            setPickUp(false)
        }

    }

    const addCustomer = (event) => {
        event.preventDefault();

        axios.post('/api/order',
            customerToAdd
        ).then(response => {
            setCustomerToAdd('')
        }).catch(err => {
            console.log('error adding customer info: ', err);
        })
    };

    return (
         <div>
            <form onSubmit={(event) => addCustomer(event)} style={{ marginTop: '100px' }}>
            <h1>Enter your Information</h1>
            <input
                type="text"
                placeholder="Name"
                onChange={handleNameChange}
                style={{marginTop:'10px'}} />
            <br></br>
            <input
                type="text"
                placeholder="Street Address"
                onChange={handleAddressChange}
                style={{marginTop:'10px'}} />
            <br></br>
            <input
                type="text"
                placeholder="City"
                onChange={handleCityChange} 
                style={{marginTop:'10px'}}/>
            <br></br>
            <input
                type="text"
                placeholder="Zip"
                onChange={handleZipChange} 
                style={{marginTop:'10px'}}/>
            <br />
            <p>Pick up?</p>
            <input type="checkbox" onChange={handlePickUp} />
            <p>Delivery?</p>
            <input type="checkbox" onChange={handleDelivery} />
            
        </form>
       </div>

    )

}

export default PizzaForm
