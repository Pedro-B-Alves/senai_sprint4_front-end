using senai.spMedicalGroup_webApi.Contexts;
using senai.spMedicalGroup_webApi.Domains;
using senai.spMedicalGroup_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spMedicalGroup_webApi.Repositories
{
    public class EspecialidadeRepository : IEspecialidadeRepository
    {
        SpMedicalGroupContext ctx = new SpMedicalGroupContext();

        public void Atualizar(int id, Especialidade EspecialidadeAtualizada)
        {
            Especialidade EspecialidadeBuscada = ctx.Especialidades.Find(id);

            if (EspecialidadeAtualizada.Tipo != null)
            {
                EspecialidadeBuscada.Tipo = EspecialidadeAtualizada.Tipo;
            }

            ctx.Especialidades.Update(EspecialidadeBuscada);

            ctx.SaveChanges();
        }

        public Especialidade BuscarPorId(int id)
        {
            return ctx.Especialidades.FirstOrDefault(tu => tu.IdEspecialidade == id);
        }

        public void Cadastrar(Especialidade novaEspecialidade)
        {
            ctx.Especialidades.Add(novaEspecialidade);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Especialidade EspecialidadeBuscada = ctx.Especialidades.Find(id);

            ctx.Especialidades.Remove(EspecialidadeBuscada);

            ctx.SaveChanges();
        }

        public List<Especialidade> Listar()
        {
            return ctx.Especialidades.ToList();
        }
    }
}
