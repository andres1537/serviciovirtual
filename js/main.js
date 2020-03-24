// Bibliotecas
var bibliotecarioRecomiendaData = 'https://docs.google.com/spreadsheets/d/1Lh6MC9LKxhxDZnFfGAuiStR4iBMxNoHBwr8E84OLcMI/edit#gid=694072798';
var horaDelCuentoData = 'https://docs.google.com/spreadsheets/d/1Lh6MC9LKxhxDZnFfGAuiStR4iBMxNoHBwr8E84OLcMI/edit#gid=0';
var otrasVocesData = 'https://docs.google.com/spreadsheets/d/1Lh6MC9LKxhxDZnFfGAuiStR4iBMxNoHBwr8E84OLcMI/edit#gid=1810413509';

// Bienestar
var charlasVirtualesData = 'https://docs.google.com/spreadsheets/d/1Lh6MC9LKxhxDZnFfGAuiStR4iBMxNoHBwr8E84OLcMI/edit#gid=723286424';

// Deportes
var juegaEnCasaData = 'https://docs.google.com/spreadsheets/d/1Lh6MC9LKxhxDZnFfGAuiStR4iBMxNoHBwr8E84OLcMI/edit#gid=1611737611';
var pausaActivaData = 'https://docs.google.com/spreadsheets/d/1Lh6MC9LKxhxDZnFfGAuiStR4iBMxNoHBwr8E84OLcMI/edit#gid=249852811';

// Formacion
var recetasEnCasaData = 'https://docs.google.com/spreadsheets/d/1Lh6MC9LKxhxDZnFfGAuiStR4iBMxNoHBwr8E84OLcMI/edit#gid=1418822260';

function bibliotecarioRecomienda() {  
	$('#bibliotecarioRecomienda-cards').sheetrock({
		reset: true,
		url: bibliotecarioRecomiendaData,
		query: "select A, B",
		rowTemplate: Handlebars.compile($('#bibliotecarioRecomienda-template').html())
	});
}

function horaDelCuento() {  	
	$('#horaDelCuento-cards').sheetrock({
		reset: true,
		url: horaDelCuentoData,
		query: "select A, B",
		rowTemplate: Handlebars.compile($('#horaDelCuento-template').html())
	});
}

function otrasVoces() {  	
	$('#otrasVoces-cards').sheetrock({
		reset: true,
		url: otrasVocesData,
		query: "select A, B",
		rowTemplate: Handlebars.compile($('#otrasVoces-template').html())
	});
}

function charlasVirtuales() {  	
	$('#charlasVirtuales-cards').sheetrock({
		reset: true,
		url: charlasVirtualesData,
		query: "select A, B",
		rowTemplate: Handlebars.compile($('#charlasVirtuales-template').html())
	});
}

function juegaEnCasa() {  	
	$('#juegaEnCasa-cards').sheetrock({
		reset: true,
		url: juegaEnCasaData,
		query: "select A, B",
		rowTemplate: Handlebars.compile($('#juegaEnCasa-template').html())
	});
}

function pausaActiva() {  	
	$('#pausaActiva-cards').sheetrock({
		reset: true,
		url: pausaActivaData,
		query: "select A, B",
		rowTemplate: Handlebars.compile($('#pausaActiva-template').html())
	});
}

function recetasEnCasa() {  	
	$('#recetasEnCasa-cards').sheetrock({
		reset: true,
		url: recetasEnCasaData,
		query: "select A, B",
		rowTemplate: Handlebars.compile($('#recetasEnCasa-template').html())
	});
}