function guardarURL() {
  window.location.reload()
    const urlInput = document.getElementById("getUrl").value;
    let body = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ urlInicial: urlInput }),
    };
  
    fetch("/", body).then((response) => {
      if (response.ok) {
        console.log(response);
      } else {
        throw "Error en la llamada Ajax";
      }
    });
    
  }