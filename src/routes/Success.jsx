import "./success.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { userRequest } from "../httpService";
import { resetCart } from "../redux/cartRedux";
import { GrStatusGood } from "react-icons/gr";

const Success = () => {
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser.payload);
  const [orderId, setOrderId] = useState(null);
  const [address, setAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const handleDestination = async (e) => {
    e.preventDefault();
    try {
      const res = await userRequest.post("order", {
        id: currentUser?._id,
        parcels: cart.products.map(({ _id, quantity }) => ({
          parcelId: _id,
          quantity: quantity,
        })),
        amount: cart.total,
        address: address,
      });
      resetCart();
      setOrderId(res.data._id);
      setTimeout(function () {
        window.location.replace("/");
      }, 10000);
    } catch {}
  };
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="success">
      <div>
        <h1 className="successTitle">Complete Your Order</h1>
        <form className="successForm">
          <div className="successItem">
            <div className="successItem">
              {orderId && "Success! Please take a screenshot within 10seconds"}
            </div>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="full name..."
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="successItem">
            <label>Order Destination</label>
            <input
              type="text"
              placeholder="destination..."
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button className="successButton" onClick={handleDestination}>
            complete
          </button>
        </form>
        <div className="successItem">
          {orderId
            ? `Distinguished Customer ${fullName}, Thank you, your Order has been made successfully!  Your Tracking ID is ${orderId}, you will recieve an  email to ${currentUser.email} soon!`
            : `Your order is being prepared... please provide the neccessary details to complete your request`}

          {orderId && (
            <>
              <GrStatusGood />
              <button className="successButton" onClick={handleClick}>
                Home
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Success;
