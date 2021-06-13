using senai.spMedicalGroup_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spMedicalGroup_webApi.Interfaces
{
    interface IConsultumRepository
    {
        List<Consultum> Listar();

        Consultum BuscarPorId(int id);

        Consultum BuscarPorIdUsuario(int id);

        void Cadastrar(Consultum novoConsultum);

        void Atualizar(int id, Consultum ConsultumAtualizado);

        void Deletar(int id);

    }
}
