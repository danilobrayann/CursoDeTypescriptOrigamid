function PreencherDados(dados:{
    nome: string;
    preco:number;
    teclado: boolean;

}){
    document.body.innerHTML +`
    
    <div>
    <h2></h2>Nome: ${dados.nome}</h2>
    <p>${dados.preco}</p>
    <p>Iclui Teclado: ${dados.teclado ? 'sim' : 'não'}</p>
    </div>
    
    `;
}

PreencherDados({
    nome: 'Notebook',
    preco: 3000,
    teclado: true
})