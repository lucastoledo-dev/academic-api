import { getIESDetail } from '../../../../../services/emec';

async function detail(request, response){
  response.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  
  const { ies } = request.query
  const { iesDetail, url } = await getIESDetail(ies);
  
  if (!iesDetail) {
    response.status(404);
    response.json({
      message: 'IES Não encontrada',
      type: 'IES_CODE_NOT_FOUND',
    });
      return;
  }

  response.json({body: iesDetail, original_emec_url: url});
}

export default detail;