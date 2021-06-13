using senai.spMedicalGroup_webApi.Contexts;
using senai.spMedicalGroup_webApi.Domains;
using senai.spMedicalGroup_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spMedicalGroup_webApi.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        SpMedicalGroupContext ctx = new SpMedicalGroupContext();

        public void Atualizar(int id, TipoUsuario TipoUsuarioAtualizado)
        {
            TipoUsuario TipoUsuarioBuscado = ctx.TipoUsuarios.Find(id);

            if (TipoUsuarioAtualizado.Tipo != null)
            {
                TipoUsuarioBuscado.Tipo = TipoUsuarioAtualizado.Tipo;

            }

            ctx.TipoUsuarios.Update(TipoUsuarioBuscado);

            ctx.SaveChanges();
        }

        public TipoUsuario BuscarPorId(int id)
        {
            return ctx.TipoUsuarios.FirstOrDefault(tu => tu.IdTipoUsuario == id);
        }

        public void Cadastrar(TipoUsuario novoTipoUsuario)
        {

            ctx.TipoUsuarios.Add(novoTipoUsuario);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Administrador AdministradorBuscado = ctx.Administradors.Find(id);

            ctx.Administradors.Remove(AdministradorBuscado);

            ctx.SaveChanges();
        }

        public List<TipoUsuario> Listar()
        {
            return ctx.TipoUsuarios.ToList();
        }
    }
}
