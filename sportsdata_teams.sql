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
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `teamName` varchar(45) DEFAULT NULL,
  `Abbrev` varchar(45) DEFAULT NULL,
  `W` int DEFAULT NULL,
  `L` int DEFAULT NULL,
  `winPCT` decimal(4,3) GENERATED ALWAYS AS ((`W` / (`W` + `L`))) VIRTUAL,
  `League` varchar(45) DEFAULT NULL,
  `Conf` varchar(45) DEFAULT NULL,
  `Division` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` (`teamName`, `Abbrev`, `W`, `L`, `League`, `Conf`, `Division`) VALUES ('Utah Jazz','UTA',12,11,'NBA','W','Northwest'),('Golden State Warriors','GSW',11,10,'NBA','W','Pacific'),('Detroit Pistons','DET',5,17,'NBA','E','Central'),('Memphis Grizzlies','MEM',12,8,'NBA','W','Southwest'),('New York Knicks','NYK',9,11,'NBA','E','Atlantic'),('Boston Celtics','BOS',17,4,'NBA','E','Atlantic'),('Brooklyn Nets','BRK',11,11,'NBA','E','Atlantic'),('New Orleans Pelicans','NOP',12,8,'NBA','W','Southwest'),('San Antonio Spurs','SAS',6,15,'NBA','W','Southwest'),('Oklahoma City Thunder','OKC',8,13,'NBA','W','Northwest'),('Charlotte Hornets','CHO',6,15,'NBA','E','Southeast'),('Orlando Magic','ORL',5,16,'NBA','E','Southeast'),('Cleveland Cavaliers','CLE',13,8,'NBA','E','Central'),('Phoenix Suns','PHO',14,6,'NBA','W','Pacific'),('Miami Heat','MIA',10,11,'NBA','E','Southeast'),('Atlanta Hawks','ATL',11,10,'NBA','E','Southeast'),('Minnesota Timberwolves','MIN',10,11,'NBA','W','Northwest'),('Sacramento Kings','SAC',10,9,'NBA','W','Pacific'),('Denver Nuggets','DEN',13,7,'NBA','W','Northwest'),('Toronto Raptors','TOR',11,9,'NBA','E','Atlantic'),('Los Angeles Clippers','LAC',12,9,'NBA','W','Pacific'),('Chicago Bulls','CHI',9,11,'NBA','E','Central'),('Indiana Pacers','IND',12,8,'NBA','E','Central'),('Portland Trail Blazers','POR',11,9,'NBA','W','Northwest'),('Philadelphia 76ers','PHI',12,9,'NBA','E','Atlantic'),('Houston Rockets','HOU',5,15,'NBA','W','Southwest'),('Washington Wizards','WAS',11,10,'NBA','E','Southeast'),('Milwaukee Bucks','MIL',14,5,'NBA','E','Central'),('Los Angeles Lakers','LAL',7,12,'NBA','W','Pacific'),('Dallas Mavericks','DAL',9,10,'NBA','W','Southwest');
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-05  3:20:17
