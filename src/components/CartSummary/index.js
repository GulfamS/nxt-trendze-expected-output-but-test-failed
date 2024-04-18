import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import Payment from '../Payment'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <>
          <div className="summary-container">
            <h1 className="order-total">
              Order Total: <span className="price">Rs {total}/-</span>
            </h1>
            <p className="item-count">{cartList.length} Items in cart</p>
            <Popup
              model
              trigger={
                <button type="button" className="check-btn">
                  Checkout
                </button>
              }
              position="top-left"
            >
              {close => <Payment close={close} />}
            </Popup>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
