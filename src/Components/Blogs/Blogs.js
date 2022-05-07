import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='w-75 mx-auto mt-5 mb-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between javascript and nodejs.</Accordion.Header>
                    <Accordion.Body>
                        <span className='fw-bold'>Javascript :</span>
                        <li>javascript is a lightweight, object-oriented scripting language.</li>
                        <li>It is used to build dynamic HTML,pages with interactive effects on a webpage,mobile applications,games,server applications etc. </li>
                        <li>Javascript is used to create content and handle HTTP requests.</li>
                        <span className='fw-bold'>Nodejs :</span>
                        <li>Nodejs is not a language.It is a cross platform,open-source,server side runtime environment.</li>
                        <li>It facilitates javascript to be run on a server. </li>
                        <li>Nodejs helps to create backend services.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>When should we use nodejs and when should we use mongodb?</Accordion.Header>
                    <Accordion.Body>
                        <span className='fw-bold'>Nodejs :</span>
                        <p>
                            If a front-end developer know javascript and he can reuse his javascript skills then he can use nodejs to put his API.Nodejs connect those clint side and batabase and those this side can put easily all his APIs.So to connect clint side and batabase we can use nodejs.
                        </p>
                        <span className='fw-bold'>Mongodb :</span>
                        <p>
                            Mongobd is a batabase where we can put our APIs and load them whenever we want.When we have unstructured or structured data with the potential for rapid growth we should use mongodb.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Differences between sql and nosql databases.</Accordion.Header>
                    <Accordion.Body>
                    <span className='fw-bold'>SQL :</span>
                    <p>SQL stand for Structured Qurty Language and used in relational database managemant system.Here structred data can be stored in tables and the schemas are static,rigid and bound to relationships.</p>
                    <span className='fw-bold'>NoSQL :</span>
                    <p>NoSQL is used for non-relational,distributed database system.Here json data, unstructred data can be stored.and the schemas are dynamic,non-rigid and flexible.</p>
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        <p>JWT is for authorization not for authentication it instead of actually using cookies it uses a JSON web token which is what JWT stands for to do the authorization.</p>
                        <p>JWT create a secret key and this key is private so in the client side if a user is not varify then the user cant get the proper information from that website.When we receive a JWT from the client,we can verify that JWT with this that secret key stored on the server.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;