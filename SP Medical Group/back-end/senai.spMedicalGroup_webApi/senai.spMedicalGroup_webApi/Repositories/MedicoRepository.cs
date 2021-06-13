using senai.spMedicalGroup_webApi.Contexts;
using senai.spMedicalGroup_webApi.Domains;
using senai.spMedicalGroup_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spMedicalGroup_webApi.Repositories
{
    public class MedicoRepository : IMedicoRepository
    {
        SpMedicalGroupContext ctx = new SpMedicalGroupContext();

        public void Atualizar(int id, Medico MedicoAtualizado)
        {
            Medico MedicoBuscado = ctx.Medicos.Find(id);

            if (MedicoAtualizado.IdEspecialidade != null)
            {
                MedicoBuscado.IdEspecialidade = MedicoAtualizado.IdEspecialidade;
            }

            ctx.Medicos.Update(MedicoBuscado);

            ctx.SaveChanges();
        }

        public Medico BuscarPorId(int id)
        {
            return ctx.Medicos.FirstOrDefault(tu => tu.IdMedico == id);
        }

        public void Cadastrar(Medico novoMedico)
        {
            ctx.Medicos.Add(novoMedico);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Medico MedicoBuscado = ctx.Medicos.Find(id);

            ctx.Medicos.Remove(MedicoBuscado);

            ctx.SaveChanges();
        }

        public List<Medico> Listar()
        {
            return ctx.Medicos.ToList();
        }
    }
}
