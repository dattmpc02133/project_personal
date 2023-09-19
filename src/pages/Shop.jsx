import React, { useEffect, useState } from 'react';
import CommonSection from '~/components/UI/CommonSection';
import Helmet from '~/components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '~/styles/shop.css';
// import products from '~/assets/data/products';
import ProductsList from '~/components/UI/ProductsList';
import useGetData from '~/custom-hooks/useGetData';
const Shop = () => {
    const { data: productsList } = useGetData('products');
    const [productsData, setProductsData] = useState();
    useEffect(() => {
        if (productsList && productsList.length > 0) {
            setProductsData(productsList);
        }
    }, [productsList]);
    const handleFilter = (e) => {
        const filterValue = e.target.value;
        if (filterValue && filterValue === 'all') {
            setProductsData(productsList);
            return;
        }
        if (filterValue) {
            const filteredProducts = productsList.filter((item) => item.category === filterValue);
            setProductsData(filteredProducts);
        }
    };
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        const searchedProducts = productsList.filter((item) =>
            item.productName.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        setProductsData(searchedProducts);
    };
    return (
        <Helmet title="Shop">
            <CommonSection title="Products" />
            <section>
                <Container>
                    <Row>
                        <Col lg="3" md="6">
                            <div className="filter__widget">
                                <select onChange={handleFilter}>
                                    <option value="all">Filter By Category</option>
                                    <option value="sofa">Sofa</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="chair">Chair</option>
                                    <option value="watch">Watch</option>
                                    <option value="wireless">Wireless</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="3" md="6" className="text-end">
                            <div className="filter__widget">
                                <select>
                                    <option>Sort By</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="6" md="12">
                            <div className="search__box">
                                <input type="text" placeholder="Search....." onChange={handleSearch} />
                                <span>
                                    <i className="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    <Row>
                        {productsData?.length === 0 ? (
                            <h1>No products are found</h1>
                        ) : (
                            <ProductsList data={productsData} />
                        )}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Shop;
