(function() {
    var svgWaves = document.querySelector('#hero-waves'),
        heroFigure = document.querySelector('.hero .content figure');

    if (svgWaves && heroFigure) {
        heroFigure.append(svgWaves);
    }
}());