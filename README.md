<h1 align="center" width="100%" height="300px" background="#000">
    <img 
    alt="Backend Node" 
    title="Backend Node" 
    src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png" 
    width="120px" />
</h1>

<p align="center">
  <a href="#-tecnologia">Tecnologia</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-comandos">Comandos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=ce" alt="PRs welcome!" />

 <img src="https://img.shields.io/static/v1?label=JS&message=TypeScript&color=007acc&labelColor=ce" alt="TypeScript!" />

 <a href="https://github.com/AdriandersonLira">
    <img alt="Made by Adrianderson Lira" src="https://img.shields.io/badge/made%20by-Adrianderson-%2304D361">
  </a>
</p>

<br>

## 🚀 Tecnologia

Projeto desenvolvido com a stack [TypeScript](https://www.typescriptlang.org/docs/home.html).

## 💻 Projeto

Nesse projeto contém os primeiros conceitos do TypeScript. Tem a intenção de trazer um formato da escrita da linguagem javascript mais moderna. Além disso adiciona a parte de tipagem das variáveis que o javascript não tem.

### Tipos

#### Básico

Os 3 tipos básicos mais conhecidos são:

- **boolean:** valores `true` ou `false`;

- **number:** valores numéricos;

- **string:** valores textuais;

Além dessas, existem outras tipagens básicas que não muito convencionais:

- **any:** aceita qualquer valor. Utilizado quando não queremos fazer a checagem do tipo;

- **void:** é basicamente o oposto de `any`, utilizado principalmente para demarcar quando não queremos retornar valores de uma função (mesmo assim, ao utilizar `void` a função irá retornar `undefined`, explicitamente ou implicitamente);

- **null:** aceita valores do tipo `null`**;**

- **undefined:** aceita valores do tipo `undefined`**;**

- **never:** não aceita nenhum tipo, utilizada principalmente para funções que **nunca** devem retornar algo (funções sem retorno retornam `undefined`, por isso usamos `void`) como loops infinitos ou excessões.


## 👨🏻‍💻 Comandos

```console
$ yarn init -y
```
```console
$ yarn add typescript -D
```
```console
$ yarn add express
```
```console
$ yarn add -D @types/express
```
> Gera o arquivo tsconfig.json
```console
$ yarn tsc --init
```
> Inicializa a conversão para js
```console
$ yarn tsc
```
```console
$ node src/index.js
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

---

Feito com ♥ by Adrianderson Lira 
