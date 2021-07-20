# App Client SBF

App Client SBF é um plataforma modular que possui compartilhamento de features mobiles entre diferentes apps para segmento de varejo de esportes.

## Motivação

#### Objetivo

- Implementar uma solução proposta a partir o contexto da empresa que tive visibilidade
- Atuar como um consultor atuando no desenho de uma arquitetura mobile escalavel a partir do contexto da empresa
- Atuar como um consultor atuando no desenho de uma arquitetura mobile escalavel a partir

#### Contexto da empresa

- se tornar o maior ecossistema de esportes
- aumentar aquisições de novas empresas (fisia)

#### Solução proposta

- manter a flexibilidade de linguagens e a posibilidade de integração com aplicações nativas ou em outras linguagens como flutter
- compartilhamento de modulos encapsulados entre apps
- manter a possibilidade de aplicações com diferentes features e configuração de tema como whitelabel
- ser resiliente a multiplas dependencias para multiplos apps que possuem diferentes prioridades

## Design patterns e principios utilizados

#### SOLID

| Principio               | Aplicação do conceito                                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Responsabilidade Única  | Aplicação do conceito: cada modulo possui uma unica responsabilidade bem definida                                                     |
| Aberto-Fechado          | Você deve ser capaz de estender um comportamento de uma modulo, sem modificá-lo.                                                      |
| Substituição de Liskov  | Cada componente é substituivel por outro igual que use a mesma interface definida no provider.                                        |
| Segregação da Interface | Caso haja comportamentos unicos para um aplicação, é melhor componentes especificos que se sobescrevem do que um componente generico. |
| Inversão da dependência | Não possui acoplamento entre modulos ou dependencias externas sempre dependendo de uma abstração e não de uma implementação.          |

#### Design Patterns

| Padrão                        | Aplicação do conceito                                                                                                                                                              |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Protocol Layer Design Pattern | A comunicação entre modulos possuem uma camada intermediadora que utilizam a mesma interface de comunicação de uma forma desacoplada.                                              |
| Dependency Injection          | Não possui acoplamento entre modulos ou dependencias externas sempre dependendo de uma abstração e não de uma implementação que são sempre configuradas no contexto da pasta apps. |
| Singleton                     | Possui instancias unicas que gerenciam listeners de modais e analytics.                                                                                                            |
| Observer                      | Os modulos utilizam o connect do redux para observarem um estado global encapsulado em um contexto especifico.                                                                     |

#### Arquiteturas

| Padrão        | Aplicação do conceito                                                                                                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Monorepo      | multiplos apps que podem possuir multiplas dependencias utilizam varias features dasacoplados em comum, facilitando o atomic commit e re-uso de codigo entre apps                                                |
| Redux         | Utilizando o conceito de maquina de estado finita nos da uma interface previsivel, imutavel e debugavel                                                                                                          |
| Atomic design | Arquitetura de componentização inspirada nos conceitos de atomo(element), molecula(component), organismo(container), template(screens) e pagina(rota) utilizando design tokens para a personalização de cada app |

#### Testes

| Tipo                 | Aplicação do conceito                                                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| E2E                  | Utilizo o [cavy] para testes de caixa cinza onde utilizo as refs dos componentes para um teste semelhante ao funcional porém com um axios mockado             |
| Teste de componentes | Utilizo o RNTL para testes de componente onde a partir de props mockadas simulo a renderização do componente que deve se comportar de um modo como o esperado |
| Teste de snapshot    | As interfaces dos providers devem se manter consistentes e esse teste garante que não hajam mudanças inesperadas                                              |

## Desenho da arquitetura

| Pasta     | Resposabilidade                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------- |
| apps      | Configura a injeção de dependencia com os valores de temas, features usadas e comunicação nativa                          |
| modules   | features com dominio voltado a regra de negocio                                                                           |
| providers | gerenciam as dependencias do projeto sejam core ou modulos e possuem a interface de comunicação da aplicacao              |
| core      | features com dominio voltado a implementação de features não voltadas a regra de negocio (analytics, elements, util, api) |
| types     | possuem tipos genericos a regra de negocio ou de configuração da aplicação                                                |

## Configurando o ambiente de desenvolvimento

Siga os passos no link: https://reactnative.dev/docs/environment-setup

## Para comceçar

Instale as dependencias do projeto

```sh
yarn install
```

ou

```sh
npm install
```

Entre na pasta do app centauro

```sh
cd apps/centauro
```

E execute o comando para iniciar o metro bundler

```sh
yarn start
```

##### Caso for um build para android:

Após utilize o comando abaixo para buildar o aplicativo para Android

```sh
yarn android
```

##### Caso for um build para ios:

Utilize o comando abaixo para isntalar as dependencias do ios

```sh
cd ios & pod install & cd ..
```

Após utilize o comando abaixo para buildar o aplicativo para Ios

```sh
yarn ios
```

## Testes automatizados

#### Testes e2e (cavy)

(Os testes e2e necessitam de um emulador ativo)

Para executar os teste entre na pasta de um app

```sh
cd apps/centauro
```

Após execute o comando para ligar o metro bundler com as variaveis de ambiente apontadas pra test

```sh
yarn start:e2e
```

Após execute o comando para buildar o app

```sh
yarn android
```

Em paralelo ao build execute o comando para obter os resultados do teste e2e

```sh
yarn report:e2e
```

#### Testes de componente (RNTL)

Para executar os teste execute o comando

```sh
yarn test
```

## Lint

Para executar os teste entre na pasta de um app

```sh
cd apps/centauro
```

O lint pode ser executado pelo comando:

```sh
yarn run lint
```

## License

MIT

**Eduardo Queiroz (eduqueiroz21@gmail.com)**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[dill]: https://github.com/joemccann/dillinger
[git-repo-url]: https://github.com/joemccann/dillinger.git
[john gruber]: http://daringfireball.net
[df1]: http://daringfireball.net/projects/markdown/
[markdown-it]: https://github.com/markdown-it/markdown-it
[ace editor]: http://ace.ajax.org
[node.js]: http://nodejs.org
[twitter bootstrap]: http://twitter.github.com/bootstrap/
[jquery]: http://jquery.com
[@tjholowaychuk]: http://twitter.com/tjholowaychuk
[express]: http://expressjs.com
[angularjs]: http://angularjs.org
[gulp]: http://gulpjs.com
[pldb]: https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md
[plgh]: https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md
[plgd]: https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md
[plod]: https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md
[plme]: https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md
[plga]: https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md
