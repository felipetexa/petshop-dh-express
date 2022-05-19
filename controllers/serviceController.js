const serviceController = {
  index: (req, res) => {  
    const servicos = [ 
      {
      nome: 'Banho e Tosa',
      preco: 'R$ 50,00',
      ativo: false,
      descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      imagem: 'https://1.bp.blogspot.com/-Wq2lcq9_a4I/Tc2lLWOkNVI/AAAAAAAABVM/Wao0rm-vWe4/s1600/gatinho-5755.jpg'
    },
    {
      nome: 'Consulta veterinário',
      preco: 'R$ 250,00',
      ativo: true,
      descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      imagem: 'https://blog.unyleya.edu.br/wp-content/uploads/2019/10/GettyImages-885571364-1.jpg'
    },
    {
      nome: 'Vacinação',
      preco: 'R$ 120,00',
      ativo: true,
      descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      imagem: 'https://thumbs.dreamstime.com/z/veterin%C3%A1rio-com-seu-c%C3%A3o-shih-tzu-96625674.jpg'
    }
  ]
    res.render('servicos', { servicos })
  }
};

module.exports = serviceController;