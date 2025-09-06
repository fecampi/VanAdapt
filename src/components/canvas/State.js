export default class State {
  constructor(initialValue) {
    this._value = initialValue;
    this.listeners = []; // Lista de funções para notificar mudanças
  }

  set val(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this.notify(); // Notifica todos os ouvintes
    }
  }

  get val() {
    return this._value;
  }

  subscribe(listener) {
    this.listeners.push(listener); // Adiciona um ouvinte
  }

  notify() {
    this.listeners.forEach((listener) => listener(this._value)); // Notifica todos
  }
}
