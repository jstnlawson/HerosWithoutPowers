import React, { useState } from 'react';
import axios from 'axios'

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
        <>
            <form onSubmit={(event) => addCustomer(event)}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={handleNameChange} />
                <br></br>
                <input
                    type="text"
                    placeholder="StreetAddress"
                    onChange={handleAddressChange} />
                <br></br>
                <input
                    type="text"
                    placeholder="City"
                    onChange={handleCityChange} />
                <br></br>
                <input
                    type="text"
                    placeholder="Zip"
                    onChange={handleZipChange} />
                <br />
                <input type="checkbox" onChange={handlePickUp}>Pickup</input>
                <input type="checkbox" onChange={handleDelivery}>Delivery</input>
                <button type="submit">Next</button>
            </form>
        </>
    )

}

export default PizzaForm
