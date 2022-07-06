enum Profissao {
    Atriz,
    Padeiro
  }
  
  interface PessoaI {
    nome: string,
    idade: number,
    profissao: Profissao
  }
  
  let pessoa1: PessoaI = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
  }
  
  let pessoa2: PessoaI = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
  }
  
  let pessoa3: PessoaI = {
      nome: "laura",
      idade: 32,
      profissao: Profissao.Atriz
  };
  
  let pessoa4: PessoaI = {
      nome: "carlos",
      idade: 19,
      profissao: Profissao.Padeiro
  }