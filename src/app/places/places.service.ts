import { Injectable } from '@angular/core';
import {Place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://imagenes.milenio.com/jRcwT2uXFV8gyV2OIs2EhU4jVT4=/958x596/https://www.milenio.com/uploads/media/2020/03/31/torre-eiffel-sutterstock_8_0_924_575.jpg',
      comments: ['Lugar asombroso', 'Hermoso lugar']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageURL: 'https://static.anuevayork.com/wp-content/uploads/2019/07/11084916/Como-visitar-la-Estatua-de-la-Libertad-en-Nueva-York-1500-2.jpg',
      comments: ['Dio miedo subir jajajja', 'Increible lugar']
    }
  ]

  constructor() { }

  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeID: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeID
    })
  }
}
