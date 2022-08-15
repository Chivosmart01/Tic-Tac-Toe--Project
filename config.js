function openPlayerConfig(e) {
  editedPLayer = +e.target.dataset.playerid
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';

  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.children[0].children[1].value  = ''
}
 
function savePLayerConfig (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const enteredPlayername = formData.get("playername").trim();

  if (enteredPlayername === "") {
    e.target.firstElementChild.classList.add('error')
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(`player-${editedPLayer}-data`)
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  // if (editedPLayer === 1){
  //   players[0].name = enteredPlayername
  // }else{
  //   players[1].name = enteredPlayername
  // }

  players[editedPLayer-1].name =enteredPlayername

  closePlayerConfig();
}; 