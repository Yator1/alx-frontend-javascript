export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  static validateName(name) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }
    return name;
  }

  static validateCode(code) {
    if (typeof code !== "string") {
      throw new TypeError("Name must be a string");
    }
    return code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateName(newName);
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = this.validateCode(newCode);
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
