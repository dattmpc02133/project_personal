import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import Helmet from '~/components/Helmet/Helmet';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';
import { auth } from '~/firebase.config';
import { storage } from '~/firebase.config';
import { db } from '~/firebase.config';
import { toast } from 'react-toastify';
import '~/styles/login.css';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const signup = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const storageRef = ref(storage, `images/${Date.now() + username}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
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
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        //    update user profile
                        await updateProfile(user, {
                            displayName: username,
                            photoURL: downloadURL,
                        });
                        // store user data in firebase database
                        await setDoc(doc(db, 'users', user.uid), {
                            uid: user.uid,
                            displayName: username,
                            email,
                            photoURL: downloadURL,
                        });
                    });
                },
            );
            setLoading(false);
            toast.success('Account created');
            navigate('/login');
        } catch (error) {
            setLoading(false);
            toast.error('something went wrong');
        }
    };
    return (
        <Helmet title="Signup">
            <section>
                <Container>
                    <Row>
                        {loading ? (
                            <Col lg="12" className="text-center">
                                <h5 className="fs-bold">Loading....</h5>
                            </Col>
                        ) : (
                            <Col lg="6" className="m-auto text-center">
                                <h3 className="fw-bold mb-4">Signup</h3>
                                <Form className="auth__form" onSubmit={signup}>
                                    <FormGroup className="form__group">
                                        <Input
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </FormGroup>
                                    <FormGroup className="form__group">
                                        <Input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            placeholder="Enter your email"
                                        />
                                    </FormGroup>
                                    <FormGroup className="form__group">
                                        <Input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            placeholder="Enter your password"
                                        />
                                    </FormGroup>
                                    <FormGroup className="form__group">
                                        <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
                                    </FormGroup>
                                    <button type="submit" className="buy__btn auth__btn">
                                        Create an account
                                    </button>
                                    <p>
                                        Already have an account? <Link to="/login">Login</Link>
                                    </p>
                                </Form>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Signup;
