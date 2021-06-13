using senai.spMedicalGroup_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spMedicalGroup_webApi.Interfaces
{
    interface IAdministradorRepository
    {
        List<Administrador> Listar();

        Administrador BuscarPorId(int id);

        void Cadastrar(Administrador novoAdministrador);

        void Atualizar(int id, Administrador AdministradorAtualizado);

        void Deletar(int id);

    }
}
