import { getIESDetail } from '../../../../../services/emec';

async function detail(request, response){
  const fs = require('fs');

  for(let i=1081;i<=6000;i++){
    const { iesDetail, url } = await getIESDetail(i+"");
    if (iesDetail) {
      let data = JSON.stringify(iesDetail);
      fs.writeFileSync('ies/student-'+i+'.json', data);
    }
  } 

  response.json({status: "ok"});
} 

export default detail;