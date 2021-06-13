using senai.spMedicalGroup_webApi.Contexts;
using senai.spMedicalGroup_webApi.Domains;
using senai.spMedicalGroup_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spMedicalGroup_webApi.Repositories
{
    public class PacienteRepository : IPacienteRepository
    {
        SpMedicalGroupContext ctx = new SpMedicalGroupContext();

        public void Atualizar(int id, Paciente PacienteAtualizado)
        {
            Paciente PacienteBuscado = ctx.Pacientes.Find(id);

            if (PacienteAtualizado.Descricao != null)
            {
                PacienteBuscado.Descricao = PacienteAtualizado.Descricao;

            }

            ctx.Pacientes.Update(PacienteBuscado);

            ctx.SaveChanges();
        }

        public Paciente BuscarPorId(int id)
        {
            return ctx.Pacientes.FirstOrDefault(tu => tu.IdPaciente == id);
        }

        public void Cadastrar(Paciente novoPaciente)
        {

            ctx.Pacientes.Add(novoPaciente);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Paciente PacienteBuscado = ctx.Pacientes.Find(id);

            ctx.Pacientes.Remove(PacienteBuscado);

            ctx.SaveChanges();
        }

        public List<Paciente> Listar()
        {
            return ctx.Pacientes.ToList();
        }
    }
}
