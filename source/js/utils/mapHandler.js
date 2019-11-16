function mapHandler() {
  let mapElement = document.querySelector('#map');

  if (mapElement) {
    let pinkOfficeLatlng = new google.maps.LatLng(59.938794, 30.323082);

    let mapOptions = {
      center: pinkOfficeLatlng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
      }
    };

    let map = new google.maps.Map(mapElement, mapOptions);

    let markerImage = '../img/icon-map-marker.svg';
    let marker = new google.maps.Marker({
      position: pinkOfficeLatlng,
      map: map,
      icon: markerImage,
      title: 'HTML Academy'
    });
  }
}
