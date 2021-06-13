using senai.spMedicalGroup_webApi.Contexts;
using senai.spMedicalGroup_webApi.Domains;
using senai.spMedicalGroup_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spMedicalGroup_webApi.Repositories
{
    public class ConsultumRepository : IConsultumRepository
    {
        SpMedicalGroupContext ctx = new SpMedicalGroupContext();

        public void Atualizar(int id, Consultum ConsultumAtualizada)
        {
            Consultum ConsultumBuscada = ctx.Consulta.Find(id);

            if (ConsultumAtualizada.Situacao != null)
            {
                ConsultumBuscada.Situacao = ConsultumAtualizada.Situacao;
            }

            ctx.Consulta.Update(ConsultumBuscada);

            ctx.SaveChanges();
        }

        public Consultum BuscarPorId(int id)
        {
            return ctx.Consulta.FirstOrDefault(tu => tu.IdConsulta == id);
        }

        public Consultum BuscarPorIdUsuario(int id)
        {
            return ctx.Consulta.FirstOrDefault(tu => tu.IdPaciente == id || tu.IdMedico == id);
        }

        public void Cadastrar(Consultum novaConsultum)
        {
            ctx.Consulta.Add(novaConsultum);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Consultum ConsultumBuscada = ctx.Consulta.Find(id);

            ctx.Consulta.Remove(ConsultumBuscada);

            ctx.SaveChanges();
        }

        public List<Consultum> Listar()
        {
            return ctx.Consulta.ToList();
        }
    }
}
