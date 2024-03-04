CREATE TABLE industry (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO industry (name)
VALUES
('Retail "Superstores"'),
('Banking'),
('Healthcare'),
('Entretainment'),
('Education'),
('Pharmaceutical'),
('Oil & Gas'),
('Green Energys'),
('Minery'),
('VideoGames');

CREATE TABLE offering (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255)
);
INSERT INTO offering (name, description)
VALUES
('Offering 1', 'Description 1'),
('Offering 2', 'Description 2'),
('Offering 3', 'Description 3'),
('Offering 4', 'Description 4'),
('Offering 5', 'Description 5'),
('Offering 6', 'Description 6'),
('Offering 7', 'Description 7'),
('Offering 8', 'Description 8'),
('Offering 9', 'Description 9'),
('Offering 10', 'Description 10');

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

CREATE TABLE client (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
	surname VARCHAR(255),
	email VARCHAR(255) 
);

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

CREATE TABLE case_detail (
  id SERIAL PRIMARY KEY,
  image_detail VARCHAR(255),
  video_detail VARCHAR(255),
  text_detail TEXT
);

CREATE TABLE technology (
  id SERIAL PRIMARY KEY,
  image_tech VARCHAR(255),
  video_tech VARCHAR(255),
  text_tech TEXT
);

CREATE TABLE improvement (
  id SERIAL PRIMARY KEY,
  image_imp VARCHAR(255),
  video_imp VARCHAR(255),
  text_imp TEXT
);
 

 CREATE TABLE challenge (
  id SERIAL PRIMARY KEY,
  image_ch VARCHAR(255),
  video_ch VARCHAR(255),
  text_ch TEXT
);

	CREATE TABLE successcase (
		id SERIAL PRIMARY KEY,
		title VARCHAR(255),
		startDate DATE,
		finishDate DATE,
		teamSize INT,
		isPublic BOOLEAN,
		industryId INT,
		clientId INT,
		projectTypeId INT,
		offeringId INT,
		technologyid INT,
		challengeid INT,
		improvementid INT,
		contactId INT,
		caseDetailsId INT,
		FOREIGN KEY (industryId) REFERENCES industry(id),
		FOREIGN KEY (clientId) REFERENCES client(id),
		FOREIGN KEY (projectTypeId) REFERENCES project_Type(id),
		FOREIGN KEY (contactId) REFERENCES contact(id),
		FOREIGN KEY (offeringId) REFERENCES offering(id),
		FOREIGN KEY (caseDetailsId) REFERENCES case_detail(id),
		FOREIGN KEY (technologyid) REFERENCES technology(id),
		FOREIGN KEY (challengeid) REFERENCES challenge(id),
		FOREIGN KEY (improvementid) REFERENCES improvement(id)	
		);