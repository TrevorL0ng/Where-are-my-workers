INSERT INTO department (name)
VALUES
    ("Engineering"),
    ("Finance"),
    ("Legal"),
    ("Sales"),
    ("Service");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Software Engineer", 120000, 1),
    ("Accountant", 125000, 2),
    ("Lawyer", 190000, 3),
    ("Salesperson", 80000, 4),
    ("Customer Service Rep.", 60000, 5);
    
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("Mike", "Doe", 3),
    ("Linda", "Tupik", 1),
    ("Sarah", "Allen", 1, 2),
    ("Malia", "Lourd", 2),
    ("Ashely", "Chan", 2, 4),
    ("Kevin", "Freekes", 3, 1),
    ("John", "Rodriguez", 4);
    