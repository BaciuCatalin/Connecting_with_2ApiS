console.log("main1.js loaded...");

const displayElem = document.querySelector("#display");

async function displayQuote(apiHandler) {
  const response = await fetch(apiHandler.apiUrl);
  const jsonData = await response.json();
  const quote = apiHandler.formatData(jsonData);

  displayElem.innerText = `${quote.text} - ${quote.author}`;
}

class ChuckNorrisApiHandler {
  constructor() {
    this.apiUrl = "https://api.chucknorris.io/jokes/random";
  }

  formatData(jsonData) {
    return {
      text: jsonData.value,
      author: "Anonymous",
    };
  }
}

class TypeFitApiHandler {
  constructor() {
    this.apiUrl = "https://type.fit/api/quotes";
  }

  formatData(jsonData) {
    const randomIndex = Math.floor(Math.random() * jsonData.length);

    return {
      text: jsonData[randomIndex].text,
      author: jsonData[randomIndex].author,
    };
  }
}

displayButton.addEventListener("click", () => {
  const selectedApi = apiSelect.value;

  if (selectedApi === "chuckNorris") {
    console.log("chuckNorris Api");

    displayQuote(new ChuckNorrisApiHandler());
    // let chuckNorrisApiHandler = new ChuckNorrisApiHandler();
    // displayQuote(chuckNorrisApiHandler);
  } 
  
  else if (selectedApi === "typeFit") {
    console.log("TypeFit Api");

    displayQuote(new TypeFitApiHandler());
    // let typeFitApiHandler = new TypeFitApiHandler();
    // displayQuote(typeFitApiHandler);
  }
});


