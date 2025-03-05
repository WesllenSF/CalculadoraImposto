"use strict";
var loja;
(function (loja) {
    class Produto {
        get nome() {
            return this._nome;
        }
        set nome(nome) {
            this._nome = nome;
        }
        get preco() {
            return this._preco;
        }
        set preco(preco) {
            this._preco = preco;
        }
        get imposto() {
            return this._imposto;
        }
        set imposto(imposto) {
            this._imposto = imposto;
        }
        calcularPrecoFinal(preco) {
            return preco + (this._imposto * this._preco / 100);
        }
    }
    loja.Produto = Produto;
})(loja || (loja = {}));
