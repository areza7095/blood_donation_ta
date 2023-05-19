-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2023 at 12:12 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blood_donation`
--

-- --------------------------------------------------------

--
-- Table structure for table `biologic_report`
--

CREATE TABLE `biologic_report` (
  `id_report` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `glucose` varchar(10) NOT NULL,
  `cholesterol` varchar(10) NOT NULL,
  `bilirubin` varchar(10) NOT NULL,
  `rbc` varchar(10) NOT NULL,
  `mcv` varchar(10) NOT NULL,
  `platelets` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `biologic_report`
--

INSERT INTO `biologic_report` (`id_report`, `id_user`, `glucose`, `cholesterol`, `bilirubin`, `rbc`, `mcv`, `platelets`) VALUES
(1, 312512, '12', '32', '41', '22', '61', '21');

-- --------------------------------------------------------

--
-- Table structure for table `blood_donors`
--

CREATE TABLE `blood_donors` (
  `id_blood` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `city` varchar(45) NOT NULL,
  `hospital` varchar(45) NOT NULL,
  `blood_type` varchar(3) NOT NULL,
  `call_number` varchar(14) NOT NULL,
  `notes` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blood_donors`
--

INSERT INTO `blood_donors` (`id_blood`, `id_user`, `city`, `hospital`, `blood_type`, `call_number`, `notes`) VALUES
(1, 312512, 'Bekasi', 'hermina A', 'A+', '2312312', 'dasdasdq'),
(2, 312512, 'Tangerang Selatan', 'Hermina B', 'B+', '2312312', 'dasdas'),
(3, 312512, 'Jakarta Selatan', 'Hermina C', 'O', '2312312', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pasword` varchar(250) NOT NULL,
  `call_number` varchar(14) NOT NULL,
  `blood_type` varchar(3) NOT NULL,
  `location` varchar(50) NOT NULL,
  `image_profile` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `full_name`, `email`, `pasword`, `call_number`, `blood_type`, `location`, `image_profile`) VALUES
(312512, 'Ahmad Reza A', 'areza7095@gmail.com', '123456', '12389261789312', 'A+', 'Bogor', 'Blablsa.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `biologic_report`
--
ALTER TABLE `biologic_report`
  ADD PRIMARY KEY (`id_report`),
  ADD UNIQUE KEY `biologic_report_id_user_key` (`id_user`);

--
-- Indexes for table `blood_donors`
--
ALTER TABLE `blood_donors`
  ADD PRIMARY KEY (`id_blood`),
  ADD KEY `blood_donors_id_user_fkey` (`id_user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `biologic_report`
--
ALTER TABLE `biologic_report`
  MODIFY `id_report` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blood_donors`
--
ALTER TABLE `blood_donors`
  MODIFY `id_blood` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `biologic_report`
--
ALTER TABLE `biologic_report`
  ADD CONSTRAINT `biologic_report_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON UPDATE CASCADE;

--
-- Constraints for table `blood_donors`
--
ALTER TABLE `blood_donors`
  ADD CONSTRAINT `blood_donors_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
