CREATE TABLE project_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO project_type (name)
VALUES
('Mobile Development'),
('Web Development'),
('Software Development'),
('Development'),
('Refactory'),
('Migration'),
('Integration'),
('Networking'),
('Database Management'),
('Emergency Recovery');