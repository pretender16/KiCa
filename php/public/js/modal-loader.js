// Funktion toggleModal ruft das erste Modal auf. 
// Anhand der modal_id wird unterschieden, ob es sich um add, edit oder delete handelt. 
// Anhand des type wird unterschieden was hinzugefügt, bearbeitet oder gelöscht wird. 
// Diese Funktion ist nur für die Darstellung der entsprechenden Modals da!

function toggleModal(modal_id, type, x_id, x_name){
	if (modal_id == 1){ //ID für Add

	}else if (modal_id == 2){ //ID für Bearbeiten
		if (type == 'person'){
			$('#modalheader').html('Person "'+x_name+'" bearbeiten');
			$('#modalbody').html('<div class="form-horizontal"><div class="form-group"><label class="control-label col-md-4">Nachname</label><div class="col-md-6"><input class="form-control" type="text" id="str_nachname" value="" placeholder="Nachname" /></div></div><div class="form-group"><label class="control-label col-md-4">Vorname</label><div class="col-md-6"><input class="form-control" type="text" id="str_vorname" value="" placeholder="Vorname" /></div></div><div class="form-group"><label class="control-label col-md-4">Geburtsdatum</label><div class="col-md-6"><div class="sandbox-container input-group "><input class="form-control" id="d_date" type="text"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span></div></div><script> $(\'.sandbox-container input\').datepicker();</script></div><div class="form-group"><label class="control-label col-md-4">Groesse</label><div class="col-md-6"><input class="form-control" id="int_groesse" value="" placeholder="Beispiel 158cm" /></div></div><div class="form-group"><label class="control-label col-md-4">Betreuer?</label><div class="col-md-6"><select class="form-control" id="b_betreuer" size="1" ><option></option><option value="0">Nein</option><option value="1">Ja</option></select></div></div><div class="form-group"><label class="control-label col-md-4">Telefonnummer</label><div class="col-md-6"><input class="form-control" type="number" id="int_tel" value="" placeholder="Telefonnummer" /></div></div></div>');
			$( '<div class="personenfooter" id="personmodalfooter"></div>' ).replaceAll( ".modal-footer" );
			$('#personmodalfooter').html('<div class="pwresbtn"><a type="submit" class="btn btn-danger" onclick="toggleModal(\'2\',\'reset_password\',\''+x_id+'\',\''+x_name+'\')">Passwort zurücksetzen</a></div><div class="footerbtn"><button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit"  class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Speichern</a></div>');
		}
		if (type == 'spiel'){

			$('#spielmodalheader').html('Spiel "'+x_name+'" bearbeiten');
			$('#spielmodalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Speichern</a>');
		}
		if (type == 'mannschaft'){
			$('#modalheader').html('Mannschaft "'+x_name+'" bearbeiten');
			$('#modalbody').html('<div class="form-horizontal"><div class="form-group"><label class="control-label col-md-4">Mannschaftsname</label><div class="col-md-6"><input class="form-control" type="text" id="str_new_mannschaft" value="" placeholder="Mannschaftsname" /></div></div></div>');
			$('#modalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Speichern</a>');
		}
		if (type == 'trainingseinheit'){
			$('#trainingseinheitheader').html("Trainingseinheit bearbeiten");
			$('#trainingseinheitfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Speichern</a>');
		}
		if (type == 'traininggruppe'){

		}
		if (type == 'turnier'){
			$('#turniermodalheader').html("Turnier bearbeiten");
			$('#turniermodalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Speichern</a>');
		}
		if (type == 'reset_password'){
			$('#bs_modal').modal('toggle');
			$('#modalheader').html("Passwort zurücksetzen bestätigen");
			$('#modalbody').html('Wollen Sie das Passwort von "'+x_name+'" wirklich zurücksetzen?');
			$( '<div class="modal-footer" id="modalfooter"></div>' ).replaceAll( ".personenfooter" );
			$('#modalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Passwort zurücksetzen</a>');
		}
	}else if (modal_id == 3){ //ID für Löschen
		
		if (type == 'turnier'){
			$('#modalheader').html("Löschen bestätigen");
			$('#modalbody').html('Wollen Sie '+x_name+' wirklich löschen? </br>Achtung: Alle verknüpften Sparten und Mannschaften werden ebenfalls gelöscht!');
			$('#modalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Löschen</a>');
		}else{
			$('#modalheader').html("Löschen bestätigen");
			$('#modalbody').html('Wollen Sie '+x_name+' wirklich löschen?');
			$('#modalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModal(\''+modal_id+'\',\''+type+'\',\''+x_id+'\')">Löschen</a>');
		}
	}

}


