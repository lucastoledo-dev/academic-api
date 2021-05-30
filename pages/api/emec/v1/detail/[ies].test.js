const axios = require('axios');

const requestUrl = `${global.SERVER_URL}/api/emec/v1/detail`;

describe('/emec/v1/detail', () => {
  
  test('Utilizando um IES válido: 572', async () => {
    const response = await axios.get(`${requestUrl}/572`);

    const { data, status } = response;
    expect(status).toBe(200);
    expect(data).toEqual({
      "body": {
          "ies": expect.any(String),
          "status": expect.any(String),
          "cnpj": expect.any(String),
          "naturezaJuridica": expect.any(String),
          "representanteLegal": expect.any(String),
          "endereco": {
            "endereco": expect.any(String),
            "numero": expect.any(String),
            "complemento": expect.any(String),
            "cep": expect.any(String),
            "bairro": expect.any(String),
            "municipio": expect.any(String),
            "uf": expect.any(String)
          },
          "telefone": expect.any(String),
          "organizacaoAcademica": expect.any(String),
          "site": expect.any(String),
          "email": expect.any(String),
          "categoriaAdministrativa": expect.any(String),
          "reitorOuDirigentePrincipal": expect.any(String),
          "tipoCredenciamento": expect.any(String),
          "indices": {
            "CI_conceitoInstitucional": {
              "valor": expect.any(String),
              "ano": expect.any(String)
            },
            "CI_EAD_conceitoInstitucional": {
              "valor": expect.any(String),
              "ano": expect.any(String)
            },
            "IGC_indiceGeralCurso": {
              "valor": expect.any(String),
              "ano": expect.any(String)
            },
            "IGC_continuo": {
              "valor": expect.any(String),
              "ano": expect.any(String)
            }
          }
        },
        "original_emec_url": expect.any(String)
    });
   
  });
 
  test('Utilizando um IES inexistente: 0', async () => {
    try {
      await axios.get(`${requestUrl}/0`);
      //const response = await axios.get(`${requestUrl}/572`);
    } catch (error) {
      const { response } = error;
      const { data, status } = response;

      expect(status).toEqual(404);
      expect(data).toEqual({
        "message": expect.any(String),
        "type": expect.any(String)
      })
    }
  });

});