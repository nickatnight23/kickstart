import React from 'react';
import { Container } from 'semantic-ui-react';
import Theader from './Theader';

const Layout = (props) => {

    return (

        <Container style={{ marginTop:'10px'}}>
            <Theader/>
        {props.children}
        </Container>
    );

};

export default Layout;