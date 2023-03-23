import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new TypeError('amount must be number');
    if (!(currency instanceof Currency)) throw new TypeError('currency must be an instance of Currency'); /* eslint-disable-line */
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') throw new TypeError('amount must be number');
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) throw new TypeError('currency must be an instance of Currency'); /* eslint-disable-line */
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw new TypeError('amount must be number');
    if (typeof conversionRate !== 'number') throw new TypeError('conversionRate must be number');
    return amount * conversionRate;
  }
}
