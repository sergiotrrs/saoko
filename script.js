console.log("Saoko papi saoko");      
document.getElementById("generation").style.color = "grey";
function colorTitulo(){
    console.log("Pulso el botón de Generation");
    document.getElementById("generation").style.color = "blue";
}

//Solicitud HTTP con axios.
axios({
    method: 'get',
    url: 'https://reqres.in/api/users?page=2'
  })
    .then( response => {
      console.log(response.data.data);
    });