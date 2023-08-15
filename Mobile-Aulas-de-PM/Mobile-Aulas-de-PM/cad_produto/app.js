class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    adicionar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            this.adicionarAoArray(produto);
        }
        this.listarTabela();

        this.limparCampos();
    }

    limparCampos() {
        document.getElementById('nomeproduto').value = '';
        document.getElementById('precoproduto').value = '';
    }

    listarTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_preco = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].precoProduto;

            td_id.classList.add('center');


        }
    }

    adicionarAoArray(produto){
        this.arrayProdutos.push(produto);
        this.id++;
       
    }

    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('nomeproduto').value;
        produto.precoProduto = document.getElementById('precoproduto').value;

        return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if(produto.nomeProduto == '') {
            msg += '- Informe o nome do produto \n';
        }

        if(produto.precoProduto == '') {
            msg += '- Informe o preço do produto \n';
        }

        if(msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    excluir() {
       
       
    }

}

var produto = new Produto();