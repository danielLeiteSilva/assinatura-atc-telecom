			var results = document.querySelectorAll("input");
			var botao = document.getElementById("botao");
			var aparecer = document.getElementById("aparecer");
			var fechar = document.getElementById("fechar")

			var download = document.getElementById("download")

			fechar.addEventListener("click", function() { window.close() })

			var img = document.getElementById("imagem")
			var base64 = `iVBORw0KGgoAAAANSUhEUgAAAZAAAABtCAYAAACPxDe/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB
			6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXM
			AAAsTAAALEwEAmpwYAABO0ElEQVR42u2dd5xdZZn4v+97zrl97sxk0ggJhJAACZAgEHoRBAEB6V0EVwV
			3V9ey69roVbp1V/1Z14bSmyiKtAQISYAQUknPpGfq7ae8z++Pc++duZlJQwTL+X4+Q4Y759z31Od536d
			CRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER
			ERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER
			ERERERERERERERERERERERERERERERERERERERERERERERERERERERERExFbwerrF7+mS9/o4IiJ2lkK
			hIPl8Pnp2/05R7/UBvJf4uU6pLFqMsh10LIFybMRxUE4Cy9HYw0cOen28XLfocgWpVPC8AEcZTKoJJx5
			DNbcMuo/p7hKvUEB5AcbzUX4FE/hQKKHahpAYP2GH7oW/uUMqr82iOHsG/rLluJu6CMq9WEqhkinskSN
			ITDmYzMknE9tt7A7fX+ntFa+zA0p5XC9AuS7aCzBBBQkMmCD8NzAYY8DSxGIxdOsw9NixOM3Z7Y7lrlg
			uQXcvOpnEiju4FtiVAL9cAd8lsdd4dKppp5/J0sJ5YvIF8D2CwCMWaAIFWmsCS6GVwtIOxGJIOoGdbcU
			ePvxtPfvr1qyVnp4ebNtGWRrLstC671+tdXi/TXidjB8gIvjV6ycieJ7H6N3G0NTUd64L5s0XpRTxeBy
			lFGW3wqhRo8hmt39dC4WCrF69Gkwoh0UEZWl22203UqmUAiiVSpLL5SiXy/i+Xz8uYwwASqn68dd+tyy
			LVDrBkLZh74icKBWK8tZbb7F02VusWrWKnp4eSqUSALFYjNbWVsbuPo6DDjqIMbvvtlNjbtiwQdxyBc/
			zCIKAIAjwPK9+jiJCEAT1800kEqRSKYYPH062pXmbY23cuFHWtq8hk8mQTqdJplPh/Vd9uymlUErVx3N
			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
			Bxi2TPvN0Ym27NNzRzZs3y3XXXEvcdvrZpvv+bioeRx559KCToZ7f/JpAB9TLEGGwfI0oF4UmUH49Gif
			iPSZ0QIACZdkoqxrsYDsoS4OlUdpCWQ5UlYGyNNqxwYlBIoFOpLGSCXQyjUqn0MkkKt2EzqRRzVl0Nov
			V1ITdPASdbYFUEisex2r++6248Xd74O8EhUJBalnwvu/XlUcQBPXseL9qPqv9bUsfihDNIN9LZBAfwp5
			77kkm09hbxXRtlOKr8zF2ECZU6b5ELC0a32gyk/dCD22M2sr1dsvSpUvrptKanwWquUhisfee40hlGxW
			I5LslP/v1MFw34m+Yfs+PUqGysC2U7YQKJRZD2TaWbYPtIHaYCa7tUMlYUVHYiIiIiIiIiIiIiIiIiIi
			IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi
			IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi
			IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi
			IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiHeB/w/BpLEGE0c7QAAAACF0RVh0Q3JlYXRpb24gVGl
			tZQAyMDA3OjA5OjI0IDE0OjAzOjA0t/UeHgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNS0wMi0yNFQxOTo
			xNToyNyswMTowMEdK0zIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTUtMDItMjRUMTk6MTU6MjcrMDE6MDA
			2F2uOAAAALXRFWHREZXNjcmlwdGlvbgBpbWFnZSBkZXNjcmlwdGlvbiAgICAgICAgICAgICAgICC7iHG
			DAAAAJHRFWHRTb2Z0d2FyZQBBZG9iZSBQaG90b3Nob3AgQ1MyIFdpbmRvd3O8NUnfAAAAAElFTkSuQmC
			C`

			img.src = "data:image/png;base64, " + base64

			async function createAssignature(){
				aparecer.style.display = "block";
				var canvas = await html2canvas(document.querySelector("#assinatura"), {
					allowTaint: false,
                	useCORS: true
				})
				if(document.getElementById("caixa").firstChild){
					document.getElementById("caixa").removeChild(document.getElementById("caixa").firstChild)
				}

				document.getElementById("caixa").appendChild(canvas);
				
				var image = canvas.toDataURL('image/png')

				caixa.style.display = "block";
				document.getElementById("download").style.display = "block";

				return image
			}

			function validateInputsIsEmpty(){
				
				if(results[0].value.length === 0){
					return {result: false, message: "Preencha todos os campos"}
				}else if (results[0].value.length < 4) { 
					return {result: false, message: "Quantidade de caracteres menor que o permitido"}
				}else if(results[0].value.length >= 4){
					return {result: true, message: "Todas as regras de negocio preenchidas"}
				}
			
				return {result: false, message: "Not Possible create element"}
			}

			var image = ""

			botao.addEventListener("click", async function(){
				var isElementsEmpty = validateInputsIsEmpty()
				console.log(isElementsEmpty.message)
				image = isElementsEmpty.result ? await createAssignature() : alert("Not Possible create element")
			});

			var nome = document.getElementById('nome');
			var nomeInput = document.getElementById('nomeValor');
			nome.innerText = "Nome";
			var nomeFuncionario = ""
			nomeInput.addEventListener("input", function(element) {
				if(nomeInput.value == "") {
					nome.innerText = "Nome"
				}else{
					nome.innerText = element.target.value
					nomeFuncionario = element.target.value
				}
			})

			download.addEventListener("click", function(event) {
				event.preventDefault()
			
				var a = document.createElement('a');
				a.href = image.replace("image/jpeg", "image/octet-stream");
				var nome = nomeFuncionario.replace(" ", "-").toLowerCase()
				a.download = `assinatura-${nome}.jpg`;
				a.click();
			})									