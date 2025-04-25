-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 25. Apr 2025 um 07:44
-- Server-Version: 10.4.32-MariaDB
-- PHP-Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `typespeedtest`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `methods`
--

CREATE TABLE `methods` (
  `id` int(11) NOT NULL,
  `code` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `methods`
--

INSERT INTO `methods` (`id`, `code`) VALUES
(1, 'add(5, 3)'),
(2, 'subtract(9, 4)'),
(3, 'multiply(7, 6)'),
(4, 'divide(8, 2)'),
(5, 'isEven(10)'),
(6, 'isOdd(5)'),
(7, 'max(3, 6, 9)'),
(8, 'min(3, 6, 9)'),
(9, 'sum(1, 2, 3, 4)'),
(10, 'average(3, 5, 7)'),
(11, 'factorial(5)'),
(12, 'fibonacci(6)'),
(13, 'reverseString(\'hello\')'),
(14, 'isPalindrome(\'racecar\')'),
(15, 'capitalize(\'example\')'),
(16, 'camelCase(\'hello world\')'),
(17, 'snakeCase(\'hello world\')'),
(18, 'kebabCase(\'hello world\')'),
(19, 'isUpperCase(\'HELLO\')'),
(20, 'isLowerCase(\'hello\')'),
(21, 'trim(\'  hello  \')'),
(22, 'repeat(\'hello\', 3)'),
(23, 'contains(\'hello world\', \'world\')'),
(24, 'replace(\'hello world\', \'world\', \'everyone\')'),
(25, 'split(\'hello world\', \' \')'),
(26, 'join([\'hello\', \'world\'], \' \')'),
(27, 'toUpperCase(\'hello\')'),
(28, 'toLowerCase(\'HELLO\')'),
(29, 'startsWith(\'hello world\', \'hello\')'),
(30, 'endsWith(\'hello world\', \'world\')'),
(31, 'padStart(\'hello\', 10, \' \')'),
(32, 'padEnd(\'hello\', 10, \' \')'),
(33, 'charAt(\'hello\', 1)'),
(34, 'charCodeAt(\'hello\', 1)'),
(35, 'fromCharCode(72)'),
(36, 'slice(\'hello world\', 0, 5)'),
(37, 'substr(\'hello world\', 0, 5)'),
(38, 'substring(\'hello world\', 0, 5)'),
(39, 'concat(\'hello\', \' world\')'),
(40, 'find([1, 2, 3], x => x > 1)'),
(41, 'filter([1, 2, 3], x => x > 1)'),
(42, 'map([1, 2, 3], x => x * 2)'),
(43, 'reduce([1, 2, 3], (acc, x) => acc + x, 0)'),
(44, 'some([1, 2, 3], x => x > 2)'),
(45, 'every([1, 2, 3], x => x > 0)'),
(46, 'includes([1, 2, 3], 2)'),
(47, 'indexOf([1, 2, 3], 2)'),
(48, 'findIndex([1, 2, 3], x => x > 1)'),
(49, 'push([1, 2], 3)'),
(50, 'pop([1, 2, 3])'),
(51, 'shift([1, 2, 3])'),
(52, 'unshift([2, 3], 1)'),
(53, 'splice([1, 2, 3], 1, 1)'),
(54, 'sliceArray([1, 2, 3], 0, 2)'),
(55, 'concatArray([1, 2], [3, 4])'),
(56, 'joinArray([\'a\', \'b\'], \',\')'),
(57, 'reverseArray([1, 2, 3])'),
(58, 'sort([3, 1, 2])'),
(59, 'fill([1, 2, 3], 0)'),
(60, 'copyWithin([1, 2, 3, 4], 0, 2)'),
(61, 'flat([1, [2, 3], [4]])'),
(62, 'flatMap([1, 2, 3], x => [x, x * 2])'),
(63, 'isArray([1, 2, 3])');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `verbal_memory`
--

CREATE TABLE `verbal_memory` (
  `id` int(11) NOT NULL,
  `wort` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `verbal_memory`
--

INSERT INTO `verbal_memory` (`id`, `wort`) VALUES
(1, 'apple'),
(2, 'house'),
(3, 'chair'),
(4, 'coast'),
(5, 'moon'),
(6, 'river'),
(7, 'tiger'),
(8, 'green'),
(9, 'table'),
(10, 'happy'),
(11, 'lamp'),
(12, 'phone'),
(13, 'friend'),
(14, 'music'),
(15, 'smile'),
(16, 'dream'),
(17, 'water'),
(18, 'road'),
(19, 'pencil'),
(20, 'mountain'),
(21, 'flower'),
(22, 'bottle'),
(23, 'shadow'),
(24, 'planet'),
(25, 'window'),
(26, 'guitar'),
(27, 'sunset'),
(28, 'forest'),
(29, 'candle'),
(30, 'school'),
(31, 'cloud'),
(32, 'light'),
(33, 'street'),
(34, 'orange'),
(35, 'mirror'),
(36, 'beach'),
(37, 'story'),
(38, 'animal'),
(39, 'rocket'),
(40, 'science'),
(41, 'paper'),
(42, 'umbrella'),
(43, 'carpet'),
(44, 'coffee'),
(45, 'bridge'),
(46, 'picture'),
(47, 'island'),
(48, 'travel'),
(49, 'pillow'),
(50, 'wallet');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `words`
--

CREATE TABLE `words` (
  `id` int(11) NOT NULL,
  `word` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `words`
--

INSERT INTO `words` (`id`, `word`) VALUES
(1, 'apple'),
(2, 'orange'),
(3, 'banana'),
(4, 'grape'),
(5, 'pineapple'),
(6, 'watermelon'),
(7, 'strawberry'),
(8, 'blueberry'),
(9, 'raspberry'),
(10, 'blackberry'),
(11, 'peach'),
(12, 'pear'),
(13, 'plum'),
(14, 'kiwi'),
(15, 'mango'),
(16, 'papaya'),
(17, 'coconut'),
(18, 'lime'),
(19, 'lemon'),
(20, 'avocado'),
(21, 'cherry'),
(22, 'fig'),
(23, 'date'),
(24, 'pomegranate'),
(25, 'nectarine'),
(26, 'apricot'),
(27, 'cantaloupe'),
(28, 'honeydew'),
(29, 'dragonfruit'),
(30, 'starfruit'),
(31, 'lychee'),
(32, 'persimmon'),
(33, 'guava'),
(34, 'passionfruit'),
(35, 'cranberry'),
(36, 'gooseberry'),
(37, 'boysenberry'),
(38, 'mulberry'),
(39, 'loganberry'),
(40, 'jackfruit'),
(41, 'durian'),
(42, 'breadfruit'),
(43, 'tamarind'),
(44, 'langsat'),
(45, 'longan'),
(46, 'rambutan'),
(47, 'salak'),
(48, 'soursop'),
(49, 'custard apple'),
(50, 'juneberry'),
(51, 'elderberry'),
(52, 'currant'),
(53, 'bilberry'),
(54, 'cloudberry'),
(55, 'huckleberry'),
(56, 'serviceberry'),
(57, 'yumberry'),
(58, 'camu camu'),
(59, 'acai'),
(60, 'jabuticaba'),
(61, 'maqui'),
(62, 'miracle fruit'),
(63, 'barberry'),
(64, 'buffaloberry'),
(65, 'chokecherry'),
(66, 'thimbleberry'),
(67, 'waxberry'),
(68, 'wolfberry'),
(69, 'wineberry'),
(70, 'camachile'),
(71, 'genip'),
(72, 'santol'),
(73, 'sapote'),
(74, 'surinam cherry'),
(75, 'cumbu'),
(76, 'jocote'),
(77, 'mammee apple'),
(78, 'mombin'),
(79, 'nance'),
(80, 'pitaya'),
(81, 'pithaya'),
(82, 'pitomba'),
(83, 'shaddock'),
(84, 'ugli fruit'),
(85, 'white sapote'),
(86, 'whortleberry'),
(87, 'axe'),
(88, 'bridge'),
(89, 'card'),
(90, 'dog'),
(91, 'elephant'),
(92, 'forest'),
(93, 'garden'),
(94, 'house'),
(95, 'jacket'),
(96, 'kite'),
(97, 'lamp'),
(98, 'mountain'),
(99, 'nut'),
(100, 'ocean'),
(101, 'post'),
(102, 'queen'),
(103, 'road'),
(104, 'snake'),
(105, 'tree'),
(106, 'umbrella'),
(107, 'vase'),
(108, 'window');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `methods`
--
ALTER TABLE `methods`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `verbal_memory`
--
ALTER TABLE `verbal_memory`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `words`
--
ALTER TABLE `words`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `methods`
--
ALTER TABLE `methods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT für Tabelle `words`
--
ALTER TABLE `words`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
