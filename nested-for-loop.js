let myPlaces = ['Paris', 'Greece', 'Canada'];

let friendPlaces = ['Greece', 'Switzerland', 'Croatia'];

for(let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++){

  for(let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++){
    if(myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]){
      console.log(myPlaces[myPlacesIndex]);
    }
  }
}
