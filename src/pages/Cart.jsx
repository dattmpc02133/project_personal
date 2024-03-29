import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '~/components/Helmet/Helmet';
import CommonSection from '~/components/UI/CommonSection';
import '~/styles/cart.css';

import { motion } from 'framer-motion';
import { cartActions } from '~/redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state?.cart?.cartItems);
    const handleDelete = (id) => {
        dispatch(cartActions.deleteItem(id));
    };
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    return (
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg="9">
                            {cartItems.length === 0 ? (
                                <h2 className="fs-4 text-center">No item added to the cart</h2>
                            ) : (
                                <table className="table bordered">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <img src={item.imgUrl} alt="" />
                                                </td>
                                                <td>{item.productName}</td>
                                                <td>${item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>
                                                    <motion.i
                                                        whileTap={{ scale: 1.2 }}
                                                        className="ri-delete-bin-line"
                                                        onClick={(e) => e.preventDefault(handleDelete(item.id))}
                                                    ></motion.i>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </Col>
                        <Col lg="3">
                            <div>
                                <h6 className="d-flex align-items-center justify-content-between">
                                    Subtotal
                                    <span className="fs-4 fw-bold">${totalAmount}</span>
                                </h6>
                            </div>
                            <p className="fs-6 mt-2">taxes and shipping will calculate in the checkout</p>
                            <div>
                                <button className="buy__btn w-100">
                                    <Link to="/checkout">Checkout</Link>
                                </button>
                                <button className="buy__btn w-100  mt-2">
                                    <Link to="/shop">Continue Shopping</Link>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Cart;
