--DML

--Definindo o banco de dados que será utilizado
USE SP_Medical_Group;
GO

-- Insere os tipos de usuários
INSERT INTO tipoUsuario(tipo)
VALUES		('Administrador')
		   ,('Paciente')
		   ,('Médico');
GO

-- Insere as informações dos usuários
INSERT INTO usuario(idTipoUsuario, rg, cpf, endereco, dataNascimento, telefone, email, senha)
VALUES				('3','220333889','37182407850','Rua Tupanaci 897, Vila Gumercindo, São Paulo, 04131-020','11/05/1991','1127385781','ricardo.lemos@spmedicalgroup.com.br','ricardo123')
				   ,('3','437364513','38093066810','Rua Lourenço Leite Penteado 303, Parque São Rafael, São Paulo, 08311-170','12/07/1978','11992958066','roberto.possarle@spmedicalgroup.com.br','possarle987')
				   ,('3','169058013','89610795811','Avenida Presidente Wilson 763, Mooca , São Paulo, 03107-001','10/06/1994','1139294920','helena.souza@spmedicalgroup.com.br','helena456')
				   ,('2','435225435','94839859000','Rua Estado de Israel 240, São Paulo, Estado de São Paulo, 04022-000','13/10/1983','1134567654','ligia@gmail.com','ligia123')
				   ,('2','326543457','73556944057','Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200','23/07/2001','11987656543','alexandre@gmail.com','alexandre987')
				   ,('2','546365253','16839338002','Av. Ibirapuera - Indianópolis, 2927,  São Paulo - SP, 04029-200','10/10/1978','11972084453','fernando@gmail.com','fernando123')
				   ,('2','543663625','14332654765','R. Vitória, 120 - Vila Sao Jorge, Barueri - SP, 06402-030','13/10/1985','1134566543','henrique@gmail.com','henrique987')
				   ,('2','5325444441','91305348010','R. Ver. Geraldo de Camargo, 66 - Santa Luzia, Ribeirão Pires - SP, 09405-380','27/08/1975','1176566377','joao@hotmail.com','joao123')
				   ,('2','545662667','79799299004','Alameda dos Arapanés, 945 - Indianópolis, São Paulo - SP, 04524-001','21/03/1972','11954368769','bruno@gmail.com','bruno987')
				   ,('2','545662668','13771913039','R Sao Antonio, 232 - Vila Universal, Barueri - SP, 06407-140','05/03/2018','','mariana@outlook.com','mariana123')
				   ,('1','434538723','5129450809','Rua Genésio dos Santos 465, Vila Granada, São Paulo, 03654-110','15/06/1994','11997914517','isabellyreginabaptista__@spmedicalgroup.com.br','mBCohJ4fle')
				   ,('1','322887288','83193775878','Avenida Presidente Wilson 1230, Mooca, São Paulo, 03107-901','01/04/1996','11993009597','tomasrenatoenzobarros_@spmedicalgroup.com.br','MqyGD5DZry');
GO

-- Insere as informações dos administradores
INSERT INTO administrador(idUsuario, nome)
VALUES		('11','Isabelly Regina')
		   ,('12','Tomás Renato');
GO

-- Insere as informações da clinica
INSERT INTO clinica(endereco, horarioFuncionamento, cnpj, nomeFantasia, razaoSocial)
VALUES		('Av. Barão Limeira, 532, São Paulo, SP','07:00 às 22:00','86400902000130','Clinica Possarle','SP Medical Group');
GO

-- Insere as especialidades
INSERT INTO especialidade(tipo)
VALUES		('Acupuntura')
		   ,('Anestesiologia')
		   ,('Angiologia')
		   ,('Cardiologia')
		   ,('Cirurgia Cardiovascular')
		   ,('Cirurgia da Mão')
		   ,('Cirurgia do Aparelho Digestivo')
		   ,('Cirurgia Geral')
		   ,('Cirurgia Pediátrica')
		   ,('Cirurgia Plástica')
		   ,('Cirurgia Torácica')
		   ,('Cirurgia Vascular')
		   ,('Dermatologia')
		   ,('Radioterapia')
		   ,('Urologia')
		   ,('Pediatria')
		   ,('Psiquiatria');
GO

-- Insere as informações dos médicos
INSERT INTO medico(idClinica, idUsuario, idEspecialidade, nome, crm)
VALUES		('1','3','2','Ricardo Lemos','54356SP')
		   ,('1','3','17','Roberto Possarle','53452SP')
		   ,('1','3','16','Helena Strada','65463SP');
GO

-- Insere as informações dos pacientes
INSERT INTO paciente(idUsuario, nome, descricao)
VALUES		('4','Ligia','Saudável')
		   ,('5','Alexandre','Precisa de vitamina D')
		   ,('6','Fernando','Saudável')
		   ,('7','Henrique','Saudável')
		   ,('8','João','Precisa tomar mais água ')
		   ,('9','Bruno','Saudável')
		   ,('10','Mariana','Saudável');
GO

-- Insere as informações das consultas
INSERT INTO consulta(idPaciente, idMedico, dataAgendamento, situacao)
VALUES		('7','3','20/01/2020 15:00','Realizada')
		   ,('2','2','06/01/2020 10:00','Cancelada')
		   ,('3','2','07/02/2020 11:00','Realizada')
		   ,('2','2','06/02/2018 10:00','Realizada')
		   ,('4','1','07/02/2019 11:00','Cancelada')
		   ,('7','3','08/03/2020 15:00','Agendada')
		   ,('4','1','09/03/2020 11:00','Agendada');
GO