document.addEventListener('DOMContentLoaded', function() {

	var dados ='';

	// Sidenav
	const side_nav = document.querySelectorAll('.sidenav');
	M.Sidenav.init(side_nav);

	// Modal
	const modal = document.querySelectorAll('.modal');
	M.Modal.init(modal);

	// Materialbox
	const mBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(mBox);

	// Parallax
	const parallax = document.querySelectorAll('.parallax');
	M.Parallax.init(parallax);

	// Tabs
	const tabs = document.querySelectorAll('.tabs');
	M.Tabs.init(tabs);

	// Datepicker
	const date_options = { disableWeekends: false, format: 'dd/mm/yyyy', autoClose:true };
	const date_picker = document.querySelectorAll('.datepicker');
	M.Datepicker.init(date_picker, date_options);

	// Tooltip
	const tool_options = { position: 'bottom' }
	const tool = document.querySelectorAll('.tooltipped');
	M.Tooltip.init(tool, tool_options);

	// Scrollspy
	const scroll = document.querySelectorAll('.scrollspy');
	M.ScrollSpy.init(scroll);

	// Slider
	const slider_options = {
		indicators: false,
		height: 500,
		transition: 500,
		interval: 6000
	};
	const slider = document.querySelectorAll('.slider');
	M.Slider.init(slider, slider_options);

	var elems = document.querySelectorAll('select');
	M.FormSelect.init(elems);

	// Autocomplete
	const autoOptions = {}

	$('#auto-origim').autocomplete(
		{
			data: $.ajax({
				type: 'GET',
				url: 'https://www.viajanet.com.br/resources/api/Autocomplete/'+$(this).val(),
				dataType: 'xml', 
				success: function(response) {
				
					var dataAirPort = $( "Location", response ).map(function() {
						return {
							value:  $( "Name", this ).text()
						};
					}).get();
		
					autoOptions = {};
					for (var i = 0; i < dataAirPort.length; i++) {
						console.log(dataAirPort[i].value);
						autoOptions[dataAirPort[i].value]=null; //countryArray[i].flag or null
					}
				}
			}),
			limit: 5,
			minLength: 3
		}
	);

	$('#auto-destiny').autocomplete(
		{
			data: $.ajax({
				type: 'GET',
				url: 'https://www.viajanet.com.br/resources/api/Autocomplete/'+$(this).val(),
				dataType: 'xml', 
				success: function(response) {
				
					var dataAirPort = $( "Location", response ).map(function() {
						return {
							value:  $( "Name", this ).text()
						};
					}).get();
		
					autoOptions = {};
					for (var i = 0; i < dataAirPort.length; i++) {
						console.log(dataAirPort[i].value);
						autoOptions[dataAirPort[i].value]=null; //countryArray[i].flag or null
					}
				}
			}),
			limit: 5,
			minLength: 3
		}
	);

	const autoComplete = document.querySelector('.autocomplete');
	M.Autocomplete.init(autoComplete, autoOptions);
});

	// REMOVE options if not used!!!
