	function dados(eleDiv, eleInp){
			eleInp.addEventListener("keyup", function(){
				eleDiv.innerText = this.value;
			});
		}

		styling = {
			estilo(objId, tipoEstilo, valRef){
				objId.style.tipoEstilo = valRef;
			}
		}

		var funcao = document.getElementById('funcao');
		var funcaoBtn = document.getElementById('funcaoValor');
		funcao.innerText = "cargo";

		dados(funcao, funcaoBtn);


		var nome = document.getElementById('nome');
		var nomeBtn = document.getElementById('nomeValor');
		//nome.innerText = "nome";

		dados(nome, nomeBtn);

		/*nomeBtn.addEventListener("click", function(){
			alert("Por favor, preencha somente com o nome e sobrenome.");
		});*/

		var setor = document.getElementById('setor');
		var setorBtn = document.getElementById('setorValor');
		setor.innerText = "setor";

		dados(setor, setorBtn);
		
		var celular = document.getElementById('celular');
		var celularBtn = document.getElementById('celularValor');
		celular.innerText = "Celular";

		dados(celular, celularBtn);
		

		celularBtn.addEventListener("keydown", function(){
			switch(this.value.length){
				case 0:
					this.value = this.value.concat("(");
					break;
				case 3:
					this.value = this.value.concat(")");
					break;
				case 10:
					this.value = this.value.concat("-");
					break;
			}	

			if (celularBtn.value.length == 4) {this.value = this.value.concat(" ");}
		});



		 var telefone = document.getElementById('telefone');
		 var telefoneValor = document.getElementById('telefoneValor');

		 telefoneValor.addEventListener("keyup", function(){
		 	telefone.innerText = this.value;
		 });

		 telefoneValor.addEventListener("keydown", function(){
			switch(this.value.length){
				case 0:
					this.value = this.value.concat("(");
					break;
				case 3:
					this.value = this.value.concat(")");
					break;
				case 10:
					this.value = this.value.concat("-");
					break;
			}	

			if (this.value.length == 4) {this.value = this.value.concat("  ");}
		});



		 var email = document.getElementById('email');
		 var emailValor = document.getElementById('emailValor');

		 dados(email, emailValor);



		var definicao = document.getElementsByClassName('def');

		for(var i = 0; i <= definicao.length; i++){
			definicao[i].style.fontFamily = "'Raleway', sans-serif";
			definicao[i].style.letterSpacing = "-1px";
			definicao[i].style.color = "#808080";
		}

		var btnButton = document.getElementById("btnButton");
		var assinatura = document.getElementById("assinatura");
		var imagem = document.getElementById("imagem");
		var recebe = document.getElementById("recebe");


		btnButton.addEventListener("click", function(){

			html2canvas(assinatura).then(canvas => {
				recebe.appendChild(canvas);
			});
		});
