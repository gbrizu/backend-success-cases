CREATE TABLE contact (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    sur_name VARCHAR(255),
	email VARCHAR(255)
);
INSERT INTO contact (name, sur_name, email)
VALUES
('German', 'A', 'GermanA@gmail.com'),
('Nicolas', 'B', 'NicolasB@gmail.com'),
('Matias', 'C', 'MatiasC@gmail.com'),
('Agustin', 'D', 'AgustinD@gmail.com'),
('Facundo', 'E', 'FacundoE@gmail.com'),
('Agustina', 'F', 'AgustinaF@gmail.com'),
('Romina', 'G', 'RominaG@gmail.com'),
('Brisa', 'H', 'BrisaH@gmail.com'),
('Gimena', 'I', 'GimenaI@gmail.com'),
('Juan', 'J', 'JuanJ@gmail.com');