using senai.spMedicalGroup_webApi.Contexts;
using senai.spMedicalGroup_webApi.Domains;
using senai.spMedicalGroup_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spMedicalGroup_webApi.Repositories
{
    public class ClinicaRepository : IClinicaRepository
    {
        SpMedicalGroupContext ctx = new SpMedicalGroupContext();

        public void Atualizar(int id, Clinica ClinicaAtualizada)
        {
            Clinica ClinicaBuscada = ctx.Clinicas.Find(id);

            if (ClinicaAtualizada.HorarioFuncionamento != null)
            {
                ClinicaBuscada.HorarioFuncionamento = ClinicaAtualizada.HorarioFuncionamento;
            }

            ctx.Clinicas.Update(ClinicaBuscada);

            ctx.SaveChanges();
        }

        public Clinica BuscarPorId(int id)
        {
            return ctx.Clinicas.FirstOrDefault(tu => tu.IdClinica == id);
        }

        public void Cadastrar(Clinica novaClinica)
        {
            ctx.Clinicas.Add(novaClinica);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Clinica ClinicaBuscada = ctx.Clinicas.Find(id);

            ctx.Clinicas.Remove(ClinicaBuscada);

            ctx.SaveChanges();
        }

        public List<Clinica> Listar()
        {
            return ctx.Clinicas.ToList();
        }
    }
}
