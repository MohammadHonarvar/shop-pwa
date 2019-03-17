import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shop-button.js';
import './shop-common-styles.js';
import './shop-form-styles.js';

class ShopCart extends PolymerElement {
  static get template() {
    return html`
    <style include="shop-common-styles shop-button shop-form-styles">

      .list {
        margin: 40px 0;
      }

      .checkout-box {
        font-weight: bold;
        text-align: left;
        margin-right: 10px;
      }

      .subtotal {
        margin: 0 64px 0 24px;
      }

      @media (max-width: 767px) {

        .subtotal {
          margin: 0 24px 0 0;
        }

      }
    </style>

    <div class="main-frame">
      <div class="subsection" visible$="[[!_hasItems]]">
        <p class="empty-cart"><iron-icon icon="shopping-cart"></iron-icon> شما خالی است!</p>
      </div>
      <div class="subsection" visible$="[[_hasItems]]">
        <header>
          <h1>سبد شما</h1>
          <span>([[_getPluralizedQuantity(cart.length)]])</span>
        </header>
        <div class="list">
          <dom-repeat items="[[cart]]" as="entry">
            <template>
              <shop-cart-item entry="[[entry]]"></shop-cart-item>
            </template>
          </dom-repeat>
        </div>
        <div class="checkout-box">
          جمع کل: <span class="subtotal">[[_formatTotal(total)]]</span>
          <shop-button responsive>
            <a href="/checkout">پرداخت</a>
          </shop-button>
        </div>
      </div>
    </div>
    `;
  }
  static get is() { return 'shop-cart'; }

  static get properties() { return {

    total: Number,

    cart: Array,

    visible: {
      type: Boolean,
      observer: '_visibleChanged'
    },

    _hasItems: {
      type: Boolean,
      computed: '_computeHasItem(cart.length)'
    }

  }}

  _formatTotal(total) {
    return isNaN(total) ? '' : total + ' تومان';
  }

  _computeHasItem(cartLength) {
    return cartLength > 0;
  }

  _getPluralizedQuantity(quantity) {
    return quantity + ' ' + (quantity === 1 ? 'آیتم' : 'عدد');
  }

  _visibleChanged(visible) {
    if (visible) {
      // Notify the section's title
      this.dispatchEvent(new CustomEvent('change-section', {
        bubbles: true, composed: true, detail: { title: 'سبد شما' }}));
    }
  }

}

customElements.define(ShopCart.is, ShopCart);
