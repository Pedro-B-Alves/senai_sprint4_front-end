using senai.spMedicalGroup_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spMedicalGroup_webApi.Interfaces
{
    interface IPacienteRepository
    {
        List<Paciente> Listar();

        Paciente BuscarPorId(int id);

        void Cadastrar(Paciente novoPaciente);

        void Atualizar(int id, Paciente PacienteAtualizado);

        void Deletar(int id);

    }
}
