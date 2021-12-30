export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto("Camiseta", 49.9);
const carrinho = new CarrinhoDeCompras();
carrinho.inserirProduto(produto1, produto1);
console.log(carrinho.valorTotal());
console.log(carrinho.quantidadeProdutos());
