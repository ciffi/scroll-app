# ScrollApp

Creare un'applicazione Web responsive che interroghi un API e mostri i risultati (griglia o lista) paginati tramite lazy
load

Per ogni item mostrare solo il title, il body verrà mostrato al click (modale o accordion)

Come API si può utilizzare https://jsonplaceholder.typicode.com/posts

Per eseguire richieste paginate valorizzare i due parametri _start=0 e _limit=10, quindi per avere la prima pagina con
10 elementi l'endpoint diventa https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10

E' preferibile utilizzare React (hooks e context) con la libreria styled-components per costruire il layout


## Development
1. `npm i`
2. `npm start`
