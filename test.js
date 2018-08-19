function showInfo(x){

	var London = document.getElementById("London");
	if	(x.value == 0 && London.style.display === "none") {
			London.style.display = "flex";
		} else {
			London.style.display = "none";
		}

	if(x.value == 1) {
      document.getElementById('NewYork').style.display = "flex";
	} else {
		document.getElementById('NewYork').style.display = "none";
	}

	if(x.value == 2) {
      document.getElementById('Rome').style.display = "flex";
	} else {
		document.getElementById('Rome').style.display = "none";
	}
}

function extraShow() {
	var LondonVid = document.getElementById("LondonVideo");
	var LondonImg = document.getElementById("LondonImages");
	var NewYorkVid = document.getElementById("NYVideo");
	var NewYorkImg = document.getElementById("NYImages");
	var RomeVid = document.getElementById("RomeVideo");
	var RomeImg = document.getElementById("RomeImages");

		if (LondonVid.style.display === "none") {
			LondonVid.style.display = "flex";
			LondonImg.style.display = "none";
		} else {
			LondonVid.style.display = "none";
			LondonImg.style.display = "block";
		}

		if (NewYorkVid.style.display === "none") {
			NewYorkVid.style.display = "flex";
			NewYorkImg.style.display = "none";
		} else {
			NewYorkVid.style.display = "none";
			NewYorkImg.style.display = "block";
		}

		if (RomeVid.style.display === "none") {
			RomeVid.style.display = "flex";
			RomeImg.style.display = "none";
		} else {
			RomeVid.style.display = "none";
			RomeImg.style.display = "block";
		}
		
}

