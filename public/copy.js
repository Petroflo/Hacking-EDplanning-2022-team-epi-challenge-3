
var circle = circle_danger(map);

var polygon = polygon_danger(map);
    return map;
}

function polygon_danger(map) {
  return L.polygon([
    [13.916317, -60.996944],
    [13.939495, -61.043672],
    [13.904263, -61.067039],
    [13.85396, -61.0375]
  ]).addTo(map);
}

function circle_danger(map) {
  return L.circle([13.8834, -60.9890], {
    color: 'yellow',
    fillColor: '#ECFF33',
    fillOpacity: 0.5,
    radius: 5500
  }).addTo(map);
}