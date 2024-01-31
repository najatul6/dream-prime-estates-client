import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useSecureServer from "../../../../Hooks/useSecureServer";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ data }) => {
  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const secureServer = useSecureServer();
  const {
    offer_price,
    property_image,
    agent_name,
    agent_email,
    property_location,
    property_title,
    user_email,
    user_name,
    _id,
  } = data;

  const navigate = useNavigate();

  useEffect(() => {
    secureServer.post("/paymentIntent", { offer_price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [secureServer, offer_price]);

  const handlepayment = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
    }

    // Payment Confirm
    const { paymentIntent, error: ErrorMsg } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: data?.user_name || "anonymous",
            email: data?.user_email || "anonymous",
          },
        },
      }
    );
    if (ErrorMsg) {
      setError("confirm Error");
    } else {
      if (paymentIntent.status === "succeeded") {
        Swal.fire({
          position: "top",
          icon: "success",
          title: `Your Transaction Id <br/> ${paymentIntent.id}`,
          showConfirmButton: false,
          timer: 1500,
        });
        const paidProperties = {
          offer_price,
          property_image,
          agent_name,
          agent_email,
          property_location,
          property_title,
          user_email,
          user_name,
          id: _id,
          status: "paid",
          transaction_Id: paymentIntent.id,
          date: new Date(),
        };
        const res = await secureServer.post("/BoughtProperty", paidProperties);
        if (res.data.acknowledged) {
          secureServer.delete(`/offeredItem/${_id}`).then((res) => {
            if (res.data.acknowledged) {
              navigate("/dashboard/propertyBought");
            }
          });
        }
      }
    }
  };
  return (
    <form
      onSubmit={handlepayment}
      className="w-3/4 mx-auto p-10 my-10 transition-all"
    >
      <CardElement
        className="mb-5 border-2 rounded-xl py-5 px-5"
        options={{
          style: {
            base: {
              fontSize: "20px",
              color: "#FC0",

              "::placeholder": {
                color: "#FC0",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="my-5 text-red-600 font-bold">{error}</p>
      <button
        className="btn border border-white bg-transparent duration-500 text-xl font-bold mt-5 w-full hover:bg-[#FC0] text-white"
        type="submit"
        disabled={!stripe}
      >
        Pay <span className="text-red-600"> $ {offer_price}</span>
      </button>
    </form>
  );
};

PaymentForm.propTypes = {
  data: PropTypes.any,
  offer_price: PropTypes.any,
};

export default PaymentForm;
