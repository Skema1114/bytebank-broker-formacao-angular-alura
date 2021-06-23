# BytebankBrokerFormacaoAngularAlura

## Neste projeto:

- Curso:

  - Angular e RxJS: Programação reativa
  - https://cursos.alura.com.br/course/angular-rxjs-introducao-programacao-reativa

## Comandos utilizados

- ng g i acoes/modelo/acoes
- ng g s acoes/acoes

## Anotações

- Com o `tap()` é possível executar alguma coisa, tipo um `console.log` para verificar alguma coisa daquele objeto;
- O perador `pluck()` extraí um atributo do objeto;
- O `diagrama de marble` é o diagrama que está contido na documentação dos operators do `rxjs`, nele é possível verifica algumas bolinhas de gude e uma seta, chamada de `fluxo de dados ou stream`, a seta de cima demonstra a entrada dos dados, no meio temos o operador e na seta de baixo é a saída, ou seja, a transoformação que aquele operator fez em relação a entrada de dados, a posição das bolinhas de gude na seta também é importante pois demonstra o momento, por exemplo se ele executou no mesmo momento em que a informação chegou;

## Entendendo

- Observable
  | TIPO | VALOR ÚNICO | COLEÇÃO DE VALORES |
  |------------|-------------|--------------------|
  | Imperativo | Função | Iterator |
  | Reativo | Promise | Observable |
