//Aqui começa o java da página index da tabela //
document.addEventListener("DOMContentLoaded", function() {
    // Dados dos animais
    var animais = [
        { tipo: "Cachorro", porte: "Pequeno/Médio", peso: "1kg-25kg" },
    { tipo: "Gato", porte: "Pequeno ", peso: "1kg-5kg" },
        { tipo: "Coelho", porte: "Pequeno", peso: "5kg" }
        
    ];

    var tabela = document.getElementById("animal-table").getElementsByTagName('tbody')[0];

    // Preenchendo a tabela com os dados dos animais
    for (var i = 0; i < animais.length; i++) {
        var animal = animais[i];
        var row = tabela.insertRow(i);
        var tipoCell = row.insertCell(0);
        var porteCell = row.insertCell(1);
        var pesoCell = row.insertCell(2);

        tipoCell.innerHTML = animal.tipo;
        porteCell.innerHTML = animal.porte;
        pesoCell.innerHTML = animal.peso;
    }
});
// aqui inicia js motorista //
document.getElementById('driverForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Coletando os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var carType = document.getElementById('carType').value;
    var licensePlate = document.getElementById('licensePlate').value;
    
    // Validando se todos os campos foram preenchidos
    if (name && email && phone && carType && licensePlate) {
      // Aqui você pode enviar os dados para o backend ou realizar qualquer outra ação necessária
      console.log('Nome:', name);
      console.log('Email:', email);
      console.log('Telefone:', phone);
      console.log('Tipo de Carro:', carType);
      console.log('Placa do Carro:', licensePlate);
      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
  function cnpj(v){
    v=v.replace(/\D/g,"")                           //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro dígitos
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
    v=v.replace(/\.(\d{3})(\d)/,".$1/$2")           //Coloca uma barra entre o oitavo e o nono dígitos
    v=v.replace(/(\d{4})(\d)/,"$1-$2")              //Coloca um hífen depois do bloco de quatro dígitos
    return v
}

function cpf(v){
    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v
}
// script pet 
document.getElementById('ownerPetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Coletando os valores dos campos do formulário
    var ownerName = document.getElementById('ownerName').value;
    var ownerEmail = document.getElementById('ownerEmail').value;
    var ownerPhone = document.getElementById('ownerPhone').value;
    var petName = document.getElementById('petName').value;
    var petType = document.getElementById('petType').value;
    var petBreed = document.getElementById('petBreed').value;
    var petAge = document.getElementById('petAge').value;
    
    // Validando se todos os campos foram preenchidos
    if (ownerName && ownerEmail && ownerPhone && petName && petType && petBreed && petAge) {
      // Aqui você pode enviar os dados para o backend ou realizar qualquer outra ação necessária
      console.log('Nome do Tutor:', ownerName);
      console.log('Email do Tutor:', ownerEmail);
      console.log('Telefone do Tutor:', ownerPhone);
      console.log('Nome do Pet:', petName);
      console.log('Tipo de Pet:', petType);
      console.log('Raça do Pet:', petBreed);
      console.log('Idade do Pet:', petAge);
      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
  function validaPlaca(placa) {
    const regex = /^[A-Z]{3}[0-9]{4}$/;
    return regex.test(placa);
}
{
console.log(validaPlaca("ABC1234")); // retorna true
console.log(validaPlaca("abc1234")); // retorna false
}