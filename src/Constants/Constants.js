import { Dimensions } from 'react-native'

export const ScreenWidth = Dimensions.get('window').width
export const ScreenHeight = Dimensions.get('window').height

export const Place = {
   url1: 'https://www.wien.info/media/images/40367-graben-einkaufen-shopping-altstadt-einkaufsstrassen-3to2.jpeg/image_teaser-lead',
   url2: 'https://www.studying-in-germany.org/wp-content/uploads/2018/07/German-Culture-and-Traditions.jpg',
    url3: 'https://www.thelocal.de/userdata/images/article/3055de7f5332b984d7dade29667f67254eb8887766d5b91c179e435d412aa8d7.jpg',
    url4: 'https://www.holidify.com/images/cmsuploads/compressed/Wayanad_20180308231859.jpg',
    url5: 'https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide.jpg?imwidth=1400',
    url6: 'https://www.holidify.com/blog/wp-content/uploads/2014/06/hampi.jpg'
  }
export const Places = [
  {
    id: '1',
    image: Place.url1,
    name: 'Vienna'
  },
  {
    id: '2',
    image: Place.url2,
    name: 'Germany'
  },
  {
    id: '3',
    image: Place.url3,
    name: 'Poland'
  },
  {
    id: '4',
    image: Place.url4,
    name: 'Singapoure'
  },
  {
    id: '5',
    image: Place.url5,
    name: 'India'
  },
  {
    id: '6',
    image: Place.url6,
    name: 'Paris'
  }
]

export const Countries = [
  {
    id: '1',
    name: 'Asia'
  },
  {
    id: '2',
    name: 'Europe'
  },
  {
    id: '3',
    name: 'East'
  },
  {
    id: '4',
    name: 'South Africa'
  }
]

export const PlaceUrl =
  'https://www.wien.info/media/images/40367-graben-einkaufen-shopping-altstadt-einkaufsstrassen-3to2.jpeg/image_teaser-lead'

 export const FlightTripOptions = {
   oneWay: "one_way",
   return: 'return'
 } 