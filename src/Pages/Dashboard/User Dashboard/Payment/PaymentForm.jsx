import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const PaymentForm = () => {
  const [error, setError] = useState();
  const stripe = useStripe();
  const elements = useElements();

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
        console.log(paymentMethod)
      setError("");
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
        Pay
      </button>
    </form>
  );
};

export default PaymentForm;
