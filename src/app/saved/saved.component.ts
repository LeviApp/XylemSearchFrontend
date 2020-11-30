import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

  public plants = [
    {
      common_name: "Venus Flytrap",
      scientific_name: "Dionaea muscipula",
      family_common_name: "Sundew",
      family: "Droseraceae",
      genus: "Dionaea",
      year: 1768,
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Venus_Flytrap_showing_trigger_hairs.jpg/1200px-Venus_Flytrap_showing_trigger_hairs.jpg"
    },
    {
      common_name: "Venus Flytrap",
      scientific_name: "Dionaea muscipula",
      family_common_name: "Sundew",
      family: "Droseraceae",
      genus: "Dionaea",
      year: 1768,
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Venus_Flytrap_showing_trigger_hairs.jpg/1200px-Venus_Flytrap_showing_trigger_hairs.jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

