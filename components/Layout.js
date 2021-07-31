import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Theader from './Theader';

const Layout = (props) => {

    return (

        <Container style={{ marginTop:'10px'}}>
            <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
                </Head>
            <Theader/>
        {props.children}
        </Container>
    );

};

export default Layout;