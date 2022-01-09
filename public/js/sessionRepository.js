// write type=module for app.js in html file to be considered it as a module 
const sessionURL = 'sessions.json';

let sessionList = [];

function getSessions() {
    return new Promise(function (resolve, reject) {
        var oReq = new XMLHttpRequest();
        oReq.onload = function (e) {
            sessionList = e.target.response;
            resolve(sessionList);
        };
        oReq.open('GET', sessionURL, true);
        oReq.responseType = 'json';
        oReq.send();
    })
}

//   export {getSessions as sessions}; //import sessions where required
export {getSessions as default, sessionURL}  // import any from sessionRepository, and we get our default value .. we are still passing sessionURL as other named export
export {sessionTemplate} from "./template.js" // we cannot access sessionTemplate here .. but we are aggregating our exports .. so that we may only need to call import from sessionRepository in the app.js
// ^ re-exporting sessionTemplate from template.js