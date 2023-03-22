import React from "react";
import{Menu, Container} from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
      <Menu inverted>
       
 <Container >
    <Link to='/'>
<Menu.Item name="star wars Api Home"></Menu.Item>
</Link>
<Link to='/films/'>
<Menu.Item name="films"></Menu.Item>
</Link>
<Link to='/people/'>
<Menu.Item name="people"></Menu.Item>
</Link>
<Link to='/planets/'>
<Menu.Item name="planets"></Menu.Item>
</Link>
<Link to='/species/'>
<Menu.Item name="species"></Menu.Item>
</Link>
<Link to='/starships/'>
<Menu.Item name="starships"></Menu.Item>
</Link>
<Link to='/vehicles/'>
<Menu.Item name="vehicles"></Menu.Item>
</Link>

</Container>
      </Menu>
    )
}
