import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material';
import { KJUR } from 'jsrsasign';
import {HttpClientModule} from '@angular/common/http';

@Component({
	selector: 'app-front-page',
	templateUrl: './front-page.component.html',
	styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
export class TabsOverviewExample {}


// interface KeyFile {
//     type: string;
//     project_id: string;
//     private_key_id: string;
//     private_key: string;
//     client_email: string;
//     client_id: string;
//     auth_uri: string;
//     token_uri: string;
//     auth_provider_x509_cert_url: string;
//     client_x509_cert_url: string;
//     }
//
// function parseKeyFile () {
//     var keyJSON: KeyFile = JSON.parse(this.responseText);
// 	console.log(keyJSON.project_id);
// }

// let keyRequest = new XMLHttpRequest();
// keyRequest.onload = keyRL;
// keyRequest.open("get", "assets/google-key.json", true);
// keyRequest.send();
//
// function keyRL ()
// {
//     let keyFile = JSON.parse(this.responseText);
//     let privateKey = keyFile.private_key;
//
// 	console.log(privateKey);
//
//
// // JWT header
// let pHeader = {"alg":"RS256","typ":"JWT"};
// let sHeader = JSON.stringify(pHeader);
//
// // JWT claim
// let pClaim =
// {
// 	iss: "saai.lut.2017@gmail.com",
//   	scope: "https://www.googleapis.com/auth/calendar.readonly",
//   	aud: "https://www.googleapis.com/oauth2/v4/token",
//     exp: KJUR.jws.IntDate.get("now + 1hour"),
//     iat: KJUR.jws.IntDate.get("now")
// };
//
// let sClaim = JSON.stringify(pClaim);
// let key = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDKfO6IsVPLAYMS\n3OZ0N0ugCm3q9rHFme06uc7U8eIDMz2qsHXb6AhSghtyy4ZEdaMHdVfH6c42qSPV\nv1YslxufkR/ix1YBl14SjWowexj4k/t6vvV08V0cOOkPMW27u4Smnmdpdtax38en\nXkSRbcCmCPTIFOGg2qtQ/IcEmwgKxZ9szBNlXK+Vyd6kBCakNmXy3HuyH/pdFDEo\ndB3uyIRiJ2oDckEcN0hfe/bx8ce33kl1VMH6HyJDvJI2fPBpIpOkQKrP6PuhKSk/\npvxnrbE9BMzdIZtvdZGzN1eN21YaRmQ2xJh4R7NBZLhKqvBq4kKcuhusZ214v3br\no3UaGAzxAgMBAAECggEAWCy4CLFDflrNs5ibCA+OMIZqIA/GEPi7C8Ae167vDxqw\np1QJNrYfbaJ3hnEnKkeZsyU/kO/42uejkbAsu+UfY8hj/LJ1+uJp1iVbkPoBwTlb\noLNoGsECHUiRAIszMDVzicTf3lagHjwG6pSLwlJrOkIbKceiCxQ91tnoh7Jk+Z8X\nwz16pq1cmRgu6NaNPfusjirUDa2GSL1mc3sABTfWU5efE37v2dogB+7OrGk+e6Db\nRRUl/Tj3sTiA64Uwjq3cCnKRo3VpWbVyQXvJoLpLHyXqQ+gRE4rymkPXuFW/r9F3\ndt9N8AmNII6lDXrD6+shDOWeRjPBwfUHeur5dd0l+wKBgQDmsGl/S8cPHkMRiFkt\nTTPx24MTO6Eoy5GLMf2ouwgrk20QBsxUtqDrYvGhaO1PB9dQy1WowiE1RCSrvrsp\ndj+VaLDFonfpeFlheV1EOT4Rh3hX5ML0WsgbJg0Ud/Og0cgRb/lWtYSVH/mpv/TB\nLq3Vz1YXnJUhqAglNFRv2eog5wKBgQDgtGiEkiVNYSk2sFMdAEtIhzcDiHZXjS41\ncuieaz0Y1Or93W5l/d0RiC7d+ygjcZF1+KPiCxdcp66qbLRaMrPSEsufmnLjnsck\napaabThavuisOqTj++D97OWjm/sFZYwIL2UJfupFkVIa1abIiDk028qCaR7z2alT\ndzq+gMqwZwKBgQCyNa4KDLwmTbZ6IN7jRDTQrkc/4FzLaxdwdJoEcxgIsccbDmVj\nPAJsVO9dRfWti90mKS5vRCjrQU0i8CEeEp9kCJAm3S/NSI+j4WHPhnkQiZrKK4r/\nwfG8J1ULbu7iWa0460uvVGKr4Ru5qvSlGC5qcdWMQAZlDa3dL+Pa1HkuGQKBgQDa\nqPQkPYsrF2dhnofiaszXkSzJtVtjqzDSNjWDI1va9CaQT5AEk9syGlFxFdxjUTp5\nkDD54E0ljs77bLi8JSazQDMB5uvx8Cpdl5NiRvJV6/zCzHZ0nEC/GG4GndzRzZVM\nycIKUYRrmhRJpKqd7WGtvEv+R4klRiPt4tI5W17h9QKBgQDSxDSNe8NPp8m0WG03\nU9dQoL+f2XcIpKmCFSeRBh4v6D5nYsroFBjaehZyhUSP4lvnFqoVtERkxP2vX5oL\n0i/In2oVAM3XI6y/UHYd0fTOne1EKY9L6ONT9Oh/Elprj7erELmqikC6bAmyPMdM\nUHWzfG7MPI/WCzmtKz0iuvZM+g==\n-----END PRIVATE KEY-----\n";
// // Then generated a signed JWT with
// let sJWS = KJUR.jws.JWS.sign(null, sHeader, sClaim, key);
//
// let urlEncodedData = "";
// let urlEncodedDataPairs = [];
// urlEncodedDataPairs.push(encodeURIComponent("grant_type") + '=' + encodeURIComponent("urn:ietf:params:oauth:grant-type:jwt-bearer"));
// urlEncodedDataPairs.push(encodeURIComponent("assertion") + '=' + encodeURIComponent(sJWS));
// urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
// console.log(urlEncodedData);
//
// let eventsHR = new XMLHttpRequest();
// eventsHR.addEventListener('load', function(event) {
//     console.log(JSON.parse(eventsHR.responseText));
// });
//
// // We define what will happen in case of error
// eventsHR.addEventListener('error', function(event) {
//     console.log('Could not get events list from calendar');
// });
//
// let XHR = new XMLHttpRequest();
// XHR.addEventListener('load', function(event) {
//     var response = JSON.parse(XHR.responseText);
//     let token = response["access_token"];
// 	console.log(token);
// 	// eventsHR.open('GET', 'https://www.googleapis.com/calendar/v3/calendars/calendarId/events?access_token=' + token);
// 	// eventsHR.send();
// });
//
// // We define what will happen in case of error
// XHR.addEventListener('error', function(event) {
//     console.log('Oops! Something went wrong.');
// });
//
// XHR.open('POST', 'https://www.googleapis.com/oauth2/v4/token');
// XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// XHR.send(urlEncodedData);
//
// }
// After that I have my access token and I can list events from my calendar
// let eventsURL =  "https://www.googleapis.com/calendar/v3/calendars/calendarId/events?access_token=access_token" + token
