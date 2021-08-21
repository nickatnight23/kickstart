import React from 'react';
import {Header, Menu } from 'semantic-ui-react';
import {Link} from '../routes';

const  Theader = () => {
    return(

        <Menu style={{ marginTop: '10px'}}>

          <link route= "/">
            <a className="item">
              Crowd Coin
            </a>
          </link>
        
            <Menu.Menu position="right">
               
            <Menu.Item> Campaigns  </Menu.Item>
            

             
            <Menu.Item> +</Menu.Item>
             
             </Menu.Menu>
        </Menu>

    );
}

export default Theader;