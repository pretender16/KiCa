<?php
	if (isset($_SESSION['user_login_status']) AND $_SESSION['betreuer'] == 1){
?>
<script src="<?php echo URL; ?>public/js/verwaltung.js"> </script>
<script src="<?php echo URL; ?>public/js/format.js"> </script>

<div class="container">
	<ul class="nav nav-tabs">
		<li class="active">
			<a data-toggle="tab" href="#add">Hinzufügen</a>
		</li>
		<li>
			<a data-toggle="tab" href="#edit">Bearbeiten</a>
		</li>
	</ul>
	<div id="tabcontent" class="tab-content">
	<?php /***Add-Tab***/?>
		<div id="add" class="tab-pane fade in active">
			<div class="panel-group" id="accordion">
				<?php /***Personen-Add***/?>
				<div class="panel panel-default">
					<div id="p_add_glyph" onclick="change_chevron('#p_add_glyph','#p_add_glyph_span')" class="panel-heading collapsed" data-toggle="collapse" data-parent="#accordion" href="#p_add">
						<h4 class="panel-title">
							<a class="collapse_title" >Neue Person hinzufügen</a><div id="p_add_glyph_span" class="collapse_chevron"><span class="glyphicon glyphicon-chevron-left"></span></div>
						</h4>
					</div>
					<div id="p_add" class="panel-collapse collapse">
						<div class="panel-body">
							<form class="form-horizontal" action="<?php echo URL; ?>verwaltung/add_person/" method="POST">
								<div class="form-group">
									<label class="control-label col-md-4">Vorname*</label>
									<div class="col-md-4">
										<input class="form-control" type="text" name="str_vorname" id="str_vorname_add_person" onkeyup="inputChecker('str_50', 'str_vorname_add_person', 'submit_add_person')" value="" placeholder="Vorname" required />
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Nachname*</label>
									<div class="col-md-4">
										<input class="form-control" type="text" name="str_nachname" id="str_nachname_add_person" onkeyup="inputChecker('str_50', 'str_nachname_add_person', 'submit_add_person')" value="" placeholder="Nachname" required/>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Geburtsdatum*</label>
									<div class="col-md-4">
										<div data-provide="datepicker" class="input-group date">
											<input class="form-control" name="d_date" type="text" id="d_date_add_person" onkeyup="inputChecker('date', 'd_date_add_person', 'submit_add_person')" placeholder="Beispiel 01.01.2011" required>
											<span class="input-group-addon glyphicon glyphicon-calendar"></span>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Groesse</label>
									<div class="col-md-4">
										<input class="form-control" name="int_groesse" id="int_groesse_add_person" value="" onkeyup="inputChecker('groesse', 'int_groesse_add_person', 'submit_add_person')" placeholder="Beispiel in cm: 158" />
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Telefonnummer</label>
									<div class="col-md-4">
										<input class="form-control" name="int_tel" id="int_tel_add_person" value="" onkeyup="inputChecker('tel', 'int_tel_add_person', 'submit_add_person')" placeholder="Telefonnummer" />
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Betreuer?*</label>
									<div class="col-md-1">
										<label>
											<input type="radio" name="b_betreuer" id="optionsRadios2" value="1">
											Ja
										</label>
									</div>
									<div class="col-md-2">
										<label>
											<input type="radio" name="b_betreuer" id="optionsRadios1" value="0" checked>
											Nein
										</label>
									</div>
								</div>
								<div class="form-group">
									<div class="col-md-offset-4 col-md-4 formular-button">
										<a class="btn btn-default"  role="button" href="<?php echo URL . 'verwaltung/' ?>" >Abbrechen</a>
										<input type="submit" class="btn btn-primary" name="submit_add_person" id="submit_add_person" value="Speichern" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<?php /***Spiele-Add***/?>
				<div class="panel panel-default">
					<div id="s_add_glyph" onclick="change_chevron('#s_add_glyph','#s_add_glyph_span')" class="panel-heading collapsed" data-toggle="collapse" data-parent="#accordion" href="#s_add">
						<h4 class="panel-title">
							<a class="collapse_title" >Neues Spiel hinzufügen</a><div id="s_add_glyph_span" class="collapse_chevron"><span class="glyphicon glyphicon-chevron-left"></span></div>
						</h4>
					</div>
					<div id="s_add" class="panel-collapse collapse">
						<div class="panel-body">
							<form class="form-horizontal" action="<?php echo URL; ?>verwaltung/add_spiel/" method="POST">
								<div class="form-group">
									<label class="control-label col-md-4">Sparte*</label>
									<div class="col-md-4">
										<select class="form-control" name="str_sparte" id="str_sparte1" size="1" onchange="selectFiller('1', 'str_sparte1', 'str_status1')" required>
											<option value="0" selected disabled>Bitte wählen</option>
											<?php foreach ($sparten as $sparte) { ?>
											<option><?php if (isset($sparte->name)) echo $sparte->name; ?></option>
											<?php } ?>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Status*</label>
									<div class="col-md-4">
										<select class="form-control" name="str_stat_name" id="str_status1" size="1" onchange="selectFiller('1', 'str_status1', 'str_tu_name1')" disabled required>
											<option value="0" selected disabled>Bitte wählen</option>

										</select>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Turnier*</label>
									<div class="col-md-4">
										<select class="form-control" name="str_tu_name" id="str_tu_name1" size="1" onchange="selectFiller('1', 'str_tu_name1', 'str_heim1')" disabled required>
											<option value="0" selected disabled>Bitte wählen</option>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Heim Team*</label>
									<div class="col-md-4">
										<select class="form-control" name="str_heim" id="str_heim1" size="1" onchange="selectFiller('1', 'str_heim1', 'str_auswaerts1')" disabled required>
											<option value="0" selected disabled>Bitte wählen</option>
											<?php foreach ($mannschaften as $mannschaft) { ?>
											<option><?php if (isset($mannschaft->name)) echo $mannschaft->name; ?></option>
											<?php } ?>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Gegnerisches Team*</label>
									<div class="col-md-4">
										<select class="form-control" name="str_auswaerts" id="str_auswaerts1" size="1" disabled required>
											<option value="0" selected disabled>Bitte wählen</option>
											<?php foreach ($mannschaften as $mannschaft) { ?>
											<option><?php if (isset($mannschaft->name)) echo $mannschaft->name; ?></option>
											<?php } ?>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Spielort*</label>
									<div class="col-md-4">
										<input class="form-control" type="text" name="str_ort" id="str_ort_add_spiel" value="" placeholder="Spielort" onkeyup="inputChecker('str_200', 'str_ort_add_spiel', 'submit_add_spiel')" required />
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Datum*</label>
									<div class="col-md-4">
										<div data-provide="datepicker" class="input-group date">
											<input class="form-control" name="d_date" id="d_date_add_spiel" type="text" onkeyup="inputChecker('date', 'd_date_add_spiel', 'submit_add_spiel')" placeholder="Beispiel 01.01.2011" required>
											<span class="input-group-addon glyphicon glyphicon-calendar"></span>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Zeit*</label>
									<div align="right" class="col-md-4">
										<div class="input-group">
											<input class="form-control" id="d_time_add_spiel" name="d_time" type="text" onkeyup="inputChecker('time', 'd_time_add_spiel', 'submit_add_spiel')" placeholder="Beispiel 12:00" required>
											<span class="input-group-addon glyphicon glyphicon-time"></span>
										</div>
									</div>
									<script> $('#d_time_add_spiel').timepicker({showMeridian: false});</script>
								</div>
								<div class="form-group">
									<div class="col-md-offset-4 col-md-4 formular-button">
										<a class="btn btn-default"  role="button" href="<?php echo URL . 'verwaltung/' ?>" >Abbrechen</a>
										<input type="submit" class="btn btn-primary" name="submit_add_spiel" id="submit_add_spiel" value="Speichern"/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<?php /***Mannschaften-Add***/?>
				<div class="panel panel-default">
					<div id="m_add_glyph" onclick="change_chevron('#m_add_glyph','#m_add_glyph_span')" class="panel-heading collapsed" data-toggle="collapse" data-parent="#accordion"href="#m_add">
						<h4 class="panel-title">
							<a class="collapse_title" >Neue Mannschaft hinzufügen</a><div id="m_add_glyph_span" class="collapse_chevron"><span class="glyphicon glyphicon-chevron-left"></span></div>
						</h4>
					</div>
					<div id="m_add" class="panel-collapse collapse">
						<div class="panel-body">
							<form class="form-horizontal" id="add_mannschaft" action="<?php echo URL; ?>verwaltung/add_mannschaft/" method="POST">
								<div class="form-group">
									<label class="control-label col-md-4">Mannschaftsname*</label>
									<div class="col-md-4">
										<input class="form-control" type="text" name="str_name" id="str_name_add_mannschaft" value="" placeholder="Mannschaftsname" onkeyup="inputChecker('str_50', 'str_name_add_mannschaft', 'submit_add_mannschaft')" required />
									</div>
								</div>
								<div class="form-group">
									<div class="col-md-offset-4 col-md-4 formular-button">
										<a class="btn btn-default"  role="button" href="<?php echo URL . 'verwaltung/' ?>" >Abbrechen</a>
										<input class="btn btn-primary" type="submit" name="submit_add_mannschaft" id="submit_add_mannschaft" value="Speichern" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<?php /***Trainingseinheit-Add***/?>
				<div class="panel panel-default">
					<div id="tr_add_glyph" onclick="change_chevron('#tr_add_glyph','#tr_add_glyph_span')" class="panel-heading collapsed" data-toggle="collapse" data-parent="#accordion"href="#tr_add">
						<h4 class="panel-title">
							<a class="collapse_title" >Neue Trainingseinheit hinzufügen</a><div id="tr_add_glyph_span" class="collapse_chevron"><span class="glyphicon glyphicon-chevron-left"></span></div>
						</h4>
					</div>
					<div id="tr_add" class="panel-collapse collapse">
						<div class="panel-body">
							<form class="form-horizontal" action="<?php echo URL; ?>verwaltung/add_trainingseinheit/" method="POST">
								<div class="form-group">
									<label class="control-label col-md-4">Training(Name oder Beschreibung)*</label>
									<div class="col-md-4">
										<input class="form-control" type="text" name="str_name" id="str_name_add_trainingseinheit" value="" placeholder="Training" onkeyup="inputChecker('str_50', 'str_name_add_trainingseinheit', 'submit_add_trainingseinheit')" required />
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Trainingsort*</label>
									<div class="col-md-4">
										<input class="form-control" type="text" name="str_ort" id="str_ort_add_trainingseinheit" value="" placeholder="Trainingsort" onkeyup="inputChecker('str_200', 'str_ort_add_trainingseinheit', 'submit_add_trainingseinheit')" required />
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Trainer*</label>
									<div class="col-md-4">
										<select class="form-control" name="str_trainer" size="1" required>
											<option selected disabled>Bitte wählen</option>
											<?php foreach ($personen as $person) { ?>
											<?php if ((isset($person->name))&&($person->betreuer == 1)){?><option value="<?php echo $person->p_id; ?>"><?php echo $person->name.", ".$person->v_name; ?></option><?php } ?>
											<?php } ?>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Trainingsgruppe*</label>
									<div class="col-md-4">
										<select class="form-control" name="str_tg_name" size="1" required>
											<option selected disabled>Bitte wählen</option>
											<?php foreach ($trainingsgruppen as $trainingsgruppe) { ?>
											<option><?php if (isset($trainingsgruppe->name)) echo $trainingsgruppe->name; ?></option>
											<?php } ?>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Datum*</label>
									<div class="col-md-4">
										<div data-provide="datepicker" class="input-group date">
											<input class="form-control" name="d_date" type="text" id="d_date_add_trainingseinheit" onkeyup="inputChecker('date', 'd_date_add_trainingseinheit', 'submit_add_trainingseinheit')" placeholder="Beispiel 01.01.2011" required>
											<span class="input-group-addon glyphicon glyphicon-calendar"></span>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Zeit*</label>
									<div class="col-md-4">
										<div class="input-group">
											<input class="form-control" id="d_time_add_trainingseinheit" name="d_time" type="text" onkeyup="inputChecker('time', 'd_time_add_trainingseinheit', 'submit_add_trainingseinheit')" placeholder="Beispiel 12:00" required>
											<span class="input-group-addon glyphicon glyphicon-time"></span>
										</div>
									</div>
									<script> $('#d_time_add_trainingseinheit').timepicker({showMeridian: false});</script>
								</div>
								<div class="form-group">
									<div class="col-md-offset-4 col-md-4 formular-button">
										<a class="btn btn-default"  role="button" href="<?php echo URL . 'verwaltung/' ?>" >Abbrechen</a>
										<input class="btn btn-primary" type="submit" name="submit_add_trainingseinheit" id="submit_add_trainingseinheit" value="Speichern" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<?php /***Trainingsgruppen-Add***/?>
				<div class="panel panel-default">
					<div id="tg_add_glyph" onclick="change_chevron('#tg_add_glyph','#tg_add_glyph_span')" class="panel-heading collapsed" data-toggle="collapse" data-parent="#accordion"href="#tg_add">
						<h4 class="panel-title">
							<a class="collapse_title" >Neue Trainingsgruppe hinzufügen</a><div id="tg_add_glyph_span" class="collapse_chevron"><span class="glyphicon glyphicon-chevron-left"></span></div>
						</h4>
					</div>

					<div id="tg_add" class="panel-collapse collapse">
						<div class="panel-body">
							<form class="form-horizontal" action="<?php echo URL; ?>verwaltung/add_trainingsgruppe/" method="POST">
								<div class="form-group">
									<label class="control-label col-md-4">Trainingsgruppenname*</label>
									<div class="col-md-4">
										<input class="form-control" type="text" name="str_name" id="str_name_add_trainingsgruppe" value="" placeholder="Trainingsgruppenname" onkeyup="inputChecker('str_50', 'str_name_add_trainingsgruppe', 'submit_add_trainingsgruppe')" required />
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Teilnehmer wählen*</label>
									<div class="col-md-4">
										<ul class="form-control" id="checkboxSelect">
										<div class="checkbox">
											<?php

											foreach ($personen as $person) { ?>
											<li>
													<label>
														<input type="checkbox" name="arr_teilnehmer_option[]" value="<?php if (isset($person->p_id)){echo $person->p_id; } ?>"><?php echo $person->v_name; ?> <?php echo $person->name; ?>
													</label>
											</li>
											<?php
											} ?>
										</div>
										</ul>
									</div>
								</div>
								<div class="form-group">
									<div class="col-md-offset-4 col-md-4 formular-button">
										<a class="btn btn-default"  role="button" href="<?php echo URL . 'verwaltung/' ?>" >Abbrechen</a>
										<input class="btn btn-primary" type="submit" name="submit_add_trainingsgruppe" id="submit_add_trainingsgruppe" value="Speichern" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<?php /***Turnier-Add***/?>
				<div class="panel panel-default">
					<div id="tu_add_glyph" onclick="change_chevron('#tu_add_glyph','#tu_add_glyph_span')" class="panel-heading collapsed" data-toggle="collapse" data-parent="#accordion"href="#tu_add">
						<h4 class="panel-title">
							<a class="collapse_title" >Neues Turnier hinzufügen</a><div id="tu_add_glyph_span" class="collapse_chevron"><span class="glyphicon glyphicon-chevron-left"></span></div>
						</h4>
					</div>

					<div id="tu_add" class="panel-collapse collapse">
						<div class="panel-body">
							<form class="form-horizontal" action="<?php echo URL; ?>verwaltung/add_turnier/" method="POST">
								<div class="form-group">
									<label class="control-label col-md-4">Turniername*</label>
									<div class="col-md-4">
										<input class="form-control" type="text" name="str_name" id="str_name_add_turnier" value="" placeholder="Turniername" onkeyup="inputChecker('str_50', 'str_name_add_turnier', 'submit_add_turnier')" required />
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Ligaturnier?</label>
									<div class="col-md-1">
										<label>
											<input type="radio" name="int_liga" value="1">
											Ja
										</label>
									</div>
									<div class="col-md-2">
										<label>
											<input type="radio" name="int_liga" value="0" checked>
											Nein
										</label>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-4">Sparten wählen*</label>
									<div class="col-md-4">
										<ul class="form-control" id="checkboxSelect">
										<div class="checkbox">
											<?php
											$i = 1;
											foreach ($sparten as $sparte) { ?>
											<li>
													<label>
														<input type="checkbox" name="arr_sparte_option[]" value="<?php if (isset($sparte->name)) echo $sparte->name; ?>"><?php echo $sparte->name; ?>
													</label>
											</li>
											<?php
											$i++;} ?>
										</div>
										</ul>
									</div>
								</div>
								<div class="form-group">
									<div class="col-md-offset-4 col-md-4 formular-button">
										<a class="btn btn-default"  role="button" href="<?php echo URL . 'verwaltung/' ?>" >Abbrechen</a>
										<input class="btn btn-primary" type="submit" name="submit_add_turnier" id="submit_add_turnier" value="Speichern" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<?php /***Sparte-Add***/?>
				<div class="panel panel-default">
					<div id="sparte_add_glyph" onclick="change_chevron('#sparte_add_glyph','#sparte_add_glyph_span')" class="panel-heading collapsed" data-toggle="collapse" data-parent="#accordion"href="#sparte_add">
						<h4 class="panel-title">
							<a class="collapse_title" >Neue Sparte hinzufügen</a><div id="sparte_add_glyph_span" class="collapse_chevron"><span class="glyphicon glyphicon-chevron-left"></span></div>
						</h4>
					</div>

					<div id="sparte_add" class="panel-collapse collapse">
						<div class="panel-body">
							<form class="form-horizontal" action="<?php echo URL; ?>verwaltung/add_sparte/" method="POST">
								<div class="form-group">
									<label class="control-label col-md-4">Sparte*</label>
									<div class="col-md-4">
										<input class="form-control" type="text" name="str_name" id="str_name_add_sparte" value="" placeholder="Sparte" onkeyup="inputChecker('str_50', 'str_name_add_sparte', 'submit_add_sparte')" required />
									</div>
								</div>
								<div class="form-group">
									<div class="col-md-offset-4 col-md-4 formular-button">
										<a class="btn btn-default"  role="button" href="<?php echo URL . 'verwaltung/' ?>" >Abbrechen</a>
										<input class="btn btn-primary" type="submit" name="submit_add_sparte" id="submit_add_sparte" value="Speichern" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>


	<?php /***Edit-Tab***/?>
		<div id="edit" class="tab-pane fade">
			<div class="panel-group" id="edit-accordion">

				<?php /***Personen-Edit***/?>
				<div class="panel panel-default">
					<div id="p_edit_glyph" onclick="change_chevron('#p_edit_glyph','#p_edit_glyph_span')" class="panel-heading collapsed" data-toggle="collapse" data-parent="#edit-accordion"href="#p_edit">
						<h4 class="panel-title">
							<a class="collapse_title" >Personen bearbeiten</a><div id="p_edit_glyph_span" class="collapse_chevron"><span class="glyphicon glyphicon-chevron-left"></span></div>
						</h4>
					</div>
					<div id="p_edit" class="panel-collapse collapse">
						<div class="panel-body">
							<h3>Liste aller Personen</h3>
							<table class="table">
								<thead style="background-color: #ddd; font-weight: bold;">
									<tr>
										<td>Nachname</td>
										<td>Vorname</td>
										<td>Geburtsdatum</td>
										<td>Benutzername</td>
										<td align="right" width="1%">Bearbeiten</td>
										<td align="right" width="1%">Löschen</td>
									</tr>
								</thead>
								<tbody>
								<?php foreach ($personen as $person) { ?>
									<tr>
										<td><?php if (isset($person->name)) echo $person->name; ?></td>
										<td><?php if (isset($person->v_name)) echo $person->v_name; ?></td>
										<td><?php if (isset($person->geb_datum)){$date = new DateTime($person->geb_datum); echo $date->format('d.m.Y');} ?></td>
										<td><?php if (isset($person->username)) echo $person->username; ?></td>
										<td align="center"><a  data-toggle="modal" data-target="#bs_Modal" onclick="toggleModal('2','person','<?php echo $person->p_id; ?>','<?php echo $person->v_name; ?> <?php echo $person->name;?>')"><span class="glyphicon glyphicon-pencil"></span></a></td>
										<td align="center"><a  data-toggle="modal" data-target="#bs_Modal" onclick="toggleModal('3','person','<?php echo $person->p_id; ?>','<?php echo $person->v_name; ?> <?php echo $person->name;?>')"><span class="glyphicon glyphicon-remove"></span></a></td>
									</tr>

								<?php } ?>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<?php /***Spiele-Edit***/?>
				<div class="panel panel-default">
					<div id="s_edit_glyph" onclick="change_chevron('#s_edit_glyph','#s_edit_glyph_span')" class="panel-heading collapsed" data-toggle="collapse" data-parent="#edit-accordion"href="#s_edit">
						<h4 class="panel-title">
							<a class="collapse_title" >Spiele bearbeiten</a><div id="s_edit_glyph_span" class="collapse_chevron"><span class="glyphicon glyphicon-chevron-left"></span></div>
						</h4>
					</div>
					<div id="s_edit" class="panel-collapse collapse">
						<div class="panel-body">
							<h3>Liste aller Spiele</h3>
							<table class="table">
								<thead style="background-color: #ddd; font-weight: bold;">
								<tr>
									<td>Heim Team</td>
									<td>Gegnerisches Team</td>
									<td>Ergebnis</td>
									<td>Sparte</td>
									<td>Turnier</td>
									<td>Spielart</td>
									<td>Ort</td>
									<td>Zeit</td>
									<td align="right" width="1%">Bearbeiten</td>
									<td align="right" width="1%">Löschen</td>
								</tr>
								</thead>
								<tbody>
								<?php foreach ($spiele as $spiel) { ?>
									<tr>
										<td><?php if (isset($spiel->Heim)) echo $spiel->Heim; ?></td>
										<td><?php if (isset($spiel->Auswaerts)) echo $spiel->Auswaerts; ?></td>
										<td><?php if ((isset($spiel->Heimtore)) && (isset($spiel->Auswaertstore))) echo $spiel->Heimtore." : ".$spiel->Auswaertstore; ?></td>
										<td><?php if (isset($spiel->Sparte)) echo $spiel->Sparte; ?></td>
										<td><?php if (isset($spiel->Turnier)){ if ($spiel->Turnier == "Freundschaftsspiel") { echo "F-Spiel";}else{ echo $spiel->Turnier; } }?></td>
										<td><?php if (isset($spiel->Status)){ if ($spiel->Status == "Freundschaftsspiel") { echo "F-Spiel";}else{ echo $spiel->Status; } }?></td>
										<td><?php if (isset($spiel->Ort)) echo $spiel->Ort; ?></td>
										<td><?php if (isset($spiel->Uhrzeit)){$date = new DateTime($spiel->Uhrzeit); echo $date->format('d.m.y H:i');} ?></td>
										<td align="center"><a  data-toggle="modal" data-target="#spiel_Modal" onclick="toggleModal('2','spiel','<?php echo $spiel->s_id; ?>','<?php echo $spiel->Heim; ?> gegen <?php echo $spiel->Auswaerts;?>')"><span class="glyphicon glyphicon-pencil"></span></a></td>
										<td align="center"><a  data-toggle="modal" data-target="#bs_Modal" onclick="toggleModal('3','spiel','<?php echo $spiel->s_id; ?>','<?php echo $spiel->Heim; ?> gegen <?php echo $spiel->Auswaerts;?>')"><span class="glyphicon glyphicon-remove"></span></a></td>
									</tr>

								<?php } ?>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<?php /***Mannschaften-Edit***/?>
				<div class="panel panel-default">
					<div id="m_edit_glyph" onclick="change_chevron('#m_edit_glyph','#m_edit_glyph_span')" class="panel-heading collapsed" data-toggle="collapse" data-parent="#edit-accordion"href="#m_edit">
						<h4 class="panel-title">
							<a class="collapse_title" >Mannschaften bearbeiten</a><div id="m_edit_glyph_span" class="collapse_chevron"><span class="glyphicon glyphicon-chevron-left"></span></div>
						</h4>
					</div>
					<div id="m_edit" class="panel-collapse collapse">
						<div class="panel-body">
							<h3>Liste aller Mannschaften</h3>
							<table class="table">
								<thead style="background-color: #ddd; font-weight: bold;">
									<tr>
										<td>Mannschaftsname</td>
										<td align="right" width="1%">Bearbeiten</td>
										<td align="right" width="1%">Löschen</td>
									</tr>
								</thead>
								<tbody>
								<?php foreach ($mannschaften as $mannschaft) { ?>
									<tr>
										<td><?php if (isset($mannschaft->name)) echo $mannschaft->name; ?></td>
										<td align="center"><a  data-toggle="modal" data-target="#bs_Modal" onclick="toggleModal('2','mannschaft','<?php echo $mannschaft->m_id; ?>','<?php echo $mannschaft->name; ?>')"><span class="glyphicon glyphicon-pencil"></span></a></td>
										<td align="center"><a  data-toggle="modal" data-target="#bs_Modal" onclick="toggleModal('3','mannschaft','<?php echo $mannschaft->m_id; ?>','<?php echo $mannschaft->name; ?>')"><span class="glyphicon glyphicon-remove"></span></a></td>
									</tr>
								<?php } ?>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<?php /***Trainingseinheiten-Edit***/?>
				<div class="panel panel-default">
					<div id="tr_edit_glyph" onclick="change_chevron('#tr_edit_glyph','#tr_edit_glyph_span')" class="panel-heading collapsed" data-toggle="collapse" data-parent="#edit-accordion"href="#tr_edit">
						<h4 class="panel-title">
							<a class="collapse_title" >Trainingseinheiten bearbeiten</a><div id="tr_edit_glyph_span" class="collapse_chevron"><span class="glyphicon glyphicon-chevron-left"></span></div>
						</h4>
					</div>
					<div id="tr_edit" class="panel-collapse collapse">
						<div class="panel-body">
							<h3>Liste aller Trainingseinheiten</h3>
							<table class="table">
								<thead style="background-color: #ddd; font-weight: bold;">
									<tr>
										<td>Name</td>
										<td>Ort</td>
										<td>Zeit</td>
										<td>Trainingsgruppe</td>
										<td>Trainer</td>
										<td align="right" width="1%">Bearbeiten</td>
										<td align="right" width="1%">Löschen</td>
									</tr>
								</thead>
								<tbody>
								<?php foreach ($trainingseinheiten as $trainingseinheit) { ?>
									<tr>
										<td><?php if (isset($trainingseinheit->Name)) echo $trainingseinheit->Name; ?></td>
										<td><?php if (isset($trainingseinheit->Ort)) echo $trainingseinheit->Ort; ?></td>
										<td><?php if (isset($trainingseinheit->Uhrzeit)){$date = new DateTime($trainingseinheit->Uhrzeit); echo $date->format('d.m.Y H:i');} ?></td>
										<td><?php if (isset($trainingseinheit->Trainingsgruppe)) echo $trainingseinheit->Trainingsgruppe; ?></td>
										<td><?php if (isset($trainingseinheit->Trainer)) echo $trainingseinheit->Trainer; ?></td>
										<td align="center"><a  data-toggle="modal" data-target="#trainingseinheit_Modal" onclick="toggleModal('2','trainingseinheit','<?php echo $trainingseinheit->tr_id; ?>','<?php echo $trainingseinheit->Name; ?>')"><span class="glyphicon glyphicon-pencil"></span></a></td>
										<td align="center"><a  data-toggle="modal" data-target="#bs_Modal" onclick="toggleModal('3','trainingseinheit','<?php echo $trainingseinheit->tr_id; ?>','<?php echo $trainingseinheit->Name; ?>')"><span class="glyphicon glyphicon-remove"></span></a></td>
									</tr>

								<?php } ?>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<?php /***Trainingsgruppen-Edit***/?>
				<div class="panel panel-default">
					<div id="tg_edit_glyph" onclick="change_chevron('#tg_edit_glyph','#tg_edit_glyph_span')" class="panel-heading collapsed" data-toggle="collapse" data-parent="#edit-accordion" href="#tg_edit">
						<h4 class="panel-title">
							<a class="collapse_title">Trainingsgruppen bearbeiten</a><div id="tg_edit_glyph_span" class="collapse_chevron"><span class="glyphicon glyphicon-chevron-left"></span></div>
						</h4>
					</div>
					<div id="tg_edit" class="panel-collapse collapse">
						<div class="panel-body">
							<h3>Liste aller Trainingsgruppen</h3>
							<table class="table">
								<thead style="background-color: #ddd; font-weight: bold;">
									<tr>
										<td>Trainingsgruppe</td>
										<td align="right" width="1%">Bearbeiten</td>
										<td align="right" width="1%">Löschen</td>
									</tr>
								</thead>
								<tbody>
								<?php foreach ($trainingsgruppen as $trainingsgruppe) { ?>
									<tr>
										<td><?php if (isset($trainingsgruppe->name)) echo $trainingsgruppe->name; ?></td>
										<td align="center"><a  data-toggle="modal" data-target="#trainingsgruppe_Modal" onclick="toggleModal('2','trainingsgruppe','<?php echo $trainingsgruppe->tg_id; ?>','<?php echo $trainingsgruppe->name; ?>')"><span class="glyphicon glyphicon-pencil"></span></a></td>
										<td align="center"><a  data-toggle="modal" data-target="#bs_Modal" onclick="toggleModal('3','trainingsgruppe','<?php echo $trainingsgruppe->tg_id; ?>','<?php echo $trainingsgruppe->name; ?>')"><span class="glyphicon glyphicon-remove"></span></a></td>
									</tr>

								<?php } ?>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<?php /***Turnier-Edit***/?>
				<div class="panel panel-default">
					<div id="tu_edit_glyph" onclick="change_chevron('#tu_edit_glyph','#tu_edit_glyph_span')" class="panel-heading collapsed" data-toggle="collapse" data-parent="#edit-accordion" href="#tu_edit">
						<h4 class="panel-title">
							<a class="collapse_title">Turniere bearbeiten</a><div id="tu_edit_glyph_span" class="collapse_chevron"><span class="glyphicon glyphicon-chevron-left"></span></div>
						</h4>
					</div>
					<div id="tu_edit" class="panel-collapse collapse">
						<div class="panel-body">
							<h3>Liste aller Turniere</h3>
							<table class="table">
								<thead style="background-color: #ddd; font-weight: bold;">
									<tr>
										<td>Turnier</td>
										<td>Liga</td>
										<td>Sparte</td>
										<td>Gewinner</td>
										<td align="right" width="1%">Bearbeiten</td>
										<td align="right" width="1%">Löschen</td>
									</tr>
								</thead>
								<tbody>
								<?php foreach ($turniere as $turnier) {
									if (($turnier->Turnier) != "Freundschaftsspiel" ){ ?>
									<tr>
										<td class="firstrow"><?php if (isset($turnier->Turnier)){
												echo $turnier->Turnier;
										}?></td>
										<td class="firstrow"><?php if (isset($turnier->Liga)){
											if ($turnier->Liga == 1){
											echo "ja"; }else
											{ echo "nein"; }}?></td>
										<td class="firstrow"></td>
										<td class="firstrow"></td>
										<td class="firstrow" align="center"><a  data-toggle="modal" data-target="#turnier_Modal" onclick="toggleModal('2','turnier','<?php echo $turnier->ID; ?>','<?php echo $turnier->Turnier; ?>')"><span class="glyphicon glyphicon-pencil"></span></a></td>
										<td class="firstrow" align="center"><a  data-toggle="modal" data-target="#bs_Modal" onclick="toggleModal('3','turnier','<?php echo $turnier->ID; ?>','<?php echo $turnier->Turnier; ?>')"><span class="glyphicon glyphicon-remove"></span></a></td>
									</tr>
									<?php foreach ($turniere_detail as $turnier_detail) {
										if (($turnier_detail->Turnier == $turnier->Turnier) ){  ?>
											<tr>
												<td class="emptycell"></td>
												<td class="emptycell"></td>
												<td><?php if (isset($turnier_detail->Sparte)) echo $turnier_detail->Sparte; ?></td>
												<td><?php if (isset($turnier_detail->Gewinner)) echo $turnier_detail->Gewinner; ?></td>
												<td align="center"><a  data-toggle="modal" data-target="#turnier_sparte_Modal" onclick="toggleModalS('2','turnier_sparte','<?php echo $turnier->ID; ?>' ,'<?php echo $turnier_detail->sparte_id; ?>','<?php echo $turnier->Turnier; ?> Sparte: <?php echo $turnier_detail->Sparte;?> ')"><span class="glyphicon glyphicon-pencil"></span></a></td>
												<td align="center"><a  data-toggle="modal" data-target="#bs_Modal" onclick="toggleModalS('3','turnier_sparte','<?php echo $turnier->ID; ?>' ,'<?php echo $turnier_detail->sparte_id; ?>','<?php echo $turnier_detail->Sparte;?> aus <?php echo $turnier->Turnier; ?>')"><span class="glyphicon glyphicon-remove"></span></a></td>
											</tr>
								<?php 	}
									}
									}
								} ?>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<?php /***Sparte-Edit***/?>
				<div class="panel panel-default">
					<div id="sparte_edit_glyph" onclick="change_chevron('#sparte_edit_glyph','#sparte_edit_glyph_span')" class="panel-heading collapsed" data-toggle="collapse" data-parent="#edit-accordion" href="#sparte_edit">
						<h4 class="panel-title">
							<a class="collapse_title" >Sparte bearbeiten</a><div id="sparte_edit_glyph_span" class="collapse_chevron"><span class="glyphicon glyphicon-chevron-left"></span></div>
						</h4>
					</div>
					<div id="sparte_edit" class="panel-collapse collapse">
						<div class="panel-body">
							<h3>Liste aller Sparten</h3>
							<table class="table">
								<thead style="background-color: #ddd; font-weight: bold;">
									<tr>
										<td>Spartenname</td>
										<td align="right" width="1%">Bearbeiten</td>
										<td align="right" width="1%">Löschen</td>
									</tr>
								</thead>
								<tbody>
								<?php foreach ($sparten as $sparte) { ?>
									<tr>
										<td><?php if (isset($sparte->name)) echo $sparte->name; ?></td>
										<td align="center"><a  data-toggle="modal" data-target="#bs_Modal" onclick="toggleModal('2','sparte','<?php echo $sparte->sparte_id; ?>','<?php echo $sparte->name; ?>')"><span class="glyphicon glyphicon-pencil"></span></a></td>
										<td align="center"><a  data-toggle="modal" data-target="#bs_Modal" onclick="toggleModal('3','sparte','<?php echo $sparte->sparte_id; ?>','<?php echo $sparte->name; ?>')"><span class="glyphicon glyphicon-remove"></span></a></td>
									</tr>
								<?php } ?>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<?php require 'application/views/_templates/bootstrap_modal.php'; ?>
</div>

 <?php }
    else{ ?>
		<div class="container"> <?php
			echo "Diese Seite ist für Sie gesperrt."; ?>
		</div>
	<?php } ?>

