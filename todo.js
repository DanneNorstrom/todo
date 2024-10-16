	const input1 = document.querySelector("#vara")	

	const out1 = document.querySelector("#output")

	button1.addEventListener("click", myAddItemFunction)
	

	function myAddItemFunction() {
		const para = document.createElement('p')
		para.innerHTML = input1.value
	
		para.addEventListener("click", myProcessedItemFunc)
		para.addEventListener("dblclick", myRemoveItemFunc)


		out1.appendChild(para)
	}

	function myProcessedItemFunc() 
	{
  		this.classList.toggle("mystyle")
	}
		
	

	function myRemoveItemFunc() 
	{
		this.removeChild(this.firstChild)
	}
		