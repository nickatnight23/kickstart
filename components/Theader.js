import React from 'react';
import {Header, Menu } from 'semantic-ui-react';

const  Theader = () => {
    return(

        <Menu>
          
          <Menu.Item> Crowd Coin</Menu.Item>
            

            <Menu.Menu position="right">
               
            <Menu.Item> Campaigns  </Menu.Item>
            

             
            <Menu.Item> +</Menu.Item>
             
             </Menu.Menu>
        </Menu>

    );
}

export default Theader;