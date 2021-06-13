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
    public class ConsultumsController : ControllerBase
    {
        /// <summary> 
        /// Objeto _ConsultumRepository que irá receber todos os métodos definidos na interface IConsultumRepository 
        /// </summary> 
        private IConsultumRepository _ConsultumRepository { get; set; }

        /// <summary> 
        /// Instancia o objeto _ConsultumRepository para que haja a referência aos métodos no repositório 
        /// </summary> 
        public ConsultumsController()
        {
            _ConsultumRepository = new ConsultumRepository();
        }

        /// <summary> 
        /// Lista todas as consultas 
        /// </summary> 
        /// <returns>Uma lista de consultas  e um status code 200 - Ok</returns> 
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                // Retorna a resposta da requisição fazendo a chamada para o método 
                return Ok(_ConsultumRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary> 
        /// Busca uma consulta através do ID 
        /// </summary> 
        /// <param name="id">ID da consulta que será buscada</param> 
        /// <returns>Uma consulta buscada e um status code 200 - Ok</returns> 
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                // Retora a resposta da requisição fazendo a chamada para o método 
                return Ok(_ConsultumRepository.BuscarPorId(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary> 
        /// Busca as consulta através do ID 
        /// </summary> 
        /// <param name="id">ID da consulta que será buscada</param> 
        /// <returns>As consultas buscadas e um status code 200 - Ok</returns> 
        [HttpGet("/Listar/{id}")]
        public IActionResult GetByIdUser(int id)
        {
            try
            {
                // Retora a resposta da requisição fazendo a chamada para o método 
                return Ok(_ConsultumRepository.BuscarPorIdUsuario(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary> 
        /// Cadastra uma nova consulta 
        /// </summary> 
        /// <param name="novoConsultum">Objeto novoConsultum que será cadastrado</param> 
        /// <returns>Um status code 201 - Created</returns> 
        [HttpPost]
        public IActionResult Post(Consultum novoConsultum)
        {
            try
            {
                // Faz a chamada para o método 
                _ConsultumRepository.Cadastrar(novoConsultum);

                // Retorna um status code 
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        /// <summary> 
        /// Atualiza uma consulta existente 
        /// </summary> 
        /// <param name="id">ID do consulta que será atualizada</param> 
        /// <param name="ConsultumAtualizado">Objeto com as novas informações</param> 
        /// <returns>Um status code 204 - No Content</returns> 
        [HttpPut("{id}")]
        public IActionResult Put(int id, Consultum ConsultumAtualizado)
        {
            try
            {
                // Faz a chamada para o método 
                _ConsultumRepository.Atualizar(id, ConsultumAtualizado);

                // Retorna um status code 
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        /// <summary> 
        /// Deleta uma consulta existente 
        /// </summary> 
        /// <param name="id">ID da consulta que será deletada</param> 
        /// <returns>Um status code 204 - No Content</returns> 
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                // Faz a chamada para o método 
                _ConsultumRepository.Deletar(id);

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