//Das successModal führt den Post Request, also den tatsächlichen Vorgang durch und meldet positiv oder negativ zurück.
function successModal(modal_id, type, x_id) {
	if (modal_id == 1){ //ID für Add

	}else if (modal_id == 2){ //ID für Bearbeiten
	
		//Post Request auf die PHP Funktion im Controller von Profil um die Daten in die DB zu schreiben

		if (type == "person"){

			/*Inputfeld Wert in Variable definieren*/
			var str_nachname_in = $('#str_nachname');
			var str_nachname = str_nachname_in.val();
			var str_vorname_in = $('#str_vorname');
			var str_vorname = str_vorname_in.val();
			var d_date_in = $('#d_date');
			var d_date = d_date_in.val();
			var int_groesse_in = $('#int_groesse');
			var int_groesse = int_groesse_in.val();
			var b_betreuer_in = $('#b_betreuer');
			var b_betreuer = b_betreuer_in.val();
			var int_tel_in = $('#int_tel');
			var int_tel = int_tel_in.val();

			$.post("edit_"+type+"/",{"p_id":x_id, "str_nachname":str_nachname, "str_vorname":str_vorname, "d_date":d_date, "int_groesse":int_groesse, "b_betreuer":b_betreuer, "int_tel":int_tel})
			.done(function( data ) {
				if (data == 1){
						$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Person bearbeiten erfolgreich abgeschlossen!</div>');
						$('#successModal').modal('toggle');
						window.setTimeout(function(){location.reload();},2000);
					}
					else{
						$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');
						$('#successModal').modal('toggle');
						window.setTimeout(function(){location.reload();},2000);
					}
				}
			);
		}
		if (type == "reset_password"){
			$.post("reset_password/",{"p_id": x_id})
			.done(function( data ) {
				if (data == 1){
						$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Passwort erfolgreich zurückgesetzt!</div>');
						$('#successModal').modal('toggle');
						window.setTimeout(function(){location.reload();},2000);
					}
					else{
						$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');
						$('#successModal').modal('toggle');
						window.setTimeout(function(){location.reload();},2000);
					}
				}
			);
		}
		if (type == "spiel"){
			var str_sparte_in = $('#str_sparte2');
			var str_sparte = str_sparte_in.val();
			var str_status_in = $('#str_status2');
			var str_status = str_status_in.val();
			var str_tu_name_in = $('#str_tu_name2');
			var str_tu_name = str_tu_name_in.val();
			var str_heim_in = $('#str_heim2');
			var str_heim = str_heim_in.val();
			var str_auswaerts_in = $('#str_auswaerts2');
			var str_auswaerts = str_auswaerts_in.val();
			var str_ort_in = $('#str_ort2');
			var str_ort = str_ort_in.val();
			var d_date_in = $('#d_date2');
			var d_date = d_date_in.val();
			var d_time_in = $('#d_time2');
			var d_time = d_time_in.val();
			var int_heimtor_in = $('#int_heimtor');
			var int_heimtor = int_heimtor_in.val();
			var int_auswaertstor_in = $('#int_auswaertstor');
			var int_auswaertstor = int_auswaertstor_in.val();
			$.post("edit_"+type+"/",{"s_id":x_id, "str_ort":str_ort, "str_heim":str_heim, "str_auswaerts":str_auswaerts, "int_h_tore":int_heimtor, "int_a_tore":int_auswaertstor, "str_stat_name":str_status, "d_date":d_date, "d_time":d_time, "str_tu_name":str_tu_name, "str_sparte":str_sparte})
				.done(function( data ) {
					if (data == 1){
							$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Spiel erfolgreich bearbeitet!</div>');
							$('#successModal').modal('toggle');
							window.setTimeout(function(){location.reload();},2000);
						}
						else{
							$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');
							$('#successModal').modal('toggle');
							window.setTimeout(function(){location.reload();},2000);
						}
					}
				);
		}
		if (type == "mannschaft"){
			var str_name_in = $('#str_new_mannschaft');
			var str_name = str_name_in.val();
			$.post("edit_"+type+"/",{"m_id":x_id, "str_name":str_name})
				.done(function( data ) {
					if (data == 1){
							$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Mannschaft erfolgreich bearbeitet!</div>');
							$('#successModal').modal('toggle');
							window.setTimeout(function(){location.reload();},2000);
						}
						else{
							$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');
							$('#successModal').modal('toggle');
							window.setTimeout(function(){location.reload();},2000);
						}
					}
				);
		}
		if (type == "trainingseinheit"){
			var str_name_in = $('#edit_trainingseinheit_str_name');
			var str_name = str_name_in.val();
			var str_ort_in = $('#edit_trainingseinheit_str_ort');
			var str_ort = str_ort_in.val();
			var str_trainer_in = $('#edit_trainingseinheit_str_trainer');
			var str_trainer = str_trainer_in.val();
			var str_tg_name_in = $('#edit_trainingseinheit_str_tg_name');
			var str_tg_name = str_tg_name_in.val();
			var d_date_in = $('#edit_trainingseinheit_d_date');
			var d_date = d_date_in.val();
			var d_time_in = $('#edit_trainingseinheit_timepicker');
			var d_time = d_time_in.val();
			$.post("edit_"+type+"/",{"tr_id":x_id, "str_name":str_name, "str_ort":str_ort, "d_date":d_date, "d_time":d_time, "str_tg_name":str_tg_name, "str_trainer":str_trainer})
				.done(function( data ) {
					if (data == 1){
							$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Trainingseinheit erfolgreich bearbeitet!</div>');
							$('#successModal').modal('toggle');
							window.setTimeout(function(){location.reload();},2000);
						}
						else{
							$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');
							$('#successModal').modal('toggle');
							window.setTimeout(function(){location.reload();},2000);
						}
					}
				);
		}
		if (type == "turnier"){
			var str_name_in = $('#str_name');
			var str_name = str_name_in.val();
			// var int_liga_in = $('#int_liga');
			// var int_liga = int_liga_in.val();
			
			var int_liga = $('input[id=int_liga]:checked').val();
			var arr_sparte_option = new Array();
			$("input:checkbox[id=arr_sparte_option]:checked").each(function() {
				arr_sparte_option.push($(this).val());
			});
			$.post("edit_"+type+"/",{"tu_id":x_id, "str_name":str_name, "int_liga":int_liga, "arr_sparte_option":arr_sparte_option})
				.done(function( data ) {
					if (data == 1){
							$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Turnier erfolgreich bearbeitet!</div>');
							$('#successModal').modal('toggle');
							window.setTimeout(function(){location.reload();},2000);
						}
						else{
							$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');
							$('#successModal').modal('toggle');
							window.setTimeout(function(){location.reload();},2000);
						}
					}
				);
		}
	}else if (modal_id == 3){ //ID für Löschen
		//Post Request auf die PHP Funktion im Controller von Verwaltung um die Daten von DB zu löschen
		$.post("delete_"+type+"/",{"del_id": x_id})
		.done(function( data ) {
			if (data == 1){
					$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Löschen erfolgreich abgeschlossen!</div>');
					$('#successModal').modal('toggle');
					window.setTimeout(function(){location.reload();},2000);
				}
				else{
					$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');
					$('#successModal').modal('toggle');
					window.setTimeout(function(){location.reload();},2000);
				}
			}
		);
	}
}


