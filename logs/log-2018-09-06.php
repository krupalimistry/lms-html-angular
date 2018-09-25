<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

ERROR - 2018-09-06 12:52:30 --> Query error: Unknown column 'usms.RoleId' in 'on clause' - Invalid query: SELECT `us`.*, `cp`.*, `ur`.*
FROM `tbluser` `us`
LEFT JOIN `tblcompany` `cp` ON `cp`.`CompanyId` = `us`.`CompanyId`
LEFT JOIN `tblmstuserrole` `ur` ON `usms`.`RoleId` = `us`.`RoleId`
ERROR - 2018-09-06 13:11:11 --> Query error: Unknown column 'Sales_Assign' in 'field list' - Invalid query: SELECT `UserId`, `RoleId`, `CompanyId`, `FirstName`, `LastName`, `Title`, `EmailAddress`, `Password`, `Sales_Assign`, `CountryId`, `StateId`, `City`, `ZipCode`, `PhoneNumber`, `PhoneNumberl`, `IsActive`
FROM `tbluser` `user`
WHERE `user`.`UserId` = '1'
ERROR - 2018-09-06 13:16:29 --> Query error: Unknown table 'ur' - Invalid query: SELECT `user`.*, `cp`.*, `ur`.*, `coun`.*, `sta`.*
FROM `tbluser` `user`
LEFT JOIN `tblcompany` `cp` ON `cp`.`CompanyId` = `user`.`CompanyId`
WHERE `user`.`UserId` = '1'
ERROR - 2018-09-06 13:18:22 --> Query error: Unknown column 'user.UserId=' in 'on clause' - Invalid query: SELECT `user`.*, `cp`.*
FROM `tbluser` `user`
JOIN `tblcompany` `cp` ON `cp`.`CompanyId` = `user`.`UserId=`
WHERE `user`.`UserId` = '1'
ERROR - 2018-09-06 13:25:08 --> Query error: Unknown column 'user.UserId' in 'where clause' - Invalid query: SELECT `us`.`UserId`, `us`.`CompanyId`, `us`.`FirstName`, `us`.`LastName`, `us`.`Title`, `us`.`EmailAddress`, `us`.`CountryId`, `us`.`StateId`, `us`.`City`, `us`.`ZipCode`, `us`.`PhoneNumber`, `us`.`PhoneNumberl`, `us`.`IsActive`
FROM `tbluser` `us`
LEFT JOIN `tblcompany` `tc` ON `us`.`CompanyId` = `tc`.`CompanyId`
WHERE `user`.`UserId` = '1'
ERROR - 2018-09-06 13:27:09 --> Query error: Unknown column 'user.UserId' in 'where clause' - Invalid query: SELECT `us`.`UserId`, `us`.`CompanyId`, `us`.`FirstName`, `us`.`LastName`, `us`.`Title`, `us`.`EmailAddress`, `us`.`CountryId`, `us`.`StateId`, `us`.`City`, `us`.`ZipCode`, `us`.`PhoneNumber`, `us`.`PhoneNumberl`, `us`.`IsActive`, `tc`.`CompanyId`, `tc`.`Name`, `tc`.`Website`, `tc`.`PhoneNo`
FROM `tbluser` `us`
LEFT JOIN `tblcompany` `tc` ON `us`.`CompanyId` = `tc`.`CompanyId`
WHERE `user`.`UserId` = '1'
ERROR - 2018-09-06 13:29:10 --> Query error: Unknown column 'us.CompanyId' in 'on clause' - Invalid query: SELECT `user`.*, `tc`.*
FROM `tbluser` `user`
LEFT JOIN `tblcompany` `tc` ON `us`.`CompanyId` = `tc`.`CompanyId`
WHERE `user`.`UserId` = '1'
ERROR - 2018-09-06 13:36:56 --> Query error: Table 'lms.tbluserinvitation' doesn't exist - Invalid query: DELETE FROM `tbluserinvitation`
WHERE `UserId` = '2'
ERROR - 2018-09-06 13:41:21 --> Query error: Table 'lms.tbluserinvitation' doesn't exist - Invalid query: DELETE FROM `tbluserinvitation`
WHERE `UserId` = '3'
ERROR - 2018-09-06 13:41:28 --> Query error: Table 'lms.tbluserinvitation' doesn't exist - Invalid query: DELETE FROM `tbluserinvitation`
WHERE `UserId` = '3'
ERROR - 2018-09-06 13:41:32 --> Query error: Table 'lms.tbluserinvitation' doesn't exist - Invalid query: DELETE FROM `tbluserinvitation`
WHERE `UserId` = '3'
ERROR - 2018-09-06 13:43:03 --> Query error: Table 'lms.tbluserinvitation' doesn't exist - Invalid query: DELETE FROM `tbluserinvitation`
WHERE `UserId` = '6'
ERROR - 2018-09-06 13:44:28 --> Query error: Table 'lms.tbluserinvitation' doesn't exist - Invalid query: DELETE FROM `tbluserinvitation`
WHERE `UserId` = '7'
ERROR - 2018-09-06 13:49:40 --> Query error: Table 'lms.tblactivitylog' doesn't exist - Invalid query: INSERT INTO `tblactivitylog` (`UserId`, `Module`, `Activity`) VALUES ('1', 'User', 'Update')
ERROR - 2018-09-06 13:13:35 --> 404 Page Not Found: Industrys/industry
ERROR - 2018-09-06 13:13:53 --> 404 Page Not Found: Industrys/industry
ERROR - 2018-09-06 13:14:13 --> 404 Page Not Found: Modules/Industrys
ERROR - 2018-09-06 13:24:38 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 13:25:16 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 13:26:11 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 13:26:32 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 13:26:34 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 13:26:39 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 13:26:43 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 13:26:48 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 13:27:05 --> 404 Page Not Found: Industrys/Industry
ERROR - 2018-09-06 13:48:40 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 13:48:51 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 13:49:42 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 13:50:03 --> 404 Page Not Found: Indephp/Industry
ERROR - 2018-09-06 13:50:14 --> 404 Page Not Found: Indephp/Industrys
ERROR - 2018-09-06 13:56:09 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 14:01:23 --> 404 Page Not Found: industry/add
ERROR - 2018-09-06 14:01:34 --> 404 Page Not Found: industry/getAll
ERROR - 2018-09-06 14:03:04 --> 404 Page Not Found: industry/getAll
ERROR - 2018-09-06 14:03:27 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 14:03:42 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 14:04:06 --> 404 Page Not Found: Industry/Industry/getAll
ERROR - 2018-09-06 14:04:22 --> 404 Page Not Found: Industry/getAll
ERROR - 2018-09-06 14:07:53 --> 404 Page Not Found: inde.php/Industry/getAll
ERROR - 2018-09-06 14:12:11 --> 404 Page Not Found: Industrys/Industry/getAll
ERROR - 2018-09-06 14:18:13 --> 404 Page Not Found: Industrys/Industry/getAll
