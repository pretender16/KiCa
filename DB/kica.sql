-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server Version:               5.5.28 - MySQL Community Server (GPL)
-- Server Betriebssystem:        Win64
-- HeidiSQL Version:             7.0.0.4372
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Exportiere Datenbank Struktur für kica
DROP DATABASE IF EXISTS `kica`;
CREATE DATABASE IF NOT EXISTS `kica` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `kica`;


-- Exportiere Struktur von Tabelle kica.abwesenheit
DROP TABLE IF EXISTS `abwesenheit`;
CREATE TABLE IF NOT EXISTS `abwesenheit` (
  `tr_id` int(10) NOT NULL,
  `p_id` int(10) NOT NULL,
  PRIMARY KEY (`tr_id`,`p_id`),
  KEY `Abwesende` (`p_id`),
  CONSTRAINT `Abwesende` FOREIGN KEY (`p_id`) REFERENCES `person` (`p_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Trainingseinheit` FOREIGN KEY (`tr_id`) REFERENCES `trainingseinheit` (`tr_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Tabelle kica.aufstellung
DROP TABLE IF EXISTS `aufstellung`;
CREATE TABLE IF NOT EXISTS `aufstellung` (
  `s_id` int(10) NOT NULL,
  `p_id` int(10) NOT NULL,
  PRIMARY KEY (`s_id`,`p_id`),
  KEY `Spieler` (`p_id`),
  CONSTRAINT `Spiel` FOREIGN KEY (`s_id`) REFERENCES `spiel` (`s_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Spieler` FOREIGN KEY (`p_id`) REFERENCES `person` (`p_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Tabelle kica.mannschaft
DROP TABLE IF EXISTS `mannschaft`;
CREATE TABLE IF NOT EXISTS `mannschaft` (
  `m_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`m_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Tabelle kica.mannschaft_turnier_sparte
DROP TABLE IF EXISTS `mannschaft_turnier_sparte`;
CREATE TABLE IF NOT EXISTS `mannschaft_turnier_sparte` (
  `m_id` int(10) NOT NULL,
  `tu_id` int(10) NOT NULL,
  `sparte_id` int(10) NOT NULL,
  PRIMARY KEY (`m_id`,`tu_id`,`sparte_id`),
  KEY `Turnier1` (`tu_id`),
  KEY `Sparte` (`sparte_id`),
  CONSTRAINT `Mannschaft` FOREIGN KEY (`m_id`) REFERENCES `mannschaft` (`m_id`),
  CONSTRAINT `Sparte` FOREIGN KEY (`sparte_id`) REFERENCES `sparte` (`sparte_id`),
  CONSTRAINT `Turnier1` FOREIGN KEY (`tu_id`) REFERENCES `turnier` (`tu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Tabelle kica.person
DROP TABLE IF EXISTS `person`;
CREATE TABLE IF NOT EXISTS `person` (
  `p_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `v_name` varchar(50) NOT NULL,
  `geb_datum` date NOT NULL,
  `groesse` tinyint(4) unsigned DEFAULT NULL,
  `bild` varchar(100) DEFAULT NULL,
  `betreuer` tinyint(1) unsigned zerofill NOT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `username` varchar(105) NOT NULL,
  `password` varchar(60) NOT NULL,
  PRIMARY KEY (`p_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Tabelle kica.sparte
DROP TABLE IF EXISTS `sparte`;
CREATE TABLE IF NOT EXISTS `sparte` (
  `sparte_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`sparte_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Tabelle kica.spiel
DROP TABLE IF EXISTS `spiel`;
CREATE TABLE IF NOT EXISTS `spiel` (
  `s_id` int(10) NOT NULL AUTO_INCREMENT,
  `ort` varchar(200) NOT NULL,
  `heim` int(10) NOT NULL,
  `auswaerts` int(10) NOT NULL,
  `h_tore` tinyint(4) DEFAULT NULL,
  `a_tore` tinyint(4) DEFAULT NULL,
  `stat_id` int(10) NOT NULL,
  `zeit` datetime NOT NULL,
  `tu_id` int(10) NOT NULL,
  `sparte_id` int(10) NOT NULL,
  PRIMARY KEY (`s_id`),
  KEY `Heimmannschaft` (`heim`),
  KEY `Auswaertsmannschaft` (`auswaerts`),
  KEY `Status` (`stat_id`),
  KEY `Turnier` (`tu_id`),
  KEY `Sparte1` (`sparte_id`),
  CONSTRAINT `Auswaertsmannschaft` FOREIGN KEY (`auswaerts`) REFERENCES `mannschaft` (`m_id`),
  CONSTRAINT `Heimmannschaft` FOREIGN KEY (`heim`) REFERENCES `mannschaft` (`m_id`),
  CONSTRAINT `Sparte1` FOREIGN KEY (`sparte_id`) REFERENCES `sparte` (`sparte_id`),
  CONSTRAINT `Status` FOREIGN KEY (`stat_id`) REFERENCES `status` (`stat_id`),
  CONSTRAINT `Turnier` FOREIGN KEY (`tu_id`) REFERENCES `turnier` (`tu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Tabelle kica.status
DROP TABLE IF EXISTS `status`;
CREATE TABLE IF NOT EXISTS `status` (
  `stat_id` int(10) NOT NULL AUTO_INCREMENT,
  `status` varchar(30) NOT NULL,
  PRIMARY KEY (`stat_id`),
  UNIQUE KEY `status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Tabelle kica.teilnehmer_tg
DROP TABLE IF EXISTS `teilnehmer_tg`;
CREATE TABLE IF NOT EXISTS `teilnehmer_tg` (
  `tg_id` int(10) NOT NULL,
  `p_id` int(10) NOT NULL,
  PRIMARY KEY (`tg_id`,`p_id`),
  KEY `Teilnehmer` (`p_id`),
  CONSTRAINT `Teilnehmer` FOREIGN KEY (`p_id`) REFERENCES `person` (`p_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Trainigsgruppe` FOREIGN KEY (`tg_id`) REFERENCES `trainingsgruppe` (`tg_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Tabelle kica.trainingseinheit
DROP TABLE IF EXISTS `trainingseinheit`;
CREATE TABLE IF NOT EXISTS `trainingseinheit` (
  `tr_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `ort` varchar(200) NOT NULL,
  `zeit` datetime NOT NULL,
  `trainer` int(10) NOT NULL,
  `tg_id` int(10) NOT NULL,
  PRIMARY KEY (`tr_id`),
  KEY `Trainingsgruppe` (`tg_id`),
  KEY `Trainer` (`trainer`),
  CONSTRAINT `Trainer` FOREIGN KEY (`trainer`) REFERENCES `person` (`p_id`),
  CONSTRAINT `Trainingsgruppe` FOREIGN KEY (`tg_id`) REFERENCES `trainingsgruppe` (`tg_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Tabelle kica.trainingsgruppe
DROP TABLE IF EXISTS `trainingsgruppe`;
CREATE TABLE IF NOT EXISTS `trainingsgruppe` (
  `tg_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`tg_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Tabelle kica.turnier
DROP TABLE IF EXISTS `turnier`;
CREATE TABLE IF NOT EXISTS `turnier` (
  `tu_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `liga` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`tu_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Tabelle kica.turnier_sparte
DROP TABLE IF EXISTS `turnier_sparte`;
CREATE TABLE IF NOT EXISTS `turnier_sparte` (
  `tu_id` int(10) NOT NULL,
  `sparte_id` int(10) NOT NULL,
  `gewinner` int(10) DEFAULT NULL,
  PRIMARY KEY (`tu_id`,`sparte_id`),
  KEY `Sparte2` (`sparte_id`),
  KEY `Gewinner` (`gewinner`),
  CONSTRAINT `Gewinner` FOREIGN KEY (`gewinner`) REFERENCES `mannschaft` (`m_id`),
  CONSTRAINT `Sparte2` FOREIGN KEY (`sparte_id`) REFERENCES `sparte` (`sparte_id`),
  CONSTRAINT `Turnier2` FOREIGN KEY (`tu_id`) REFERENCES `turnier` (`tu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Daten Export vom Benutzer nicht ausgewählt


-- Exportiere Struktur von Trigger kica.AutoDeleteAbwesenheit
DROP TRIGGER IF EXISTS `AutoDeleteAbwesenheit`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `AutoDeleteAbwesenheit` AFTER DELETE ON `teilnehmer_tg` FOR EACH ROW BEGIN
DELETE FROM abwesenheit
WHERE abwesenheit.p_id = OLD.p_id AND
		abwesenheit.tr_id IN (	SELECT trainingseinheit.tr_id
										FROM trainingseinheit
										WHERE trainingseinheit.tg_id = OLD.tg_id);						
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.AutoInsertAbwesenheit
DROP TRIGGER IF EXISTS `AutoInsertAbwesenheit`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `AutoInsertAbwesenheit` AFTER INSERT ON `teilnehmer_tg` FOR EACH ROW BEGIN
INSERT INTO abwesenheit
	SELECT trainingseinheit.tr_id, NEW.p_id
   FROM trainingseinheit
   WHERE trainingseinheit.tg_id = NEW.tg_id AND trainingseinheit.zeit > NOW();
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.AutoInsertFreundschaft
DROP TRIGGER IF EXISTS `AutoInsertFreundschaft`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `AutoInsertFreundschaft` AFTER INSERT ON `mannschaft` FOR EACH ROW BEGIN
INSERT INTO mannschaft_turnier_sparte
SELECT New.m_id, turnier.tu_id, sparte.sparte_id
FROM sparte,turnier
WHERE turnier.name ='Freundschaftsspiel';
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.BefuellenAbwesenheit
DROP TRIGGER IF EXISTS `BefuellenAbwesenheit`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `BefuellenAbwesenheit` AFTER INSERT ON `trainingseinheit` FOR EACH ROW BEGIN
INSERT INTO abwesenheit
	SELECT NEW.tr_id, teilnehmer_tg.p_id
	FROM teilnehmer_tg
	WHERE teilnehmer_tg.tg_id = NEW.tg_id;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.TrimMannschaftInsert
DROP TRIGGER IF EXISTS `TrimMannschaftInsert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `TrimMannschaftInsert` BEFORE INSERT ON `mannschaft` FOR EACH ROW BEGIN
SET NEW.name = TRIM(NEW.name);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.TrimMannschaftUpdate
DROP TRIGGER IF EXISTS `TrimMannschaftUpdate`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `TrimMannschaftUpdate` BEFORE UPDATE ON `mannschaft` FOR EACH ROW BEGIN
SET NEW.name = TRIM(NEW.name);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.TrimPersonInsert
DROP TRIGGER IF EXISTS `TrimPersonInsert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `TrimPersonInsert` BEFORE INSERT ON `person` FOR EACH ROW BEGIN
SET NEW.name = TRIM(NEW.name);
SET NEW.v_name = TRIM(NEW.v_name);
SET NEW.tel = TRIM(NEW.tel);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.TrimPersonUpdate
DROP TRIGGER IF EXISTS `TrimPersonUpdate`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `TrimPersonUpdate` BEFORE UPDATE ON `person` FOR EACH ROW BEGIN
SET NEW.name = TRIM(NEW.name);
SET NEW.v_name = TRIM(NEW.v_name);
SET NEW.tel = TRIM(NEW.tel);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.TrimSparteInsert
DROP TRIGGER IF EXISTS `TrimSparteInsert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `TrimSparteInsert` BEFORE INSERT ON `sparte` FOR EACH ROW BEGIN
SET NEW.name = TRIM(NEW.name);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.TrimSparteUpdate
DROP TRIGGER IF EXISTS `TrimSparteUpdate`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `TrimSparteUpdate` BEFORE UPDATE ON `sparte` FOR EACH ROW BEGIN
SET NEW.name = TRIM(NEW.name);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.TrimSpielInsert
DROP TRIGGER IF EXISTS `TrimSpielInsert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `TrimSpielInsert` BEFORE INSERT ON `spiel` FOR EACH ROW BEGIN
SET NEW.ort = TRIM(NEW.ort);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.TrimSpielUpdate
DROP TRIGGER IF EXISTS `TrimSpielUpdate`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `TrimSpielUpdate` BEFORE UPDATE ON `spiel` FOR EACH ROW BEGIN
SET NEW.ort = TRIM(NEW.ort);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.TrimTrainingseinheitInsert
DROP TRIGGER IF EXISTS `TrimTrainingseinheitInsert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `TrimTrainingseinheitInsert` BEFORE INSERT ON `trainingseinheit` FOR EACH ROW BEGIN
SET NEW.name = TRIM(NEW.name);
SET NEW.ort = TRIM(NEW.ort);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.TrimTrainingseinheitUpdate
DROP TRIGGER IF EXISTS `TrimTrainingseinheitUpdate`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `TrimTrainingseinheitUpdate` BEFORE UPDATE ON `trainingseinheit` FOR EACH ROW BEGIN
SET NEW.name = TRIM(NEW.name);
SET NEW.ort = TRIM(NEW.ort);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.TrimTrainingsgruppeInsert
DROP TRIGGER IF EXISTS `TrimTrainingsgruppeInsert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `TrimTrainingsgruppeInsert` BEFORE INSERT ON `trainingsgruppe` FOR EACH ROW BEGIN
SET NEW.name = TRIM(NEW.name);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.TrimTrainingsgruppeUpdate
DROP TRIGGER IF EXISTS `TrimTrainingsgruppeUpdate`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `TrimTrainingsgruppeUpdate` BEFORE UPDATE ON `trainingsgruppe` FOR EACH ROW BEGIN
SET NEW.name = TRIM(NEW.name);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.TrimTurnierInsert
DROP TRIGGER IF EXISTS `TrimTurnierInsert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `TrimTurnierInsert` BEFORE INSERT ON `turnier` FOR EACH ROW BEGIN
SET NEW.name = TRIM(NEW.name);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.TrimTurnierUpdate
DROP TRIGGER IF EXISTS `TrimTurnierUpdate`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `TrimTurnierUpdate` BEFORE UPDATE ON `turnier` FOR EACH ROW BEGIN
SET NEW.name = TRIM(NEW.name);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;


-- Exportiere Struktur von Trigger kica.UpdateTraining
DROP TRIGGER IF EXISTS `UpdateTraining`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `UpdateTraining` AFTER UPDATE ON `trainingseinheit` FOR EACH ROW BEGIN
IF OLD.tg_id <> NEW.tg_id THEN
	DELETE FROM abwesenheit WHERE abwesenheit.tr_id = NEW.tr_id;
	INSERT INTO abwesenheit
		SELECT NEW.tr_id, teilnehmer_tg.p_id
		FROM teilnehmer_tg
		WHERE teilnehmer_tg.tg_id = NEW.tg_id;
END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
