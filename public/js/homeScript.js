console.log('homescript online!');

const API_KEY = '092c2d95-2bad-4b91-aca7-734fd8f52114';

function getMap(address) {
  const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&lang=ru_RU&format=json&geocode=${address}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const coordinates =
        data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
          .split(' ')
          .map((el) => +el)
          .reverse();
      console.log(coordinates, '<<<<<<<<<<<<<');
      ymaps.ready(() => {
        const myMap = new ymaps.Map(
          'map',
          {
            center: coordinates,
            zoom: 12,
          },
          {
            searchControlProvider: 'yandex#search',
          }
        );

        const myPlacemark = new ymaps.Placemark(
          myMap.getCenter(),
          {
            hintContent: 'Ваша точка!',
          },
          {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './images/stop.png',
            // Размеры метки.
            iconImageSize: [32, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38],
          }
        );
        myMap.geoObjects.add(myPlacemark);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

getMap('Астана,ул.Толе би, 44/1');
