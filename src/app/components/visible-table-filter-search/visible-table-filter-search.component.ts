import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'visible-table-filter-search',
	templateUrl: './visible-table-filter-search.component.html',
	styleUrls: ['./visible-table-filter-search.component.css']
})
export class VisibleTableFilterSearchComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() id: string;
	/*@Input() searchfield: string;
	@Input() datas: any;
	@Input() headlines: any;*/

	@ViewChild('vtfs', {static: false}) el: ElementRef;

		constructor() { }

  ngOnInit(){

  }

		ngAfterViewInit() {
			var textfield = document.getElementById('searchMainFilter');
			var table = document.getElementById(this.id);

			function searchTable(textfield: any, container: any, row: any, column: any) {

				var search: any,
					filter: any, 
					found: any, 
					table: any, 
					rows: any, 
					columns: any, 
					i: any, 
					j: any;

				search = document.querySelector(textfield);
				filter = search.value.toUpperCase();
				table = document.querySelector(container);
				rows = table.querySelectorAll(row);

				for (i = 0; i < rows.length; i++) {

					columns = rows[i].querySelectorAll(column);

					if(i == 0){

						//columns = table.rows.item(i).cells.length;
						continue;

					}

					for (j = 0; j < columns.length; j++) {

						if (columns[j].innerHTML.toUpperCase().indexOf(filter) > -1) {

							found = true;

						}

					}

					if (found) {

						rows[i].style.display = "";

						found = false;

					} else {

						rows[i].style.display = "none";

					} 

				}

			}

			var txt = "#searchMainFilter";
			var tdata = "#" + this.id;

			textfield.addEventListener("keyup", function(){
				searchTable(txt, tdata, "tr", "td");
			});
		}

}
