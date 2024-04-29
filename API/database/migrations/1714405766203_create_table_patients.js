module.exports = {
    "up": "CREATE TABLE `patients` (`id` int(11) NOT NULL AUTO_INCREMENT,`name` varchar(256) NOT NULL,`patient_id` varchar(20) NOT NULL UNIQUE,`date` date NOT NULL,`problem` text NOT NULL,`recipe` text NOT NULL,`price` float NOT NULL,`insurance` tinyint(1) NOT NULL DEFAULT 0,`insurance_name` varchar(128) DEFAULT NULL,`insurance_cover` float NOT NULL DEFAULT 0,`created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,PRIMARY KEY (`id`))",
    "down": "DROP TABLE  `patients`"
}