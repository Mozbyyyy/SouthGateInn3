--
-- Database: `db_contact`
--

CREATE DATABASE IF NOT EXISTS `db_contact` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `db_contact`;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact`
--

DROP TABLE IF EXISTS `tbl_contact`;
CREATE TABLE `tbl_contact` (
  `ID` int(11) NOT NULL,
  `Field_Name` varchar(50) NOT NULL,
  `Field_Email` varchar(150) NOT NULL,
  `Field_Subject` varchar(15) NOT NULL,
  `Field_Message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
 ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;


-- ALTER TABLE table_name DROP column_name;
-- ALTER TABLE table_name ADD column_name int not null auto_increment primary key first;