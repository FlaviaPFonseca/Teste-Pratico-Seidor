$(function(){
  var operacao = "A"; //"A"=Adição; "E"=Edição
  var indice_selecionado = -1; //Índice do item selecionado na lista
  var tbFuncionarios = localStorage.getItem("tbFuncionarios");// Recupera os dados armazenados
  tbFuncionarios = JSON.parse(tbFuncionarios); // Converte string para objeto
  if(tbFuncionarios == null) // Caso não haja conteúdo, iniciamos um vetor vazio
  tbFuncionarios = [];
});

function Adicionar(){
  var Funcionarios = JSON.stringify({
      Codigo   : $("#txtCodigo").val(),
      Nome     : $("#txtNome").val(),
      CPF : $("#txtcpf").val(),
      Salário    : $("#txtSalário").val()
  });
  tbFuncionarios.push(Funcionarios);
  localStorage.setItem("tbFuncionarios", JSON.stringify(tbFuncionarios));
  alert("Registro adicionado.");
  return true;
}

function Editar(){
  tbFuncionarios[indice_selecionado] = JSON.stringify({
          Codigo   : $("#txtCodigo").val(),
          Nome     : $("#txtNome").val(),
          CPF : $("#txtCPF").val(),
          Salário   : $("#txtSalário").val()
      });//Altera o item selecionado na tabela
  localStorage.setItem("tbFuncionarios", JSON.stringify(tbFuncionarios));
  alert("Informações editadas.")
  operacao = "A"; //Volta ao padrão
  return true;
}

function Excluir(){
  tbFuncionarios.splice(indice_selecionado, 1);
  localStorage.setItem("tbFuncionarios", JSON.stringify(tbFuncionarios));
  alert("Registro excluído.");
}

function Listar(){
  $("#tblListar").html("");
  $("#tblListar").html(
      "<thead>"+
      "   <tr>"+
      "   <th></th>"+
      "   <th>Código</th>"+
      "   <th>Nome</th>"+
      "   <th>CPF</th>"+
      "   <th>Salário</th>"+
      "   </tr>"+
      "</thead>"+
      "<tbody>"+
      "</tbody>"
      );
  for(var i in tbFuncionarios){
      var cli = JSON.parse(tbFuncionarios[i]);
      $("#tblListar tbody").append("<tr>");
      $("#tblListar tbody").append("<td><img src='edit.png' alt='"+i+"'class='btnEditar'/><img src='delete.png' alt='"+i+"' class='btnExcluir'/></td>");
      $("#tblListar tbody").append("<td>"+cli.Codigo+"</td>");
      $("#tblListar tbody").append("<td>"+cli.Nome+"</td>");
      $("#tblListar tbody").append("<td>"+cli.CPF+"</td>");
      $("#tblListar tbody").append("<td>"+cli.Salário+"</td>");
      $("#tblListar tbody").append("</tr>");
  }
}

$("#frmCadastro").on("submit",function(){
  if(operacao == "A")
      return Adicionar();
  else
      return Editar();
});


$("#tblListar").on("click", ".btnEditar", function(){
  operacao = "E";
  indice_selecionado = parseInt($(this).attr("alt"));
  var cli = JSON.parse(tbFuncionarios[indice_selecionado]);
  $("#txtCodigo").val(cli.Codigo);
  $("#txtNome").val(cli.Nome);
  $("#txtcpf").val(cli.CPF);
  $("#txtSalário").val(cli.Salário);
$("#txtCodigo").attr("readonly","readonly");
  $("#txtNome").focus();
});

$("#tblListar").on("click", ".btnExcluir",function(){
  indice_selecionado = parseInt($(this).attr("alt"));
  Excluir();
  Listar();
});