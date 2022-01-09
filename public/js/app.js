// default imports (getSessions or sessionTemplate can be renamed to anything)
// import getSessions from "./sessionRepository.js";
// import sessionTemplate from "./template.js";

// import * as sessionRepo from "./sessionRepository.js";
//^ import all exported stuff from ./sessionRepository.js and store it in sessionRepo ... then access like like we do from object: sessionRepo.getSessions()

// best practice is to get everything from one sessionRepository ... let's see ...
import getSessions, * as sessionRepo from "./sessionRepository.js"
// ^import getSessions as default and then everything else in an object called sessionRepo


function render() {
  var list = document.querySelector('#sessions');
  if (!list) return;
  list.innerHTML = sessionRepo.sessionTemplate(data.listItems);
};


var data = {
  listItems: []
};

getSessions()
  .then((sessions) => {
    console.log('promises!')
    data.listItems = sessions;
    render();
  });
