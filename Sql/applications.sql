CREATE DATABASE APPLICATIONS;

CREATE TABLE applications(
    Application_Id INT AUTO_INCREMENT PRIMARY KEY,
    CourseID INT NOT NULL,
    StudentID INT NOT NULL,
    Application_Status VARCHAR(100) NOT NULL,
    FOREIGN KEY (CourseID) REFERENCES UNIVERSITIES.university_courses(Course_Id),
    FOREIGN KEY (StudentID) REFERENCES STUDENTS.students(Student_Id)
);