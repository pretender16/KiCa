function change_chevron($panel_id,$glyph){	var $child = $($glyph).children("span");		//span des geklickten Panels soll nicht verändert werden und wird deswegen in variable gespeichert	var $parent = $($panel_id).attr('data-parent'); //die collapse id wird mithilfe des bootstrap data-parent Attributes ausgelesen und so für mehrere Collapse einzeln möglich	if($( $panel_id ).hasClass( "collapsed" )){		$($child).removeClass( "glyphicon glyphicon-chevron-left" ).addClass( "glyphicon glyphicon-chevron-down" ); //angeklickte zu pfeil nach unten ändern		$($parent).find(".collapse_chevron").children("span").not($child).removeClass( "glyphicon glyphicon-chevron-down" ).addClass( "glyphicon glyphicon-chevron-left" ); //alle anderen zu pfeil links ändern	}else{		$($child).removeClass( "glyphicon glyphicon-chevron-down" ).addClass( "glyphicon glyphicon-chevron-left" );	}}function selectFiller(ID, clickedSelect, nextSelectId){	var str_selectedOption = document.getElementById(clickedSelect).value;//der ausgewählte Wert	/*Alle Select Elemente in Variablen setzen*/	var str_sparteElement = document.getElementById('str_sparte'+ID);	var str_statusElement = document.getElementById('str_status'+ID);	var str_turnierElement = document.getElementById('str_tu_name'+ID);	var str_heimElement = document.getElementById('str_heim'+ID);	var str_auswaertsElement = document.getElementById('str_auswaerts'+ID);	if(str_selectedOption != '0'){		/*Abhängig wo geklickt wird, werden die anderen Selects gesperrt und zurückgesetzt*/		if (clickedSelect == 'str_sparte'+ID){			$(str_statusElement).empty();			$(str_statusElement).append('<option value="0" selected disabled>Bitte wählen</option>');			str_turnierElement.disabled = true;			$(str_turnierElement).empty();			$(str_turnierElement).append('<option value="0" selected disabled>Bitte wählen</option>');			str_heimElement.disabled = true;			$(str_heimElement).empty();			$(str_heimElement).append('<option value="0" selected disabled>Bitte wählen</option>');			str_auswaertsElement.disabled = true;			$(str_auswaertsElement).empty();			$(str_auswaertsElement).append('<option value="0" selected disabled>Bitte wählen</option>');		}else if(clickedSelect == 'str_status'+ID){			$(str_turnierElement).empty();			$(str_turnierElement).append('<option value="0" selected disabled>Bitte wählen</option>');			str_heimElement.disabled = true;			$(str_heimElement).empty();			$(str_heimElement).append('<option value="0" selected disabled>Bitte wählen</option>');			str_auswaertsElement.disabled = true;			$(str_auswaertsElement).empty();			$(str_auswaertsElement).append('<option value="0" selected disabled>Bitte wählen</option>');		}else if(clickedSelect == 'str_tu_name'+ID){			$(str_heimElement).empty();			$(str_heimElement).append('<option value="0" selected disabled>Bitte wählen</option>');			str_auswaertsElement.disabled = true;			$(str_auswaertsElement).empty();			$(str_auswaertsElement).append('<option value="0" selected disabled>Bitte wählen</option>');		}else if(clickedSelect == 'str_heim'+ID){			$(str_auswaertsElement).empty();			$(str_auswaertsElement).append('<option value="0" selected disabled>Bitte wählen</option>');		}		document.getElementById(nextSelectId).disabled = false;		$.post("get_select_options/", {"int_index": ID, "str_selectedOption": str_selectedOption, "nextSelectId": nextSelectId, "str_sparteValue": str_sparteElement.value, "str_statusValue": str_statusElement.value, "str_turnierValue": str_turnierElement.value, "str_heimValue": str_heimElement.value, "str_auswaertsValue": str_auswaertsElement.value})			.done(function( data ) {//Rückgabewert der erfolgten function ist ein unformatierter json-Array				var returnedData = JSON.parse('{ "data" : ['+data+']}'); //Rückgabewert richtig formatieren				// $('#'+nextSelectId).empty();	//Select bereinigen				// $('#'+nextSelectId).append('<option value="0" selected disabled>Bitte wählen</option>');	//Select mit defaultwert befüllen				/*Select mit Datenbankwerten befüllen:*/				for (var i = 0; i < returnedData.data.length; i++){					if (returnedData.data[i].value){						var setoption = returnedData.data[i].value;						$('#'+nextSelectId).append('<option>'+setoption+'</option>');					};					if (returnedData.data[i].Ort){						var ort = returnedData.data[i].Ort;						$('#str_ort_add_spiel').val(ort);					};				};			});	}	else{document.getElementById(nextSelectId).disabled = true;}}// Prüft die Eingaben auf Client-Seite, die in der Verwaltung beim Hinzufügen von// neuen Spielern, Spielen etc. gemacht werdenfunction inputChecker(type, element_id, button){	//Das betreffende Element über das ID Tag in eine Variable laden	var element = document.getElementById(element_id);	/////////////////////////	// ALLGEMEINE STRINGS //	/////////////////////////	//String abfangen - bis zu 50 Zeichen sind erlaubt	if (type == "str_50"){		if(element.value.length > 50){			document.getElementById(button).disabled = true;			inputColoration('error', element_id);		}else{			document.getElementById(button).disabled = false;			inputColoration('reset', element_id);		}	}	//String abfangen - bis zu 200 Zeichen sind erlaubt	if (type == "str_200"){		if(element.value.length > 200){			document.getElementById(button).disabled = true;			inputColoration('error', element_id);		}else{			document.getElementById(button).disabled = false;			inputColoration('reset', element_id);		}	}	////////////////////////	// PERSON HINZUFÜGEN ///	////////////////////////	//Größe einer Person abfangen - zwischen 1 und 250	if (type == "groesse"){		var value = element.value;		if (!isNaN(value) && value > 0 && value < 251 ){			document.getElementById(button).disabled = false;			inputColoration('reset', element_id);		 }else{			document.getElementById(button).disabled = true;			inputColoration('error', element_id);		 }	}	//Telefonnummer einer Person abfangen - zwischen 1 und 999999999999999	if (type == "tel"){		var value = element.value;		if (!isNaN(value) && value > 0 && value < 999999999999999 ){			document.getElementById(button).disabled = false;			inputColoration('reset', element_id);		 }else{			document.getElementById(button).disabled = true;			inputColoration('error', element_id);		 }	}}// Funktion toggleModal ruft das erste Modal auf.// Anhand der modal_id wird unterschieden, ob es sich um add, edit oder delete handelt.// Anhand des type wird unterschieden was hinzugefügt, bearbeitet oder gelöscht wird.// Diese Funktion ist nur für die Darstellung der entsprechenden Modals da!function toggleModal(modal_id, type, x_id, x_name){	if (modal_id == 1){ //ID für Add	}else if (modal_id == 2){ //ID für Bearbeiten		if (type == 'person'){			clearModal();			$('#modalheader').html('Person "'+x_name+'" bearbeiten');			$('#modalbody').html('<div class="form-horizontal"><div class="form-group"><label class="control-label col-md-4">Vorname</label><div class="col-md-6"><input class="form-control" type="text" id="str_vorname_edit_person" value="" placeholder="Vorname" /></div></div><div class="form-group"><label class="control-label col-md-4">Nachname</label><div class="col-md-6"><input class="form-control" type="text" id="str_nachname_edit_person" value="" placeholder="Nachname" /></div></div><div class="form-group"><label class="control-label col-md-4">Geburtsdatum</label><div class="col-md-6"><div class="sandbox-container input-group "><input class="form-control" id="d_date_edit_person" type="text" placeholder="Beispiel 01.01.2011"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span></div></div><script> $(\'.sandbox-container input\').datepicker();</script></div><div class="form-group"><label class="control-label col-md-4">Groesse</label><div class="col-md-6"><input class="form-control" id="int_groesse_edit_person" value="" placeholder="Beispiel 158cm" /></div></div><div class="form-group"><label class="control-label col-md-4">Telefonnummer</label><div class="col-md-6"><input class="form-control" type="number" id="int_tel_edit_person" value="" placeholder="Telefonnummer" /></div></div><div class="form-group"><label class="control-label col-md-4">Betreuer?</label><div class="col-md-2"><label><input type="radio" name="b_betreuer_ja" id="b_betreuer" value="1">Ja</label></div><div class="col-md-2"><label><input type="radio" name="b_betreuer_nein" id="b_betreuer" value="0">Nein</label></div></div></div>');			$( '<div class="personenfooter" id="personmodalfooter"></div>' ).replaceAll( "#modalfooter" );			$('#personmodalfooter').html('<div class="pwresbtn"><a type="submit" class="btn btn-danger" onclick="toggleModal(\'2\',\'reset_password\',\''+x_id+'\',\''+x_name+'\')">Passwort zurücksetzen</a></div><div class="footerbtn"><button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit"  class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Speichern</a></div>');			$.post("get_person/", {"p_id": x_id})			.done(function( data ) {//Rückgabewert der erfolgten function ist ein unformatierter json-Array				var returnedData = JSON.parse('{ "data" : ['+data+']}'); //Rückgabewert richtig formatieren				var vorname = returnedData.data[0].Vorname;				$('#str_vorname_edit_person').val(vorname);				var Name = returnedData.data[0].Name;				$('#str_nachname_edit_person').val(Name);				var t = returnedData.data[0].Geburtstag.split(/[- :]/);			 	var geburtstag = "" + t[2] + "." + t[1] + "." + t[0];				$('#d_date_edit_person').val(geburtstag);				var groesse = returnedData.data[0].Groesse;				$('#int_groesse_edit_person').val(groesse);				var telefon = returnedData.data[0].Telefon;				$('#int_tel_edit_person').val(telefon);				var betreuer = returnedData.data[0].Betreuer;				if (betreuer == 1){					$('input:radio[name=b_betreuer_ja]').prop('checked', true);				}else{					$('input:radio[name=b_betreuer_nein]').prop('checked', true);				};			});		}		if (type == 'spiel'){			$('#spielmodalheader').html('Spiel "'+x_name+'" bearbeiten');			$('#spielmodalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Speichern</a>');			$.post("get_spiel/", {"s_id": x_id})			.done(function( data ) {//Rückgabewert der erfolgten function ist ein unformatierter json-Array				var returnedData = JSON.parse('{ "data" : ['+data+']}'); //Rückgabewert richtig formatieren				$.post("get_select_prefill/", {"str_sparteValue": returnedData.data[0].Sparte, "str_statusValue": returnedData.data[0].Status, "str_turnierValue": returnedData.data[0].Turnier, "str_heimValue": returnedData.data[0].Heim, "str_auswaertsValue": returnedData.data[0].Auswaerts})				.done(function( dat ) {//Rückgabewert der erfolgten function ist ein unformatierter json-Array					var returnedOptions = JSON.parse('{ "dat" : ['+dat+']}'); //Rückgabewert richtig formatieren						$('#str_status2').empty();						$('#str_tu_name2').empty();						$('#str_heim2').empty();						$('#str_auswaerts2').empty();					for (var i = 0; i < returnedOptions.dat.length; i++){						if (returnedOptions.dat[i].Status){							var setstatus = returnedOptions.dat[i].Status;							$('#str_status2').append('<option>'+setstatus+'</option>');						};						if (returnedOptions.dat[i].Turnier){							var setturnier = returnedOptions.dat[i].Turnier;							$('#str_tu_name2').append('<option>'+setturnier+'</option>');						};						if (returnedOptions.dat[i].Heim){							var setheim = returnedOptions.dat[i].Heim;							$('#str_heim2').append('<option>'+setheim+'</option>');						};						if (returnedOptions.dat[i].Auswaerts){							var setauswaerts = returnedOptions.dat[i].Auswaerts;							$('#str_auswaerts2').append('<option>'+setauswaerts+'</option>');						};					};					var sparte = returnedData.data[0].Sparte;					var str_sparte_id = document.getElementById('str_sparte2');					for (var i = 0; i < str_sparte_id.options.length; ++i) {						if (str_sparte_id.options[i].text === sparte){							str_sparte_id.options[i].selected = true;						};					};					var status = returnedData.data[0].Status;					var str_status_id = document.getElementById('str_status2');					for (var i = 0; i < str_status_id.options.length; ++i) {						if (str_status_id.options[i].text === status){							str_status_id.options[i].selected = true;						};					};					var turnier = returnedData.data[0].Turnier;					var str_turnier_id = document.getElementById('str_tu_name2');					for (var i = 0; i < str_turnier_id.options.length; ++i) {						if (str_turnier_id.options[i].text === turnier){							str_turnier_id.options[i].selected = true;						};					};					var heim = returnedData.data[0].Heim;					var str_heim_id = document.getElementById('str_heim2');					for (var i = 0; i < str_heim_id.options.length; ++i) {						str_heim_id_text = str_heim_id.options[i].text;						if (str_heim_id_text === heim){							str_heim_id.options[i].selected = true;						};					};					var auswaerts = returnedData.data[0].Auswaerts;					var str_auswaerts_id = document.getElementById('str_auswaerts2');					for (var i = 0; i < str_auswaerts_id.options.length; ++i) {						if (str_auswaerts_id.options[i].text === auswaerts){							str_auswaerts_id.options[i].selected = true;						};					};				});				var heimtor = returnedData.data[0].Heimtore;				$('#int_heimtor').val(heimtor);				var auswaertstor = returnedData.data[0].Auswaertstore;				$('#int_auswaertstor').val(auswaertstor);				var ort = returnedData.data[0].Ort;				$('#str_ort_edit_spiel').val(ort);				var d = returnedData.data[0].Zeit.split(/[- :]/);			 	var datum = "" + d[2] + "." + d[1] + "." + d[0];				$('#d_date_edit_spiel').val(datum);				var t = returnedData.data[0].Zeit.split(/[- :]/);			 	var zeit = "" + t[3] + ":" + t[4];				$('#d_time_edit_spiel').val(zeit);			});		}		if (type == 'mannschaft'){			clearModal();			$('#modalheader').html('Mannschaft "'+x_name+'" bearbeiten');			$('#modalbody').html('<div class="form-horizontal"><div class="form-group"><label class="control-label col-md-4">Mannschaftsname</label><div class="col-md-6"><input class="form-control" type="text" id="str_name_edit_mannschaft" value="" placeholder="Mannschaftsname" /></div></div></div>');			$('#modalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Speichern</a>');			$.post("get_mannschaft/", {"m_id": x_id})			.done(function( data ) {//Rückgabewert der erfolgten function ist ein unformatierter json-Array				var returnedData = JSON.parse('{ "data" : ['+data+']}'); //Rückgabewert richtig formatieren				var name = returnedData.data[0].Name;				$('#str_name_edit_mannschaft').val(name);			});		}		if (type == 'trainingseinheit'){			$('#trainingseinheitheader').html('Trainingseinheit "'+x_name+'" bearbeiten');			$('#trainingseinheitfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Speichern</a>');			$.post("get_trainingseinheit/", {"tr_id": x_id})			.done(function( data ) {//Rückgabewert der erfolgten function ist ein unformatierter json-Array				var returnedData = JSON.parse('{ "data" : ['+data+']}'); //Rückgabewert richtig formatieren				var name = returnedData.data[0].Name;				$('#str_name_edit_trainingseinheit').val(name);				var ort = returnedData.data[0].Ort;				$('#str_ort_edit_trainingseinheit').val(ort);				var d = returnedData.data[0].Zeit.split(/[- :]/);			 	var datum = "" + d[2] + "." + d[1] + "." + d[0];				$('#d_date_edit_trainingseinheit').val(datum);				var t = returnedData.data[0].Zeit.split(/[- :]/);			 	var zeit = "" + t[3] + ":" + t[4];				$('#d_time_edit_trainingseinheit').val(zeit);				var trainer = returnedData.data[0].Trainer;				var str_trainer_id = document.getElementById('str_trainer_edit_trainingseinheit');				for (var i = 0; i < str_trainer_id.options.length; ++i) {					if (str_trainer_id.options[i].value === trainer)						str_trainer_id.options[i].selected = true;				};				var trainingsgruppe = returnedData.data[0].Trainingsgruppe;				var str_tg_name_id = document.getElementById('str_tg_name_edit_trainingseinheit');				for (var i = 0; i < str_tg_name_id.options.length; ++i) {					if (str_tg_name_id.options[i].text === trainingsgruppe)						str_tg_name_id.options[i].selected = true;				};			});		}		if (type == 'trainingsgruppe'){			$('#trainingsgruppemodalheader').html("Trainingsgruppe bearbeiten");			$('#trainingsgruppemodalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Speichern</a>');			$.post("get_trainingsgruppe/", {"tg_id": x_id})			.done(function( data ) {//Rückgabewert der erfolgten function ist ein unformatierter json-Array				var returnedData = JSON.parse('{ "data" : ['+data+']}'); //Rückgabewert richtig formatieren				/*inputfeld ausfüllen*/				var name = returnedData.data[0].Name;				$('#str_name_edit_trainingsgruppe').val(name);				/*Checkboxen reseten und in Array speichern*/				var arr_teilnehmer_option = new Array();				$("input:checkbox[id=arr_teilnehmer_option]").each(function() {					$("input:checkbox[id=arr_teilnehmer_option]").attr('checked', false);					arr_teilnehmer_option.push($(this).val());				});				/*Checkboxen anhand der ID checken*/				for (var j = 1; j < returnedData.data.length; j++){					var person = returnedData.data[j].Person;					for (var i = 0; i < arr_teilnehmer_option.length; ++i) {						if (arr_teilnehmer_option[i] === person){							// arr_teilnehmer_option.options[i].checked = true;							$('input:checkbox[value="'+person+'"]').prop('checked', true);};					};				};			});		}		if (type == 'turnier'){			$('#turniermodalheader').html('Turnier "'+x_name+'" bearbeiten');			$('#turniermodalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Speichern</a>');			$.post("get_turnier/", {"tu_id": x_id})			.done(function( data ) {//Rückgabewert der erfolgten function ist ein unformatierter json-Array				var returnedData = JSON.parse('{ "data" : ['+data+']}'); //Rückgabewert richtig formatieren				/*inputfeld ausfüllen*/				var name = returnedData.data[0].Name;				$('#str_name_edit_turnier').val(name);				var liga = returnedData.data[0].Liga;				if (liga == 1){					$('input:radio[name="int_liga_ja"]').prop('checked', true);					$('input:radio[name="int_liga_nein"]').prop('checked', false);				}else{					$('input:radio[name="int_liga_nein"]').prop('checked', true);					$('input:radio[name="int_liga_ja"]').prop('checked', false);				};				/*Checkboxen reseten und in Array speichern*/				var arr_sparte_option = new Array();				$("input:checkbox[id=arr_sparte_option]").each(function() {					$("input:checkbox[id=arr_sparte_option]").attr('checked', false);					arr_sparte_option.push($(this).val());				});				/*Checkboxen anhand der ID checken*/				for (var j = 1; j < returnedData.data.length; j++){					var sparte = returnedData.data[j].Sparte;					for (var i = 0; i < arr_sparte_option.length; ++i) {						if (arr_sparte_option[i] === sparte){							$('input:checkbox[value="'+sparte+'"]').prop('checked', true);};					};				};			});		}		if (type == 'sparte'){			clearModal();			$('#modalheader').html('Sparte "'+x_name+'" bearbeiten');			$('#modalbody').html('<div class="form-horizontal"><div class="form-group"><label class="control-label col-md-4">Spartenname</label><div class="col-md-6"><input class="form-control" type="text" id="str_name_edit_sparte" value="" placeholder="Spartenname" /></div></div></div>');			$('#modalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Speichern</a>');			$.post("get_sparte/", {"sparte_id": x_id})			.done(function( data ) {//Rückgabewert der erfolgten function ist ein unformatierter json-Array				var returnedData = JSON.parse('{ "data" : ['+data+']}'); //Rückgabewert richtig formatieren				var name = returnedData.data[0].Name;				$('#str_name_edit_sparte').val(name);			});		}		if (type == 'reset_password'){			clearModal();			$('#bs_modal').modal('toggle');			$('#modalheader').html("Passwort zurücksetzen bestätigen");			$('#modalbody').html('Wollen Sie das Passwort von "'+x_name+'" wirklich zurücksetzen?');			$( '<div class="modal-footer" id="modalfooter"></div>' ).replaceAll( ".personenfooter" );			$('#modalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Passwort zurücksetzen</a>');		}	}else if (modal_id == 3){ //ID für Löschen		if (type == 'turnier'){			clearModal();			$('#modalheader').html("Löschen bestätigen");			$('#modalbody').html('Wollen Sie '+x_name+' wirklich löschen?');			$('#modalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Löschen</a>');		}else{			clearModal();			$('#modalheader').html("Löschen bestätigen");			$('#modalbody').html('Wollen Sie '+x_name+' wirklich löschen?');			$('#modalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Löschen</a>');		}	}}function clearModal(){	$('#bs_Modal').find(".modal-content").empty();	$('#bs_Modal').find(".modal-content").html('<div class="modal-header"><h4 class="modal-title" id="ModalLabel"><div id="modalheader"></div></h4></div><div class="modal-body" id="modalbody"></div><div class="modal-footer" id="modalfooter"></div>');}//Das successModal führt den Post Request, also den tatsächlichen Vorgang durch und meldet positiv oder negativ zurück.function successModal(modal_id, type, x_id) {	if (modal_id == 1){ //ID für Add	}else if (modal_id == 2){ //ID für Bearbeiten		//Post Request auf die PHP Funktion im Controller von Profil um die Daten in die DB zu schreiben		if (type == "person"){			/*Inputfeld Wert in Variable definieren*/			var str_nachname_in = $('#str_nachname_edit_person');			var str_nachname = str_nachname_in.val();			var str_vorname_in = $('#str_vorname_edit_person');			var str_vorname = str_vorname_in.val();			var d_date_in = $('#d_date_edit_person');			var d_date = d_date_in.val();			var int_groesse_in = $('#int_groesse_edit_person');			var int_groesse = int_groesse_in.val();			// var b_betreuer_in = $('#b_betreuer');			// var b_betreuer = b_betreuer_in.val();			var b_betreuer = $('input[id=b_betreuer]:checked').val();			var int_tel_in = $('#int_tel_edit_person');			var int_tel = int_tel_in.val();			$.post("edit_"+type+"/",{"p_id":x_id, "str_nachname":str_nachname, "str_vorname":str_vorname, "d_date":d_date, "int_groesse":int_groesse, "b_betreuer":b_betreuer, "int_tel":int_tel})			.done(function( data ) {				if (data == 1){						$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Person bearbeiten erfolgreich abgeschlossen!</div>');						$('#successModal').modal('toggle');						window.setTimeout(function(){location.reload();},2000);					}					else{						$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');						$('#successModal').modal('toggle');						window.setTimeout(function(){location.reload();},2000);					}				}			);		}		if (type == "reset_password"){			$.post("reset_password/",{"p_id": x_id})			.done(function( data ) {				if (data == 1){						$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Passwort erfolgreich zurückgesetzt!</div>');						$('#successModal').modal('toggle');						window.setTimeout(function(){location.reload();},2000);					}					else{						$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');						$('#successModal').modal('toggle');						window.setTimeout(function(){location.reload();},2000);					}				}			);		}		if (type == "spiel"){			var str_sparte_in = $('#str_sparte2');			var str_sparte = str_sparte_in.val();			var str_status_in = $('#str_status2');			var str_status = str_status_in.val();			var str_tu_name_in = $('#str_tu_name2');			var str_tu_name = str_tu_name_in.val();			var str_heim_in = $('#str_heim2');			var str_heim = str_heim_in.val();			var str_auswaerts_in = $('#str_auswaerts2');			var str_auswaerts = str_auswaerts_in.val();			var str_ort_in = $('#str_ort_edit_spiel');			var str_ort = str_ort_in.val();			var d_date_in = $('#d_date_edit_spiel');			var d_date = d_date_in.val();			var d_time_in = $('#d_time_edit_spiel');			var d_time = d_time_in.val();			var int_heimtor_in = $('#int_heimtor');			var int_heimtor = int_heimtor_in.val();			var int_auswaertstor_in = $('#int_auswaertstor');			var int_auswaertstor = int_auswaertstor_in.val();			$.post("edit_"+type+"/",{"s_id":x_id, "str_ort":str_ort, "str_heim":str_heim, "str_auswaerts":str_auswaerts, "int_h_tore":int_heimtor, "int_a_tore":int_auswaertstor, "str_stat_name":str_status, "d_date":d_date, "d_time":d_time, "str_tu_name":str_tu_name, "str_sparte":str_sparte})				.done(function( data ) {					if (data == 1){							$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Spiel erfolgreich bearbeitet!</div>');							$('#successModal').modal('toggle');							window.setTimeout(function(){location.reload();},2000);						}						else{							$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');							$('#successModal').modal('toggle');							window.setTimeout(function(){location.reload();},2000);						}					}				);		}		if (type == "mannschaft"){			var str_name_in = $('#str_name_edit_mannschaft');			var str_name = str_name_in.val();			$.post("edit_"+type+"/",{"m_id":x_id, "str_name":str_name})				.done(function( data ) {					if (data == 1){							$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Mannschaft erfolgreich bearbeitet!</div>');							$('#successModal').modal('toggle');							window.setTimeout(function(){location.reload();},2000);						}						else{							$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');							$('#successModal').modal('toggle');							window.setTimeout(function(){location.reload();},2000);						}					}				);		}		if (type == "trainingseinheit"){			var str_name_in = $('#str_name_edit_trainingseinheit');			var str_name = str_name_in.val();			var str_ort_in = $('#str_ort_edit_trainingseinheit');			var str_ort = str_ort_in.val();			var str_trainer_in = $('#str_trainer_edit_trainingseinheit');			var str_trainer = str_trainer_in.val();			var str_tg_name_in = $('#str_tg_name_edit_trainingseinheit');			var str_tg_name = str_tg_name_in.val();			var d_date_in = $('#d_date_edit_trainingseinheit');			var d_date = d_date_in.val();			var d_time_in = $('#d_time_edit_trainingseinheit');			var d_time = d_time_in.val();			$.post("edit_"+type+"/",{"tr_id":x_id, "str_name":str_name, "str_ort":str_ort, "d_date":d_date, "d_time":d_time, "str_tg_name":str_tg_name, "str_trainer":str_trainer})				.done(function( data ) {					if (data == 1){							$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Trainingseinheit erfolgreich bearbeitet!</div>');							$('#successModal').modal('toggle');							window.setTimeout(function(){location.reload();},2000);						}						else{							$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');							$('#successModal').modal('toggle');							window.setTimeout(function(){location.reload();},2000);						}					}				);		}		if (type == "trainingsgruppe"){			var str_name_in = $('#str_name_edit_trainingsgruppe');			var str_name = str_name_in.val();			var arr_teilnehmer_option = new Array();			$("input:checkbox[id=arr_teilnehmer_option]:checked").each(function() {				arr_teilnehmer_option.push($(this).val());			});			if (arr_teilnehmer_option.length == 0){				arr_teilnehmer_option = null;			};			$.post("edit_"+type+"/",{"tg_id":x_id, "str_name":str_name, "arr_teilnehmer_option":arr_teilnehmer_option})				.done(function( data ) {					if (data == 1){							$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Trainingsgruppe erfolgreich bearbeitet!</div>');							$('#successModal').modal('toggle');							window.setTimeout(function(){location.reload();},2000);						}						else{							$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');							$('#successModal').modal('toggle');							window.setTimeout(function(){location.reload();},2000);						}					}				);		}		if (type == "turnier"){			var str_name_in = $('#str_name_edit_turnier');			var str_name = str_name_in.val();			// var int_liga_in = $('#int_liga');			// var int_liga = int_liga_in.val();			var int_liga = $('input[id=int_liga]:checked').val();			var arr_sparte_option = new Array();			$("input:checkbox[id=arr_sparte_option]:checked").each(function() {				arr_sparte_option.push($(this).val());			});			if (arr_sparte_option.length == 0){				arr_sparte_option = null;			};			$.post("edit_"+type+"/",{"tu_id":x_id, "str_name":str_name, "int_liga":int_liga, "arr_sparte_option":arr_sparte_option})				.done(function( data ) {					if (data == 1){							$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Turnier erfolgreich bearbeitet!</div>');							$('#successModal').modal('toggle');							window.setTimeout(function(){location.reload();},2000);						}						else{							$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');							$('#successModal').modal('toggle');							window.setTimeout(function(){location.reload();},2000);						}					}				);		}		if (type == "sparte"){			var str_name_in = $('#str_name_edit_sparte');			var str_name = str_name_in.val();			$.post("edit_"+type+"/",{"sparte_id":x_id, "str_name":str_name})				.done(function( data ) {					if (data == 1){							$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Sparte erfolgreich bearbeitet!</div>');							$('#successModal').modal('toggle');							window.setTimeout(function(){location.reload();},2000);						}						else{							$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');							$('#successModal').modal('toggle');							window.setTimeout(function(){location.reload();},2000);						}					}				);		}	}else if (modal_id == 3){ //ID für Löschen		//Post Request auf die PHP Funktion im Controller von Verwaltung um die Daten von DB zu löschen		$.post("delete_"+type+"/",{"del_id": x_id})		.done(function( data ) {			if (data == 1){					$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Löschen erfolgreich abgeschlossen!</div>');					$('#successModal').modal('toggle');					window.setTimeout(function(){location.reload();},2000);				}				else{					$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');					$('#successModal').modal('toggle');					window.setTimeout(function(){location.reload();},2000);				}			}		);	}}//**************************************************// Die folgenden zwei functions entsprechen den ersten zwei mit der Ausnahme, dass eine weitere ID mitgegeben// werden kann.function toggleModalS(modal_id, type, x_id, y_id, x_name){	if (modal_id == 2){ //ID für Bearbeiten		if (type == 'turnier_sparte'){			$('#turnier_sparte_header').html(x_name+" bearbeiten");			$('#turnier_sparte_footer').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModalS(\''+modal_id+'\',\''+type+'\',\''+x_id+'\',\''+y_id+'\')">Speichern</a>');			$.post("get_turnier_sparte/", {"tu_id": x_id, "sparte_id": y_id})			.done(function( data ) {//Rückgabewert der erfolgten function ist ein unformatierter json-Array				var returnedData = JSON.parse('{ "data" : ['+data+']}'); //Rückgabewert richtig formatieren				/*Checkboxen reseten und in Array speichern*/				var arr_mannschaft_option = new Array();				$("input:checkbox[id=arr_mannschaft_option]").each(function() {					$("input:checkbox[id=arr_mannschaft_option]").attr('checked', false);					arr_mannschaft_option.push($(this).val());				});				/*Checkboxen anhand der ID checken*/				for (var j = 1; j < returnedData.data.length; j++){					var mannschaft = returnedData.data[j].Mannschaft;					for (var i = 0; i < arr_mannschaft_option.length; ++i) {						if (arr_mannschaft_option[i] === mannschaft){							$('input:checkbox[value="'+mannschaft+'"]').prop('checked', true);};					};				};				var gewinner = returnedData.data[0].Gewinner;				var str_gewinner = document.getElementById('str_gewinner_edit_turnier_sparte');				str_gewinner.options[0].selected = true;				for (var i = 0; i < str_gewinner.options.length; ++i) {					if (str_gewinner.options[i].text === gewinner){						str_gewinner.options[i].selected = true;					};				};			});		}	}else if (modal_id == 3){ //ID für Löschen		$('#modalheader').html("Löschen bestätigen");		$('#modalbody').html('Wollen Sie "'+x_name+'" löschen?');		$('#modalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModalS(\''+modal_id+'\',\''+type+'\',\''+x_id+'\',\''+y_id+'\')">Löschen</a>');	}}function successModalS(modal_id, type, x_id, y_id) {	if (modal_id == 1){ //ID für Add	}else if (modal_id == 2){ //ID für Bearbeiten		var arr_mannschaft_option = new Array();		$("input:checkbox[id=arr_mannschaft_option]:checked").each(function() {			arr_mannschaft_option.push($(this).val());		});		if (arr_mannschaft_option.length == 0){			arr_mannschaft_option = null;		};		var str_gewinner_in = $('#str_gewinner_edit_turnier_sparte');			var str_gewinner = str_gewinner_in.val();		$.post("edit_"+type+"/",{"tu_id":x_id, "sparte_id":y_id, "arr_mannschaft_option":arr_mannschaft_option, "str_gewinner":str_gewinner})			.done(function( data ) {			 	if (data == 1){			 			$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Turnier erfolgreich bearbeitet!</div>');						$('#successModal').modal('toggle');						window.setTimeout(function(){location.reload();},2000);					}					else{						$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');						$('#successModal').modal('toggle');						window.setTimeout(function(){location.reload();},2000);					}				}			);	}else if (modal_id == 3){ //ID für Löschen		//Post Request auf die PHP Funktion im Controller von Verwaltung um die Daten von DB zu löschen		$.post("delete_"+type+"/",{"tu_id": x_id, "sparte_id":y_id})			.done(function( data ) {			 	if (data == 1){			 			$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Löschen erfolgreich abgeschlossen!</div>');						$('#successModal').modal('toggle');						window.setTimeout(function(){location.reload();},2000);					}					else{						$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');						$('#successModal').modal('toggle');						window.setTimeout(function(){location.reload();},2000);					}			});	}}