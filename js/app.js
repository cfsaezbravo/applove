(function main(){
 	var boxes = Array.from(document.getElementsByClassName('box-work'));
 	var modal = document.getElementById("box-work-modal");
 	var bodyModal, close, img;
 	boxes.forEach(function(box, i){
 		box.addEventListener("click", function(){
 			modal.innerHTML = "";
 			bodyModal = document.createElement("div");
 			bodyModal.classList.add("modal-body");
 			bodyModal.innerHTML = box.innerHTML;
      
      bodyModal.removeChild(bodyModal.childNodes[3]);
 			modal.appendChild(bodyModal);
 			modal.classList.remove("hide");
 			close = document.createElement("div");
 			close.classList.add("close");
 			img = document.createElement("img");
 			img.setAttribute("src", "assets/images/close1.png");
 			close.appendChild(img);
 			modal.appendChild(close);
 			close.addEventListener("click",function(){
 				modal.classList.add("hide");
 			});
 		});
 	});
 })();