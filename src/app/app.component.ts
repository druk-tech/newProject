import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl} from '@angular/forms';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  games: [
    {
      number: '2',
      name: 'Tashi'
    }
    ]
  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.myForm = this.fb.group({
      name: [undefined, [Validators.required]],
      id: [undefined, [Validators.required]],
      description: [undefined],
      address: this.fb.group({
        street: [undefined],
        city: [undefined],
        state: [undefined],
        zip_code: [undefined]
      }),
      games: this.fb.array([])
      // foods: this.fb.array([this.nestedFood()]),
      // games: this.fb.array([this.nestedGame])
    });
    this.games.forEach((data) => {
      this.myForm.controls.games.push(this.fb.group({
        number: data.number,
        name: data.name
      }));
    });
  }
  showData() {
    console.log(this.myForm.value);
  }
}
//   nestedFood(): FormGroup {
//     return this.fb.group({
//       foodName: [undefined]
//     });
//   }
//   get arrayFood() {
//      return this.myForm.get('foods') as FormArray;
//   }
//   addFood() {
//      return this.arrayFood.push(this.nestedFood());
//   }
//   removeFood(i) {
//     this.arrayFood.removeAt(i);
//   }
//    get nestedGame(): FormGroup {
//     return this.fb.group({
//       gameName: [undefined],
//       playerNames: this.fb.array([this.nestedPlayer])
//     });
//   }
//    get arrayGame() {
//      return this.myForm.get('games') as FormArray;
//    }
//   get nestedPlayer(): FormGroup {
//     return this.fb.group({
//       player: [undefined]
//     });
// }
// addPlayer(arr_2) {
//      return arr_2.get('playerNames').push(this.nestedPlayer);
//   }
//
// // removePlayer(arr_2) {
// //     arr_2.get('playerNames').removeAt(j);
// // }


