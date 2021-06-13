using senai.spMedicalGroup_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spMedicalGroup_webApi.Interfaces
{
    interface ITipoUsuarioRepository
    {
        List<TipoUsuario> Listar();

        TipoUsuario BuscarPorId(int id);

        void Cadastrar(TipoUsuario novoTipoUsuario);

        void Atualizar(int id, TipoUsuario TipoUsuarioAtualizado);

        void Deletar(int id);

    }
}
