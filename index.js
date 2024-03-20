const API_URL="https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events";

const parties = {
  activeParties: []
};

const partyList = document.querySelector(`#partydata`);

const getParty = async () => {
  try{
  const response = await fetch(API_URL);
  const json = await response.json();
  //parties.activeParties = Array.isArray(data) ? data: [];
  parties.activeParties = json.data
  } catch (error) {
    console.log(error);
  }
}

const renderParties = () => {
  const partyElements = parties.activeParties.map((party) => {
    const li = document.createElement(`li`);
    li.innerHTML = `
    <h3>${party.name}<h3>
    <p>${party.description}<p>
    <p>${party.date}<p> 
    <p>${party.location}<p>
    `;
    return li;
  }
)
partyList.replaceChildren(...partyElements);
}

const render = async () => {
  await getParty();
  renderParties();
}

render();
