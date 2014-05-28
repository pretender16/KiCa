$(function(){

    //Buttons ausschalten (beim Laden der Seite)
    document.getElementById('submit_change_password').disabled = true;
    document.getElementById('submit_saveTel').disabled = true;
    document.getElementById('submit_saveGroesse').disabled = true;
});

//prüft, ob im Modal der Passwortänderung etwas als altes Passwort eingegeben wurde
function checkPassword_alt(){
	var altesPasswort = document.form1.str_altesPassword.value;

	if (altesPasswort != ""){
		//die restlichen Felder des neuen Passworts prüfen
		checkPassword_neu();
	}
	else{
		document.getElementById('submit_change_password').disabled = true;

	}
}

//prüft, ob das eingegebene Passwort bei einer Passwortänderung korrekt wiederholt wurde
function checkPassword_neu() {
	var neuesPassword = document.form1.str_neuesPassword.value;
	var neuesPasswordWiederholt = document.form1.str_neuesPasswordWiederholt.value;

	if(neuesPasswordWiederholt != "" && neuesPassword != ""){
		if(neuesPassword != neuesPasswordWiederholt){
			document.form1.str_neuesPassword.style.backgroundColor = "#E98383";
			document.form1.str_neuesPasswordWiederholt.style.backgroundColor = "#E98383";
			document.getElementById('submit_change_password').disabled = true;
		}else{
			document.form1.str_neuesPassword.style.backgroundColor = '#83E983';
			document.form1.str_neuesPasswordWiederholt.style.backgroundColor = '#83E983';
			document.getElementById('submit_change_password').disabled = false;
		}
	}
	else{
		document.getElementById('submit_change_password').disabled = true;
	}
}

//prüft, ob eine Größe eingegeben wurde und ob der Wert annehmbar ist
function checkGroesse(){

	 var groesse = document.getElementById('neueGroesse').value

	 if (!isNaN(groesse) && groesse > 0 && groesse < 251 && groesse != ""){
	 	 document.getElementById('submit_saveGroesse').disabled = false;
	 }
	 else{
	 	 document.getElementById('submit_saveGroesse').disabled = true;
	 }

}

//prüft, ob eine Größe eingegeben wurde und ob der Wert annehmbar ist
function checkTel(){

	 var tel = document.getElementById('neueTel').value

	 if (!isNaN(tel) && tel > 0 && tel < 999999999999999 && tel != ""){
	 	 document.getElementById('submit_saveTel').disabled = false;
	 }
	 else{
	 	 document.getElementById('submit_saveTel').disabled = true;
	 }

}

//Über den Button "Ändern" des Modals der Größe, um den neuen Wert in die DB schreiben
function saveGroesse() {

		var groesse_value = $('#neueGroesse');

		//Umweg über Variable muss gesetzt werden - das Script funktioniert nicht, wenn der Post Request direkt getätigt wird
		var groesse = groesse_value.val();

		//Post Request auf die PHP Funktion im Controller von Profil um die Daten in die DB zu schreiben
		// $.post("doChangeGroesse", {"int_groesse": groesse});
		$.post("doChangeGroesse", {"int_groesse": groesse})
			 .done(function( data ) {
			 	if (data == 1){
			 			$('#successModal_head').html("Erfolgreich");
			 			$('#successModal_body').html("Größe erfolgreich geändert!");
			 			$('#successModal').modal('toggle');
					}
					else{
						$('#successModal_head').html("Fehler");
			 			$('#successModal_body').html("Größe konnte nicht geändert werden!");
						$('#successModal').modal('toggle');
					}
				});
}

//Über den Button "Ändern" des Modals der Telefonnummer, um den neuen Wert in die DB schreiben
function saveTel() {

		var tel_value = $('#neueTel');

		//Umweg über Variable muss gesetzt werden - das Script funktioniert nicht, wenn der Post Request direkt getätigt wird
		var tel = tel_value.val();

		//Post Request auf die PHP Funktion im Controller von Profil um die Daten in die DB zu schreiben
		$.post("doChangeTel", {"str_tel": tel})
			 .done(function( data ) {
			 	if (data == 1){
			 			$('#successModal_head').html("Erfolgreich");
			 			$('#successModal_body').html("Telefonnummer erfolgreich geändert!");
			 			$('#successModal').modal('toggle');
					}
					else{
						$('#successModal_head').html("Fehler");
			 			$('#successModal_body').html("Telefonnummer konnte nicht geändert werden!");
						$('#successModal').modal('toggle');
					}
				});
}

//Über den Button "Ändern" des Modals des Passworts, um den neuen Wert in die DB schreiben
function savePassword() {

		var pw_value_1 = $('#altesPW');
		var pw_value_2 = $('#neuesPW');
		var pw_value_3 = $('#neuesPW_2');

		//Umweg über Variable muss gesetzt werden - das Script funktioniert nicht, wenn der Post Request direkt getätigt wird
		var pw_alt = pw_value_1.val();
		var pw_neu = pw_value_2.val();
		var pw_neu_2 = pw_value_3.val();

		//Post Request auf die PHP Funktion im Controller von Profil um die Daten in die DB zu schreiben
		$.post("doChangePassword", {"str_altesPassword": pw_alt, "str_neuesPassword": pw_neu, "str_neuesPasswordWiederholt": pw_neu_2})
			 .done(function( data ) {
			 	if (data == 1){
			 			$('#successModal_head').html("Erfolgreich");
			 			$('#successModal_body').html("Passwort erfolgreich geändert!");
			 			$('#successModal').modal('toggle');
					}
					else{
						$('#successModal_head').html("Fehler");
			 			$('#successModal_body').html("Passwort konnte nicht geändert werden!\nBitte überprüfen Sie Ihre Eingaben.");
						$('#successModal').modal('toggle');
					}
				});

}


//Wenn auf Abbrechen gedrückt wird im Modal, das Größe Ändern Modal zurücksetzen
function dismissGroesse() {
	document.getElementById('neueGroesse').value = "";
}

//Wenn auf Abbrechen gedrückt wird im Modal, das Telefon Ändern Modal zurücksetzen
function dismissTel() {
	document.getElementById('neueTel').value = "";
}

//Wenn auf Abbrechen gedrückt wird im Modal, das PW Ändern Modal zurücksetzen
function dismissPW() {
	document.getElementById('altesPW').value = "";
	document.getElementById('neuesPW').value = "";
	document.getElementById('neuesPW_2').value = "";
	document.form1.str_neuesPassword.style.backgroundColor = "#fff";
	document.form1.str_neuesPasswordWiederholt.style.backgroundColor = "#fff";
	document.getElementById('submit_change_password').disabled = true;
}
