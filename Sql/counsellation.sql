CREATE DATABASE COUNSELLATION;

CREATE TABLE counsellors(
    Counsellor_Id INT AUTO_INCREMENT PRIMARY KEY,
    Counsellor_UserName VARCHAR(100) NOT NULL,
    Counsellor_Email VARCHAR(100) NOT NULL,
    Counsellor_PasswordHash VARCHAR(100) NOT NULL,
    Counsellor_FirstName VARCHAR(100) NOT NULL,
    Counsellor_LastName VARCHAR(100) NOT NULL,
    Counsellor_Department VARCHAR(100) NOT NULL,
    Counsellor_Specialization VARCHAR(100) NOT NULL,
    CourseID INT NOT NULL,
    FOREIGN KEY (CourseID) REFERENCES UNIVERSITIES.university_courses(Course_Id)
);

CREATE TABLE counsellation_sessions(
    Counsellation_Id INT AUTO_INCREMENT PRIMARY KEY,
    StudentID INT NOT NULL,
    CounsellorID INT,
    Counsellation_Specification VARCHAR(255),
    Counsellation_Time DATETIME,
    Counsellation_Link VARCHAR(255),
    FOREIGN KEY (StudentID) REFERENCES STUDENTS.students(Student_Id),
    FOREIGN KEY (CounsellorID) REFERENCES counsellors(Counsellor_Id)
);

CREATE TABLE predepart_sessions(
    Predepart_Id INT AUTO_INCREMENT PRIMARY KEY,
    CounsellorID INT NOT NULL,
    StudentID INT NOT NULL,
    Predepart_Time DATETIME NOT NULL,
    Predepart_Link VARCHAR(255) NOT NULL,
    FOREIGN KEY (StudentID) REFERENCES STUDENTS.students(Student_Id),
    FOREIGN KEY (CounsellorID) REFERENCES counsellors(Counsellor_Id)
);