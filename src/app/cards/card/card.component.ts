import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //arreglo que contendrá todas las cartas
  mazo: any[];
  cardUrl: Observable<string | null>;
  cardsCollection: AngularFirestoreCollection;
  

  constructor(private storage: AngularFireStorage,) { }

  ngOnInit() {
    let cartas=[];
    cartas.push(
      "https://firebasestorage.googleapis.com/v0/b/cardgame-a38e9.appspot.com/o/10_of_clubs.png?alt=media&token=ac03cf90-fb85-4b92-bec9-9d32d07ba5a9",
      
    );
    //console.log(cartas[0]);
    this.mazo = cartas;

    const myImage = new Image();
    myImage.src = 'https://firebasestorage.googleapis.com/v0/b/cardgame-a38e9.appspot.com/o/10_of_clubs.png?alt=media&token=ac03cf90-fb85-4b92-bec9-9d32d07ba5a9';
    let cartaImg = myImage.src;
    console.log(myImage.src);
    let cartasBucket=[];
    cartasBucket.push(cartaImg);
    //this.mazo = cartasBucket;
    //this.cardsCollection.add(cartasBucket);
    /*
    this.cardUrl = this.storage.ref('gs://plantingfriends.appspot.com').getDownloadURL();
     this.cardUrl.subscribe(url=>{
       // crear imagen en la memoria para dibujarla 
       const myImage = new Image();
       myImage.src = url;
       // pasarle el valor al post. 
       let cartaImg = myImage.src;
       console.log(cartaImg);
       this.cartasBucket.push(cartaImg);
       
          })
      this.cardsCollection.add(this.cartasBucket); */

  }

  

}
