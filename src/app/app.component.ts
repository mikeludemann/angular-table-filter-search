import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-table-filter-search';

	headlines = [
		{id: 1, name: "First Name"}, 
		{id: 2, name: "Last Name"}, 
		{id: 3, name: "E-Mail"}, 
		{id: 4, name: "Birthday"}
	];

	datas = [
		{id: 1, firstname: "Adam", lastname: "Mueller", email: "adam.mueller@live.com", birthday: "21-01-1980"},
		{id: 2, firstname: "Mary", lastname: "White", email: "m-white@icloud.com", birthday: "11-04-1978"}
	];
}
