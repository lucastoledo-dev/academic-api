import { getAll } from '../../../../../services/emec';

async function detail(request, response){
  response.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  
  const { ies } = request.query
  const {result} = await getAll(ies);
  
  if (!result) {
    response.status(404);
    response.json({
      message: 'IES Não encontrada',
      type: 'IES_CODE_NOT_FOUND',
    });
      return;
  }

  response.json({body: result});
}

export default detail;



