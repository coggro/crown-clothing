import React from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import CustomButton from '../CustomButton/CustomButton.component'
import CartItem from '../CartItem/CartItem.component'

import './CartDropdown.styles.scss'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems })

export default withRouter(connect(mapStateToProps)(CartDropdown)
