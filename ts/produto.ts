namespace loja{
    
    export class Produto{
        private _nome: string;
        private _preco: number;
        private _imposto: number;

        get nome(){
            return this._nome;
        }

        set nome(nome: string){
            this._nome=nome;
        }

        get preco(){
            return this._preco;
        }

        set preco(preco: number){
            this._preco = preco;
        }

        get imposto(){
            return this._imposto;
        }
        set imposto(imposto:number){
            this._imposto = imposto;
        }

        public calcularPrecoFinal(preco:number){
            return preco + (this._imposto * this._preco / 100) ;
        }

    }
}