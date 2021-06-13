using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai.spMedicalGroup_webApi.Domains;
using senai.spMedicalGroup_webApi.Interfaces;
using senai.spMedicalGroup_webApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spMedicalGroup_webApi.Controllers
{
    // Define que o tipo de resposta da API será no formato JSON
    [Produces("application/json")]

    [Route("api/[controller]")]
    [ApiController]
    public class ClinicasController : ControllerBase
    {
        /// <summary> 
        /// Objeto _ClinicaRepository que irá receber todos os métodos definidos na interface IClinicaRepository 
        /// </summary> 
        private IClinicaRepository _ClinicaRepository { get; set; }

        /// <summary> 
        /// Instancia o objeto _ClinicaRepository para que haja a referência aos métodos no repositório 
        /// </summary> 
        public ClinicasController()
        {
            _ClinicaRepository = new ClinicaRepository();
        }

        /// <summary> 
        /// Lista todos os tipos de usuários 
        /// </summary> 
        /// <returns>Uma lista de tipos de usuários e um status code 200 - Ok</returns> 
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                // Retorna a resposta da requisição fazendo a chamada para o método 
                return Ok(_ClinicaRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary> 
        /// Busca um tipo de usuário através do ID 
        /// </summary> 
        /// <param name="id">ID do tipo de usuário que será buscado</param> 
        /// <returns>Um tipo de usuário buscado e um status code 200 - Ok</returns> 
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                // Retora a resposta da requisição fazendo a chamada para o método 
                return Ok(_ClinicaRepository.BuscarPorId(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary> 
        /// Cadastra um novo tipo de usuário 
        /// </summary> 
        /// <param name="novoClinica">Objeto novoClinica que será cadastrado</param> 
        /// <returns>Um status code 201 - Created</returns> 
        [HttpPost]
        public IActionResult Post(Clinica novoClinica)
        {
            try
            {
                // Faz a chamada para o método 
                _ClinicaRepository.Cadastrar(novoClinica);

                // Retorna um status code 
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        /// <summary> 
        /// Atualiza um tipo de usuário existente 
        /// </summary> 
        /// <param name="id">ID do tipo de usuário que será atualizado</param> 
        /// <param name="ClinicaAtualizado">Objeto com as novas informações</param> 
        /// <returns>Um status code 204 - No Content</returns> 
        [HttpPut("{id}")]
        public IActionResult Put(int id, Clinica ClinicaAtualizado)
        {
            try
            {
                // Faz a chamada para o método 
                _ClinicaRepository.Atualizar(id, ClinicaAtualizado);

                // Retorna um status code 
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        /// <summary> 
        /// Deleta um tipo de usuário existente 
        /// </summary> 
        /// <param name="id">ID do tipo de usuário que será deletado</param> 
        /// <returns>Um status code 204 - No Content</returns> 
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                // Faz a chamada para o método 
                _ClinicaRepository.Deletar(id);

                // Retorna um status code 
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
