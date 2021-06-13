using System;
using System.Collections.Generic;

#nullable disable

namespace senai.spMedicalGroup_webApi.Domains
{
    public partial class Administrador
    {
        public int IdAdministrador { get; set; }
        public int? IdUsuario { get; set; }
        public string Nome { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
