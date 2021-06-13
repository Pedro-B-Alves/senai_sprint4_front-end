--DQL

--Definindo o banco de dados que será utilizado
USE SP_Medical_Group;
GO

--Lista todos os tipos de usuários
SELECT * FROM tipoUsuario;

--Lista todos os usuários
SELECT * FROM usuario;

--Lista todos os tipos de administradores
SELECT * FROM administrador;

--Lista todas as clinicas
SELECT * FROM clinica;

--Lista todas as especialidades
SELECT * FROM especialidade;

--Lista todos os médicos
SELECT * FROM medico;

--Lista todos os pacientes
SELECT * FROM paciente;

--Lista todas as consultas
SELECT * FROM consulta;