# Teste-Pratico-Seidor
Teste Técnico Prático SEIDOR Front-End
Precisamos desenvolver um sistema web que permita-nos gerenciar nossos funcionários e o
cálculo de imposto de renda retido na fonte (IRRF) de cada um deles. Para isso construiremos
uma aplicação com as seguintes funcionalidades:
Cadastro de Funcionário:
• Campos devem ser informados manualmente
§ Nome
§ Cpf
§ Salário Bruto
§ Desconto da previdência
§ Número de dependentes
• Incluir um novo Funcionário
• Atualizar um Funcionário cadastrado
• Excluir um Funcionário cadastrado
• Listar os Funcionário cadastrados
A cada novo funcionário cadastrado, com base nas informações inseridas, o sistema deve
calcular o valor de salário base para cálculo do IR, o desconto IRRF e apresentar essas
informações na listagem dos funcionários cadastrados.
Salário Base IR = Salário bruto - Desconto da Previdência - Dedução por Dependente x
Quantidade de Dependentes
Desconto IRRF = Salário Base IR x Alíquota - Parcela a Deduzir
A tabela progressiva do IRRF que deve ser utilizada:
Dedução por dependente: R$ 164,56
Para testes, também foi disponibilizado um arquivo JSON com alguns exemplos de funcionários.
Base de cálculo Alíquota Parcela a deduzir do IRPF
Até R$ 1.903,98 Isento R$ 0,00
De R$ 1.903,99 até R$ 2.826,65 7,5% R$ 142,80
De R$ 2.826,66 até R$ 3.751,05 15% R$ 354,80
De R$ 3.751,06 até R$ 4.664,68 22,5% R$ 636,13
Acima de R$ 4.664,68 27,5% R$869,36
Teste Técnico Prático
Para referência, segue print de exemplo da listagem dos funcionários:
O que você deve entregar?
• O código fonte da sua aplicação, as instruções de como executar e testar a sua
aplicação. Deve ser entregue um link para um repositório git público (ex: Github,
Bitbucket, Gitlab, etc).
• Testes de unidade que garantam que seu código está funcionando corretamente.
O que será avaliado?
• Funcionalidades: sua aplicação cobre as funcionalidades que foram solicitadas?
• Estrutura do código: Se o código foi bem escrito, se está organizado, se é fácil de ler
(nomes de variáveis, funções, etc..) e quando/se for necessário, se existe um bom
comentário que explique um determinado ponto do código.
Observações:
• É necessário que o teste seja desenvolvido utilizando o framework React.js.
• É necessário utilizar o Redux para persistir os dados de funcionários
• É necessário utilizar o React Router para
• O prazo para resolução do teste é de 3 dias
• Teste desenvolvido em TypeScript será um diferencial
É importante que o projeto esteja funcional, mas não avaliaremos somente esse ponto no teste
prático então mesmo que não consiga terminar a solução, envie-nos seu trabalho.
Muito obrigado pelo seu tempo, participação e boa sorte
