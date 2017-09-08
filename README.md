# CoDE - APP V3

 ![Certsys](http://www.certsys.com.br/2016/wp-content/uploads/2016/01/bannersite5.png)
 

[![Dependency Status](https://www.versioneye.com/user/projects/58dbe711d6c98d004405453f/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/58dbe711d6c98d004405453f)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

## Overview

Projeto da terceira versão do front-end do projeto CoDE, parceria da Certsys com a Veritas.
Nessa terceira versão, o projeto será remodelado para SaaS, facilitando correções, atualizações, gerenciamento e instalação.

**Para informações sobre a arquitetura do projeto, por favor, veja a [Arquitetura Técnica][architecture-doc]**.

## Começando rapidamente

Clone o repo:
```sh
git clone https://github.com/certsys/dashboard-api.git
cd dashboard-app
```

Instalar a VM:
```sh
vagrant up
```

Configuração: o front-end depende de dados presentes na API. Para usar a API dentro de um Vagrant (como descrito em seu repositório), apenas mude o comentário no arquivo config.js.
Para usar a data atual (e não a data de debug), mude o outro comentário no arquivo config.js.

Iniciar o serviço:
```sh
vagrant ssh
$vagrant@vagrant cd /dashboard-app
$vagrant@vagrant npm start
```

##### Acessar
Para acessar o sistema, basta seguir a seguinte url:
```sh
# URL
192.168.50.4:3000
```
ou, caos esteja rodando localmente:
```sh
# URL
localhost:3000
```

## Descubra Mais

| **Docs**     | **Setup**     | **Roadmap** | **Contribute** |
|-------------------------------------|-------------------------------|-----------------------------------|---------------------------------------------|
| ![][techdocs-image] | ![][setup-image] | ![][roadmap-image] | ![][contributing-image] |
| [techdocs] | [setup] | [roadmap] | [contributing] |

## Questões ou precisa de ajuda?

Veja a página de **[Fale conosco][talk-to-us]** em nosso wiki.

## Time
![Marcola PCC](https://pt.gravatar.com/userimage/111666886/73839e112b507cb7d3cf5533566ab7a1.jpg?size=178) | ![Henrique Japorongo do Gás](https://avatars3.githubusercontent.com/u/11318748?v=3&s=177) | ![Guilherme Chafy](https://lh3.googleusercontent.com/-3yzri5lyt_M/AAAAAAAAAAI/AAAAAAAAAAA/DITgzo72M-A/photo.jpg?size=178)
---|---|---
[Marcola PCC - Ninja Dev](https://github.com/hosoyamarcos) | [Henrique Japorongo do Gás](https://github.com/HenriqueHc) | [Kiki - Tchutchu Rock 'n Roll](https://github.com/guichafy)

![Stafanio](https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/000/1c9/30e/0f50eaa.jpg?size=178) | ![André Gavião](https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/066/2c7/0c4528b.jpg?size=178) | ![Luis Hansen](https://pbs.twimg.com/profile_images/2693010070/72d559264bc13fb83d121289331462be_200x200.png)
---|---|---
[Stefanio - Ninja](https://github.com/skyonamine) | [André - O Gavião](https://github.com/mogavin) | [Luis Hansen ](https://github.com/LuisHansen)


## Copyright & License

CoDE é de copyright 2017 Certsys Ltd.


[techdocs-image]: https://d3i6fms1cm1j0i.cloudfront.net/github/images/techdocs.png
[setup-image]: https://d3i6fms1cm1j0i.cloudfront.net/github/images/setup.png
[roadmap-image]: https://d3i6fms1cm1j0i.cloudfront.net/github/images/roadmap.png
[contributing-image]: https://d3i6fms1cm1j0i.cloudfront.net/github/images/contributing.png

[architecture-doc]: https://github.com/certsys/dashboard-app/wiki/Arquitetura

[techdocs]: https://github.com/certsys/dashboard-app/wiki
[setup]: https://github.com/certsys/dashboard-app/wiki/Setup
[roadmap]: https://github.com/certsys/dashboard-app/wiki/Roadmap
[contributing]: https://github.com/certsys/dashboard-app/wiki/Contribuir
[talk-to-us]: https://github.com/certsys/dashboard-app/wiki/Fale-Conosco
