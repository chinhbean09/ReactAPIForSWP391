import React from 'react';
import MenuItem from "../UI/MenuItem/MenuItem";
import PropTypes from 'prop-types';

const MenuComponent = (props) => {
    return (
        <React.Fragment>
            <MenuItem linkTo={'/all'}>Stores</MenuItem>
            <MenuItem linkTo={'/category/men'}>Service</MenuItem>
            <MenuItem linkTo={'/category/women'}>Join Us</MenuItem>
            <MenuItem linkTo={'/cart'}>
                Cart <span className="badge badge-light">{props.cartCount}</span>
            </MenuItem>
            <MenuItem linkTo={'/sale'}>Sign Up</MenuItem>
            <MenuItem linkTo={'/category/kids'}>Login</MenuItem>
        </React.Fragment>
    )
};

MenuComponent.propTypes = {
    cartCount: PropTypes.number
};

export default MenuComponent;
