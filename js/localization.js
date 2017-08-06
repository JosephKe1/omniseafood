function initializeLocalizedText(language) {
  var i18n = $.i18n();

  i18n.locale = language;
  i18n.load( 'js/i18n/' + i18n.locale + '.json', i18n.locale ).done(
  function() {
    $('body').i18n();
  });
}

function updateLocalizedText() {
  var i18n = $.i18n();
  language = $( '#lang-select option:selected' ).val();
  sessionStorage.language = language;

  i18n.locale = language;
  i18n.load( 'js/i18n/' + i18n.locale + '.json', i18n.locale ).done(
    function() {
      // print out $.i18n translation
      //console.log($.i18n('home'));
      // refresh items with data-i18n annotation
      $('body').i18n();
    });
  // Enable debug
  // $.i18n.debug = true;
}

$(document).ready(function() {
  $('.responsive-calendar').responsiveCalendar({
    time: '2013-05',
    events: {
      "2013-05-30": {"number": 5, "badgeClass": "background-turquoise", "url": "http://w3widgets.com/responsive-slider"},
      "2013-05-26": {"number": 1, "badgeClass": "background-turquoise", "url": "http://w3widgets.com"},
      "2013-05-03": {"number": 1, "badgeClass": "background-pomegranate"},
      "2013-05-12": {}}
  });

  $('#mixit').mixitup();

  // begin localization
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
  } else {
    // Sorry! No Web Storage support..
    console.log('Warning: no HTML 5 web storage support.  Localization setting will not be saved');
  }

  if (sessionStorage.language) {
      initializeLocalizedText(sessionStorage.language);
      $("#lang-select").val(sessionStorage.language);
  } else {
      initializeLocalizedText('en');
  }

  $('#lang-select').change(updateLocalizedText);
  // end localization
});
