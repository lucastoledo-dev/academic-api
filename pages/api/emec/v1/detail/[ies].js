import { getIESDetail } from '../../../../../services/emec';

async function detail(request, response){
  response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
  
  const { ies } = request.query
  const { iesDetail, url } = await getIESDetail(ies);
  
  response.json({body: iesDetail, original_emec_url: url});
}

export default detail;