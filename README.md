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
- Operador `pluck()` extraí um atributo do objeto;
- O `diagrama de marble` é o diagrama que está contido na documentação dos operators do `rxjs`, nele é possível verificar algumas bolinhas de gude e uma seta, chamada de `fluxo de dados ou stream`, a seta de cima demonstra a entrada dos dados, no meio temos o operador e na seta de baixo é a saída, ou seja, a transformação que aquele operator fez em relação a entrada de dados, a posição das bolinhas de gude na seta também é importante pois demonstra o momento, por exemplo se ele executou no mesmo momento em que a informação chegou;

## Entendendo

- Observable
  <img src="assets\img\observable-1.png" width="auto">

- Diagrama de marble
  <img src="assets\img\diagrama-marble-1.png" width="auto">
  <img src="assets\img\diagrama-marble-2.png" width="auto">
  <img src="assets\img\diagrama-marble-3.png" width="auto">

- SwitchMap e Merge
  <img src="assets\img\switchmap-e-merge-1.png" width="auto">
  <img src="assets\img\switchmap-e-merge-2.png" width="auto">

- Filter, DebounceTime e DistinctUntilChanged
  <img src="assets\img\filter-debouncetime-e-distinctuntilchanged-1.png" width="auto">
  <img src="assets\img\filter-debouncetime-e-distinctuntilchanged-2.png" width="auto">
  <img src="assets\img\filter-debouncetime-e-distinctuntilchanged-3.png" width="auto">

## Documentação

- https://rxjs-dev.firebaseapp.com/guide/overview
