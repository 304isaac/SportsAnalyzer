-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: sportsdata
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `nbastarters`
--

DROP TABLE IF EXISTS `nbastarters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nbastarters` (
  `Team` text,
  `PG` text,
  `SG` text,
  `SF` text,
  `PF` text,
  `C` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nbastarters`
--

LOCK TABLES `nbastarters` WRITE;
/*!40000 ALTER TABLE `nbastarters` DISABLE KEYS */;
INSERT INTO `nbastarters` VALUES ('Atlanta Hawks','Trae Young','Dejounte Murray','De\'Andre Hunter','John Collins','Clint Capela'),('Boston Celtics','Marcus Smart','Jaylen Brown','Jayson Tatum','Grant Williams','Al Horford'),('Brooklyn Nets','Kyrie Irving','Joe Harris','Royce O\'Neale','Kevin Durant','Nic Claxton'),('Charlotte Hornets','LaMelo Ball','Terry Rozier','Gordon Hayward','P.J. Washington','Mason Plumlee'),('Chicago Bulls','Ayo Dosunmu','Zach LaVine','DeMar DeRozan','Patrick Williams','Nikola Vucevic'),('Cleveland Cavaliers','Darius Garland','Donovan Mitchell','Lamar Stevens','Evan Mobley','Jarrett Allen'),('Dallas Mavericks','Luka Doncic','Spencer Dinwiddie','Reggie Bullock','Dorian Finney-Smith','Dwight Powell'),('Denver Nuggets','Jamal Murray','Kentavious Caldwell-Pope','Michael Porter Jr.','Aaron Gordon','Nikola Jokic'),('Detroit Pistons','Cade Cunningham','Jaden Ivey','Bojan Bogdanovic','Isaiah Stewart','Marvin Bagley III'),('Golden State Warriors','Stephen Curry','Klay Thompson','Andrew Wiggins','Draymond Green','Kevon Looney'),('Houston Rockets','Kevin Porter Jr.','Jalen Green','Eric Gordon','Jabari Smith Jr.','Alperen Sengun'),('Indiana Pacers','Tyrese Haliburton','Andrew Nembhard','Buddy Hield','Jalen Smith','Myles Turner'),('Los Angeles Clippers','Reggie Jackson','Paul George','Kawhi Leonard','M. Morris Sr.','Ivica Zubac'),('Los Angeles Lakers','Dennis Schroder','Patrick Beverley','Lonnie Walker IV','LeBron James','Anthony Davis'),('Memphis Grizzlies','Ja Morant','Desmond Bane','Dillon Brooks','Jaren Jackson Jr.','Steven Adams'),('Miami Heat','Kyle Lowry','Tyler Herro','Caleb Martin','Jimmy Butler','Bam Adebayo'),('Milwaukee Bucks','Jrue Holiday','Grayson Allen','K. Middleton','Giannis Antetokounmpo','Brook Lopez'),('Minnesota Timberwolves','D\'Angelo Russell','Anthony Edwards','Jaden McDaniels','Karl-Anthony Towns','Rudy Gobert'),('New Orleans Pelicans','CJ McCollum','Brandon Ingram','Herbert Jones','Zion Williamson','Jonas Valanciunas'),('New York Knicks','Jalen Brunson','Cam Reddish','RJ Barrett','Julius Randle','Mitchell Robinson'),('Oklahoma City Thunder','Shai Gilgeous-Alexander','Josh Giddey','Jalen Williams','Luguentz Dort','Aleksej Pokusevski'),('Orlando Magic','Jalen Suggs','Franz Wagner','Paolo Banchero','Bol Bol','Wendell Carter Jr.'),('Philadelphia 76ers','Tyrese Maxey','De\'Anthony Melton','Tobias Harris','P.J. Tucker','Joel Embiid'),('Phoenix Suns','Chris Paul','Devin Booker','Mikal Bridges','Torrey Craig','Deandre Ayton'),('Portland Trail Blazers','Damian Lillard','Anfernee Simons','Josh Hart','Jerami Grant','Jusuf Nurkic'),('Sacramento Kings','De\'Aaron Fox','Kevin Huerter','Harrison Barnes','Keegan Murray','Domantas Sabonis'),('San Antonio Spurs','Tre Jones','Devin Vassell','Keldon Johnson','Jeremy Sochan','Jakob Poeltl'),('Toronto Raptors','Fred VanVleet','Gary Trent Jr.','OG Anunoby','Scottie Barnes','Pascal Siakam'),('Utah Jazz','Mike Conley','Jordan Clarkson','Lauri Markkanen','Jarred Vanderbilt','Kelly Olynyk'),('Washington Wizards','Monte Morris','Bradley Beal','Deni Avdija','Kyle Kuzma','Kristaps Porzingis');
/*!40000 ALTER TABLE `nbastarters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-05  3:20:16
