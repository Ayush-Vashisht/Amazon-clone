import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import {  Link,useNavigate } from "react-router-dom";
import axios from "./axios";
import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeded,setSucceded]= useState(false);
  const [processing , setProcessing]= useState("");

  const [clientSecret, setClientSecret]=useState(false);

  const navigate=useNavigate();

  useEffect(()=>{
        // generate a speceial stripe secret which allows to charge customer
        const getClientSecret =async()=>{
            const response=await axios({
                method:"post",
                // stripe expects total amount in currency sub units
                url:`/payments/create?total=${getBasketTotal(basket)*1000}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
  },[basket])

  const handleSubmit = async (event)=> {
    event.preventDefault();
    setProcessing(true);

    const payload= await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:elements.getElement(CardElement)
        }
    }).then(({paymentIntent})=>{
        // payment Intent=payment confirmation
        setSucceded(true);
        setError(null);
        setProcessing(false);

        navigate.replace("/orders");
    })
  };

  const handleChange = (event) => {
    // listen for changes in the card elements and display the errors as the customers type their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/Checkout">{basket?.length} items)</Link>
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123, React lane</p>
            <p>India</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Reviews items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal ({basket.length} items):{" "}
                        <strong>{value}</strong>
                      </p>
                      <small className="subtotal__gift">
                        <input type="checkbox" />
                        This order conatins a gift.
                      </small>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={disabled||processing||succeded}>
                    <span>{processing?<p>"Processing</p>:"Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
