import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY_PK);
  return (
    <div className="mx-auto">
      <h2 className="text-center my-10 text-2xl font-bold text-white">
        Payment
      </h2>
      <hr />
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
    </div>
  );
};

export default Payment;
