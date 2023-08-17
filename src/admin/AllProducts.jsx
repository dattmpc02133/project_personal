import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { db } from '~/firebase.config';
import { doc, deleteDoc } from 'firebase/firestore';

import useGetData from '~/custom-hooks/useGetData';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const deleteProduct = async (id) => {
    await deleteDoc(doc(db, 'products', id));
    toast.success('Delete..!');
};

const AllProducts = () => {
    const { data: productsData } = useGetData('products');
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                       <Link className='btn btn-primary' to={'/dashboard/add-products'}>Add</Link>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productsData?.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img src={item.imgUrl} alt="" />
                                        </td>
                                        <td>{item.productName}</td>
                                        <td>{item.category}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    deleteProduct(item.id);
                                                }}
                                                className="btn btn-danger"
                                            >
                                                Delete
                                            </button>  &nbsp;
        
                                            <Link to={'/dashboard/edit/'+item.id}>Edit</Link>
                                        </td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AllProducts;
