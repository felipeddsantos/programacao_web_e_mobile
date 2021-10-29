CREATE TABLE tabela_cursos(
	
    id serial PRIMARY KEY,
	nome VARCHAR(50) UNIQUE NOT NULL,
	turno VARCHAR(15) NOT NULL,
	unidade VARCHAR(50) NOT NULL
);

CREATE TABLE tabela_alunos(
	
    id serial PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	cpf VARCHAR(15) UNIQUE NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	senha VARCHAR(50) NOT NULL,
	nascimento VARCHAR(15),
	endereco VARCHAR(50),
	telefone VARCHAR(50),
	registro VARCHAR(50) UNIQUE NOT NULL,
	curso VARCHAR(50) NOT NULL,
	FOREIGN KEY (curso) REFERENCES tabela_cursos (nome) ON UPDATE CASCADE
);

CREATE TABLE tabela_professores(
	
    id serial PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	cpf VARCHAR(15) UNIQUE NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	senha VARCHAR(50) NOT NULL,
	nascimento VARCHAR(15),
	endereco VARCHAR(50),
	telefone VARCHAR(50),
	registro VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE tabela_coordenadores(
	
    id serial PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	cpf VARCHAR(15) UNIQUE NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	senha VARCHAR(50) NOT NULL,
	nascimento VARCHAR(15),
	endereco VARCHAR(50),
	telefone VARCHAR(50),
	registro VARCHAR(50) UNIQUE NOT NULL,
	curso VARCHAR(50) UNIQUE NOT NULL,
	FOREIGN KEY (curso) REFERENCES tabela_cursos (nome) ON UPDATE CASCADE
);

CREATE TABLE tabela_disciplinas(
	
    id serial PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	codigo VARCHAR(50) UNIQUE NOT NULL,
	professor VARCHAR(50) NOT NULL,
	curso VARCHAR(50) NOT NULL,
	periodo INTEGER,
	carga INTEGER,
    FOREIGN KEY (professor) REFERENCES tabela_professores (registro) ON UPDATE CASCADE,
	FOREIGN KEY (curso) REFERENCES tabela_cursos (nome) ON UPDATE CASCADE	  
);

CREATE TABLE tabela_requisicoes(
	
    id serial PRIMARY KEY,
	aluno VARCHAR(50) NOT NULL,
	disciplina VARCHAR(50) NOT NULL,
    FOREIGN KEY (aluno) REFERENCES tabela_alunos (registro) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (disciplina) REFERENCES tabela_disciplinas (codigo)	ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE tabela_matriculas(
	
    id serial PRIMARY KEY,
	aluno VARCHAR(50) NOT NULL,
	disciplina VARCHAR(50) NOT NULL,
	nota REAL NOT NULL,
	faltas INT NOT NULL,
    FOREIGN KEY (aluno) REFERENCES tabela_alunos (registro) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (disciplina) REFERENCES tabela_disciplinas (codigo) ON UPDATE CASCADE ON DELETE CASCADE
);