//**************************************************
// Die folgenden drei functions entsprechen den ersten zwei mit der Ausnahme, dass eine weitere ID mitgegeben
// werden kann.
function toggleModalS(modal_id, type, x_id, y_id, x_name){
	if (modal_id == 2){ //ID für Bearbeiten
		if (type == 'turnier_sparte'){
			$('#turnier_sparte_header').html(x_name+"bearbeiten");
			$('#turnier_sparte_footer').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModalS(\''+modal_id+'\',\''+type+'\',\''+x_id+'\',\''+y_id+'\')">Speichern</a>');
		}
	}else if (modal_id == 3){ //ID für Löschen
		$('#modalheader').html("Löschen bestätigen");
		$('#modalbody').html('Wollen Sie "'+x_name+'" löschen?');
		$('#modalfooter').html('<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button> <a type="submit" class="btn btn-primary" data-dismiss="modal" onclick="successModalS(\''+modal_id+'\',\''+type+'\',\''+x_id+'\',\''+y_id+'\')">Löschen</a>');
	}
}

function successModalS(modal_id, type, x_id, y_id) {
	if (modal_id == 1){ //ID für Add

	}else if (modal_id == 2){ //ID für Bearbeiten
		
		var arr_mannschaft_option = new Array();
		$("input:checkbox[id=arr_mannschaft_option]:checked").each(function() {
			arr_mannschaft_option.push($(this).val());
		});
		if (arr_mannschaft_option.length == 0){
			arr_mannschaft_option = null;
		};
		var str_gewinner_in = $('#str_gewinner');
			var str_gewinner = str_gewinner_in.val();
		$.post("edit_"+type+"/",{"tu_id":x_id, "sparte_id":y_id, "arr_mannschaft_option":arr_mannschaft_option, "str_gewinner":str_gewinner})
			.done(function( data ) {
			 	if (data == 1){
			 			$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Turnier erfolgreich bearbeitet!</div>');
						$('#successModal').modal('toggle');
						window.setTimeout(function(){location.reload();},2000);
					}
					else{
						$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');
						$('#successModal').modal('toggle');
						window.setTimeout(function(){location.reload();},2000);
					}
				}
			);
	
	}else if (modal_id == 3){ //ID für Löschen
		//Post Request auf die PHP Funktion im Controller von Verwaltung um die Daten von DB zu löschen
		$.post("delete_"+type+"/",{"tu_id": x_id, "sparte_id":y_id})
			.done(function( data ) {
			 	if (data == 1){
			 			$('#successModal_dialog').html('<div class="alert alert-success"><strong>Erfolgreich!</strong> Löschen erfolgreich abgeschlossen!</div>');
						$('#successModal').modal('toggle');
						window.setTimeout(function(){location.reload();},2000);
					}
					else{
						$('#successModal_dialog').html('<div class="alert alert-danger"><strong>Fehler!</strong> Es ist ein Fehler aufgetreten!</div>');
						$('#successModal').modal('toggle');
						window.setTimeout(function(){location.reload();},2000);
					}
			});
	}
}