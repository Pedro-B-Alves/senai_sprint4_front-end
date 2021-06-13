using senai.spMedicalGroup_webApi.Contexts;
using senai.spMedicalGroup_webApi.Domains;
using senai.spMedicalGroup_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spMedicalGroup_webApi.Repositories
{
    public class AdministradorRepository : IAdministradorRepository
    {
        SpMedicalGroupContext ctx = new SpMedicalGroupContext();

        public void Atualizar(int id, Administrador AdministradorAtualizado)
        {
            Administrador AdministradorBuscado = ctx.Administradors.Find(id);

            if (AdministradorAtualizado.Nome != null)
            {
                AdministradorBuscado.Nome = AdministradorAtualizado.Nome;

            }

            ctx.Administradors.Update(AdministradorBuscado);

            ctx.SaveChanges();
        }

        public Administrador BuscarPorId(int id)
        {
            return ctx.Administradors.FirstOrDefault(tu => tu.IdAdministrador == id);
        }

        public void Cadastrar(Administrador novoAdministrador)
        {

            ctx.Administradors.Add(novoAdministrador);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Administrador AdministradorBuscado = ctx.Administradors.Find(id);

            ctx.Administradors.Remove(AdministradorBuscado);

            ctx.SaveChanges();
        }

        public List<Administrador> Listar()
        {
            return ctx.Administradors.ToList();
        }
    }
}
