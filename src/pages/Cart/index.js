import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    })),
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0),
    ),
  );
  const dispatch = useDispatch();
  const decrement = product => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  };
  const increment = product => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  };
  return (
    <Container>
      {cart.length > 0 ? (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>
                  <td>
                    <div>
                      <button type='button'>
                        <MdRemoveCircleOutline
                          size={20}
                          color='#7159c1'
                          onClick={() => decrement(product)}
                        />
                      </button>
                      <input type='number' readOnly value={product.amount} />
                      <button type='button'>
                        <MdAddCircleOutline
                          size={20}
                          color='#7159c1'
                          onClick={() => increment(product)}
                        />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <button type='button'>
                      <MdDelete
                        size={20}
                        color='#7159c1'
                        onClick={() =>
                          dispatch(CartActions.removeFromCart(product.id))
                        }
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>
          <footer>
            <button type='button'>Finalizar pedido</button>
            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </>
      ) : (
        <div>You still dont have any products</div>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0),
  ),
});
