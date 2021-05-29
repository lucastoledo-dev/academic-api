
export const getIESDetail = async (ies) => {
  const scrapy = require('node-scrapy')
  let buff = new Buffer(ies);
  let base64data = buff.toString('base64');

  const url = 'https://emec.mec.gov.br/emec/consulta-ies/index/d96957f455f6405d14c6542552b0f6eb/'+base64data

  const model = {
    ies: '.tooltip ($ | trim)',
    status: 'tr:nth-child(4) tr:nth-child(2) > td:nth-child(2) ($ | trim)',
    cnpj: 'tr:nth-child(2) > td:nth-child(2) ($ | trim)',
    naturezaJuridica: 'tr:nth-child(3) > td:nth-child(2) ($ | trim)',
    representanteLegal: 'tr:nth-child(4) > td:nth-child(2) ($ | trim)',
    endereco:{
      endereco: 'tr:nth-child(4) tr:nth-child(3) > td:nth-child(2) ($ | trim)',
      numero: 'tr:nth-child(4) tr:nth-child(3) > td:nth-child(4) ($ | trim)',
      complemento: 'tr:nth-child(4) tr:nth-child(4) > td:nth-child(2) ($ | trim)',
      cep: 'tr:nth-child(4) tr:nth-child(4) > td:nth-child(4) ($ | trim)',
      bairro: 'tr:nth-child(5) > td:nth-child(2) ($ | trim)',
      municipio: 'tr:nth-child(6) > td:nth-child(2) ($ | trim)',
      uf: 'tr:nth-child(4) tr:nth-child(6) > td:nth-child(4) ($ | trim)'
    },
    telefone: 'tr:nth-child(7) > td:nth-child(2) ($ | trim)',
    organizacaoAcademica: 'tr:nth-child(8) > td:nth-child(2) ($ | trim)',
    site: 'tr:nth-child(8) > td:nth-child(4) ($ | trim)',
    email: 'tr:nth-child(4) tr:nth-child(9) > td:nth-child(2) ($ | trim)',
    categoriaAdministrativa: 'tr:nth-child(4) tr:nth-child(10) > td:nth-child(2) ($ | trim)',
    reitorOuDirigentePrincipal: 'tr:nth-child(4) tr:nth-child(11) > td:nth-child(2) ($ | trim)', 
    tipoCredenciamento: 'tr:nth-child(4) tr:nth-child(12) > td:nth-child(2) ($ | trim)',
    indices:{
     CI_conceitoInstitucional: {
       valor: 'tr:nth-child(6) tr:nth-child(1) > td:nth-child(2) ($ | trim)',
       ano: 'tr:nth-child(6) tr:nth-child(1) > td:nth-child(3) ($ | trim)',
     },
     CI_EAD_conceitoInstitucional: {
       valor: 'tr:nth-child(6) tr:nth-child(2) > td:nth-child(2) ($ | trim)',
       ano: 'tr:nth-child(6) tr:nth-child(2) > td:nth-child(3) ($ | trim)',
     },
     IGC_indiceGeralCurso: {
       valor: 'tr:nth-child(6) tr:nth-child(3) > td:nth-child(2) ($ | trim)',
       ano: 'tr:nth-child(6) tr:nth-child(3) > td:nth-child(3) ($ | trim)',
     },
     IGC_continuo: {
       valor: 'tr:nth-child(6) tr:nth-child(4) > td:nth-child(2) ($ | trim)',
       ano: 'tr:nth-child(6) tr:nth-child(4) > td:nth-child(3) ($ | trim)',
     }
    }
  }
  
  const result = await fetch(url)
    .then((res) => res.text())
    .then((body) => {
      return {
        iesDetail: scrapy.extract(body, model),
        url: url
      };
  });

  return result
}