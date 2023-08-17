import  { useState } from 'react';
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import { toast } from 'react-toastify';

import { db, storage } from '~/firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const options = [
    {
        value: 'chair',
        Name: 'Chair',
    },
    {
        value: 'sofa',
        Name: 'Sofa',
    },
    {
        value: 'mobile',
        Name: 'Mobile',
    },
    {
        value: 'watch',
        Name: 'Watch',
    },
    {
        value: 'wireless',
        Name: 'Wireless',
    },
];
const AddProducts = () => {
    const [enterTitle, setEnterTitle] = useState('');
    const [enterShortDesc, setEnterShortDesc] = useState('');
    const [enterDescription, setEnterDescription] = useState('');
    const [enterCategory, setEnterCategory] = useState();
    const [enterPrice, setEnterPrice] = useState('');
    const [enterProductImg, setEnterProductImg] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const addProduct = async (e) => {
        e.preventDefault();
        setLoading(true);
        // add product to the  firebase database
        try {
            const docRef = await collection(db, 'products');
            const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`);
            const uploadTask = uploadBytesResumable(storageRef, enterProductImg);
            uploadTask.on(
                storageRef,
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    return (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                },
                (error) => {
                    toast.error(error);
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await addDoc(docRef, {
                            productName: enterTitle,
                            shortDesc: enterShortDesc,
                            description: enterDescription,
                            category: enterCategory,
                            price: enterPrice,
                            imgUrl: downloadURL,
                        });
                    });
                },
            );
            setLoading(false);
            toast.success('Add products success..!');
            navigate('/dashboard/all-products');
        } catch (error) {
            setLoading(false);
            toast.error('product not added!');
        }
    };
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        {loading ? (
                            <h4 className="py-5">loading...</h4>
                        ) : (
                            <>
                                <h4 className="mb-5">Add Product</h4>
                                <Form onSubmit={addProduct}>
                                    <FormGroup className="form__group">
                                        <span>Product title</span>
                                        <Input
                                            type="text"
                                            placeholder="Double sofa"
                                            value={enterTitle}
                                            onChange={(e) => setEnterTitle(e.target.value)}
                                            required
                                        />
                                    </FormGroup>

                                    <FormGroup className="form__group">
                                        <span>Short description</span>
                                        <Input
                                            type="text"
                                            placeholder="Lorem..."
                                            value={enterShortDesc}
                                            onChange={(e) => setEnterShortDesc(e.target.value)}
                                            required
                                        />
                                    </FormGroup>

                                    <FormGroup className="form__group">
                                        <span>Description</span>
                                        <Input
                                            type="text"
                                            placeholder="Description....."
                                            value={enterDescription}
                                            onChange={(e) => setEnterDescription(e.target.value)}
                                            required
                                        />
                                    </FormGroup>

                                    <div className="d-flex align-items-center justify-content-between gap-5">
                                        <FormGroup className="form__group w-50 ">
                                            <span>Price</span>
                                            <Input
                                                type="number"
                                                placeholder="$100"
                                                value={enterPrice}
                                                onChange={(e) => setEnterPrice(e.target.value)}
                                                required
                                            />
                                        </FormGroup>

                                        <FormGroup className="form__group w-50">
                                            <span>Category</span>
                                            <Input
                                                type="select"
                                                value={enterCategory}
                                                onChange={(e) => setEnterCategory(e.target.value)}
                                                required
                                            >
                                                <option value="⬇️ Select a category ⬇️"> -- Select a category -- </option>
                                                {options.map((item,index) => (
                                                    <option key={index} value={item.value}>{item.Name}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </div>

                                    <div>
                                        <FormGroup className="form__group">
                                            <span>Product Image</span>
                                            <Input
                                                type="file"
                                                onChange={(e) => setEnterProductImg(e.target.files[0])}
                                                required
                                            />
                                        </FormGroup>
                                    </div>
                                    <button className="buy__btn" type="submit">
                                        Add product
                                    </button>
                                </Form>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AddProducts;
