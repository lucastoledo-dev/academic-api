[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=LucasSToledo_academic-api&metric=bugs)](https://sonarcloud.io/dashboard?id=LucasSToledo_academic-api)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=LucasSToledo_academic-api&metric=code_smells)](https://sonarcloud.io/dashboard?id=LucasSToledo_academic-api)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=LucasSToledo_academic-api&metric=coverage)](https://sonarcloud.io/dashboard?id=LucasSToledo_academic-api)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=LucasSToledo_academic-api&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=LucasSToledo_academic-api)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=LucasSToledo_academic-api&metric=ncloc)](https://sonarcloud.io/dashboard?id=LucasSToledo_academic-api)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=LucasSToledo_academic-api&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=LucasSToledo_academic-api)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LucasSToledo_academic-api&metric=alert_status)](https://sonarcloud.io/dashboard?id=LucasSToledo_academic-api)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=LucasSToledo_academic-api&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=LucasSToledo_academic-api)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=LucasSToledo_academic-api&metric=security_rating)](https://sonarcloud.io/dashboard?id=LucasSToledo_academic-api)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=LucasSToledo_academic-api&metric=sqale_index)](https://sonarcloud.io/dashboard?id=LucasSToledo_academic-api)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=LucasSToledo_academic-api&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=LucasSToledo_academic-api)

## Motivo
Acesso program??tico de informa????es ?? algo fundamental na comunica????o entre sistemas mas, para minha surpresa, a grande parte das informa????es referentes ?? pesquisas no Brasil ainda se encontra de maneira muito fragmentada, sem padr??o e de dif??cil acesso.

A API se prop??e a facilitar o acesso ??s informa????es que est??o centralizadas em alguns indexadores, entre eles:

[EMEC](https://emec.mec.gov.br/) 
[CNPQ](https://www.gov.br/cnpq/pt-br) * Futuramente
[BDTD](https://bdtd.ibict.br/vufind/) * Futuramente
(Outros indexadores poder??o ser adicionados posteriomente.)


Dado a isso, este projeto experimental tem como objetivo centralizar e disponibilizar endpoints modernos com baix??ssima lat??ncia utilizando tecnologias como [Vercel](https://academic-api.vercel.app/) respons??vel por fazer o cache das informa????es em atualmente 23 regi??es distribu??das ao longo do mundo (incluindo Brasil). Ent??o n??o importa o qu??o devagar for a fonte dos dados, n??s queremos disponibiliz??-la da forma mais r??pida e moderna poss??vel.

### Documenta????o

Exemplo de uso para consulta detalhada de uma  **Institui????o de Ensino Superior (IES)** 
```sh
/api/emec/v1/detail/{IES_CODE}
```

## Como contribuir
Caso voc?? esteja lendo esta vers??o de README, voc?? est?? pegando o projeto num est??gio extremamente inicial, por??m empolgante, pois h?? v??rias coisas a serem definidas. Ent??o caso queira contribuir, utilize as issues para entender quais pontos ainda n??o foram resolvidos, conversar conosco e contribuir tanto com id??ias t??cnicas, quanto de quais APIs podem ser criadas.

