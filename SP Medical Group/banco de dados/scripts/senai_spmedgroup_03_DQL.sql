--DQL

--Definindo o banco de dados que ser� utilizado
USE SP_Medical_Group;
GO

--Lista todos os tipos de usu�rios
SELECT * FROM tipoUsuario;

--Lista todos os usu�rios
SELECT * FROM usuario;

--Lista todos os tipos de administradores
SELECT * FROM administrador;

--Lista todas as clinicas
SELECT * FROM clinica;

--Lista todas as especialidades
SELECT * FROM especialidade;

--Lista todos os m�dicos
SELECT * FROM medico;

--Lista todos os pacientes
SELECT * FROM paciente;

--Lista todas as consultas
SELECT * FROM consulta;