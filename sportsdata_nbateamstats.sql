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
-- Table structure for table `nbateamstats`
--

DROP TABLE IF EXISTS `nbateamstats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nbateamstats` (
  `Team` text,
  `gamesPlayed` int DEFAULT NULL,
  `minutesPlayed` int DEFAULT NULL,
  `FGM` int DEFAULT NULL,
  `FGA` int DEFAULT NULL,
  `FG_PCT` decimal(4,3) DEFAULT NULL,
  `ThreePM` int DEFAULT NULL,
  `ThreePA` int DEFAULT NULL,
  `Three_PCT` decimal(4,3) DEFAULT NULL,
  `TwoPM` int DEFAULT NULL,
  `TwoPA` int DEFAULT NULL,
  `Two_PCT` decimal(4,3) DEFAULT NULL,
  `FTM` int DEFAULT NULL,
  `FTA` int DEFAULT NULL,
  `FT_PCT` decimal(4,3) DEFAULT NULL,
  `oRebounds` int DEFAULT NULL,
  `dRebounds` int DEFAULT NULL,
  `tRebounds` int DEFAULT NULL,
  `Assists` int DEFAULT NULL,
  `Steals` int DEFAULT NULL,
  `Blocks` int DEFAULT NULL,
  `Turnovers` int DEFAULT NULL,
  `Fouls` int DEFAULT NULL,
  `Points` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nbateamstats`
--

LOCK TABLES `nbateamstats` WRITE;
/*!40000 ALTER TABLE `nbateamstats` DISABLE KEYS */;
INSERT INTO `nbateamstats` VALUES ('Utah Jazz',23,5570,982,2079,0.472,338,915,0.369,644,1164,0.553,382,494,0.773,277,733,1010,631,172,114,359,487,2684),('Boston Celtics',21,5090,902,1820,0.496,351,870,0.403,551,950,0.580,392,460,0.852,166,709,875,573,122,113,279,436,2547),('Golden State Warriors',21,5065,906,1877,0.483,344,901,0.382,562,976,0.576,317,393,0.807,190,697,887,627,155,85,359,485,2473),('Brooklyn Nets',22,5305,909,1827,0.498,264,710,0.372,645,1117,0.577,371,464,0.800,163,721,884,583,153,160,325,484,2453),('Oklahoma City Thunder',21,5165,915,1991,0.460,245,730,0.336,670,1261,0.531,358,454,0.789,252,680,932,513,173,127,292,465,2433),('Minnesota Timberwolves',21,5065,884,1835,0.482,233,713,0.327,651,1122,0.580,406,513,0.791,208,711,919,558,164,114,346,464,2407),('Detroit Pistons',22,5280,848,1926,0.440,234,704,0.332,614,1222,0.502,470,600,0.783,254,687,941,464,148,88,316,507,2400),('Atlanta Hawks',21,5090,897,1943,0.462,204,620,0.329,693,1323,0.524,383,462,0.829,229,704,933,499,154,104,279,427,2381),('Cleveland Cavaliers',21,5165,851,1793,0.475,252,664,0.380,599,1129,0.531,417,517,0.807,214,708,922,496,126,87,311,423,2371),('New Orleans Pelicans',20,4875,869,1794,0.484,228,606,0.376,641,1188,0.540,367,469,0.783,231,666,897,542,174,89,296,395,2333),('San Antonio Spurs',21,5065,886,1919,0.462,252,718,0.351,634,1201,0.528,299,416,0.719,253,636,889,595,157,92,350,411,2323),('Washington Wizards',21,5090,869,1834,0.474,233,676,0.345,636,1158,0.549,350,449,0.780,193,729,922,528,136,126,281,417,2321),('Indiana Pacers',20,4800,818,1807,0.453,294,819,0.359,524,988,0.530,384,481,0.798,217,653,870,561,160,132,311,432,2314),('Memphis Grizzlies',20,4850,859,1857,0.463,249,686,0.363,610,1171,0.521,346,495,0.699,275,689,964,492,136,103,285,402,2313),('Denver Nuggets',20,4825,863,1738,0.497,245,616,0.398,618,1122,0.551,333,441,0.755,213,661,874,557,144,85,304,392,2304),('Phoenix Suns',20,4825,861,1814,0.475,244,658,0.371,617,1156,0.534,333,411,0.810,236,632,868,545,152,119,267,429,2299),('Philadelphia 76ers',21,5040,825,1737,0.475,254,678,0.375,571,1059,0.539,394,488,0.807,172,675,847,494,179,101,298,416,2298),('Charlotte Hornets',21,5165,867,1945,0.446,218,682,0.320,649,1263,0.514,341,469,0.727,265,690,955,532,160,106,323,442,2293),('New York Knicks',20,4875,834,1844,0.452,219,692,0.316,615,1152,0.534,405,504,0.804,247,670,917,480,144,100,274,452,2292),('Miami Heat',21,5090,806,1801,0.448,245,738,0.332,561,1063,0.528,420,495,0.848,197,669,866,505,158,73,295,399,2277),('Orlando Magic',21,5065,824,1761,0.468,226,666,0.339,598,1095,0.546,401,513,0.782,213,696,909,440,131,115,346,446,2275),('Sacramento Kings',19,4585,815,1654,0.493,258,706,0.365,557,948,0.588,373,469,0.795,152,627,779,530,134,61,287,397,2261),('Chicago Bulls',20,4825,823,1753,0.469,211,582,0.363,612,1171,0.523,383,460,0.833,203,666,869,493,152,107,295,401,2240),('Los Angeles Clippers',21,5040,824,1723,0.478,236,661,0.357,588,1062,0.554,351,478,0.734,166,737,903,480,138,98,340,424,2235),('Toronto Raptors',20,4825,809,1820,0.445,218,653,0.334,591,1167,0.506,380,484,0.785,270,618,888,459,203,112,258,410,2216),('Houston Rockets',20,4800,777,1754,0.443,254,717,0.354,523,1037,0.504,398,513,0.776,269,659,928,440,156,97,364,422,2206),('Portland Trail Blazers',20,4850,774,1660,0.466,238,633,0.376,536,1027,0.522,408,530,0.770,212,643,855,474,135,79,314,386,2194),('Milwaukee Bucks',19,4610,780,1706,0.457,250,711,0.352,530,995,0.533,327,458,0.714,223,700,923,466,136,121,290,371,2137),('Los Angeles Lakers',19,4585,779,1677,0.465,183,571,0.320,596,1106,0.539,393,486,0.809,180,688,868,458,133,99,292,363,2134),('Dallas Mavericks',19,4610,731,1563,0.468,256,743,0.345,475,820,0.579,354,483,0.733,146,578,724,403,154,62,244,393,2072);
/*!40000 ALTER TABLE `nbateamstats` ENABLE KEYS */;
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
