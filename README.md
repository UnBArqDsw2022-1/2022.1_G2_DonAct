
O presente repositório tem como objetivo o auxílio e registro do processo de desenvolvimento e resultados obtidos no projeto do grupo 2 da disciplina de Arquitetura e Desenho de Software da Universidade de Brasília ministrada pela professora Milene Serrano no semestre de 2022.1.

# Donact

**Código da Disciplina**: FGA0208<br>
**Número do Grupo**: 02<br>

## Alunos
| Matrícula  | Aluno                                    | Github                                                |
| ---------- | ---------------------------------------- | ----------------------------------------------------- |
| 19/0044799 | Antonio Ferreira de Castro Neto          | [antoniotoineto](https://github.com/antoniotoineto)   |
| 18/0099353 | Cibele Freitas Goudinho                  | [CibeleG](https://github.com/CibeleG)                 |
| 18/0119818 | Felipe Boccardi Silva Agustini           | [fealps](https://github.com/fealps)                   |
| 18/0122606 | Isadora da Cruz Galvão dos Santos Soares | [isadoragalvaoss](https://github.com/isadoragalvaoss) |
| 18/0103792 | Julia Farias Sousa                       | [julisous](https://github.com/julisous)               |
| 19/0033681 | Luiz Henrique Fernandes Zamprogno        | [luiz-herique](https://github.com/luiz-herique)       |
| 18/0130889 | Sávio Cunha de Carvalho                  | [savioc2](https://github.com/savioc2)                 |
| 19/0020601 | Victor Buendia Cruz de Alvim             | [Victor-Buendia](https://github.com/Victor-Buendia)   |
| 19/0038926 | Victor Eduardo Araújo Ribeiro            | [victorear05](https://github.com/victorear05)         |
| 18/0145363 | Yan Andrade de Sena                      | [yandrade1305](https://github.com/yandrade1305)       |

## Sobre 
O projeto Donact será uma aplicação Web com o objetivo de facilitar o processo de doação de vários itens para pessoas carentes, para isso será feita a ligação dos doadores de certo tipo de item com as ONG's que precisam daquele item. Para isso será necessário a realização do cadastro por parte tanto do doador quanto das ONG's.

## Screenshots Primeira Entrega <<FOCO: DSW(Base)>>

### Rich Picture versão final

![Rich Picture - Versão Final](/docs/imgs/rich-picture-final.png)

### Protótipo Alta Fidelidade

![Protótipo Alta Fidelidade HomePage](/docs/imgs/Home-prototipo.jpg)

![Protótipo Alta Fidelidade Página de doador](/docs/imgs/prototipo-pgDoador.jpg)

![Protótipo Alta Fidelidade Página de ONG](/docs/imgs/prototipo-pgONG.jpg)

### BPMN

### Cadastro

![BPMN - Cadastro](/docs/imgs/BPMN-Cadastro.jpg)

### Interação usuário

![BPMN - Interação usuário](/docs/imgs/BPMN-Intera%C3%A7%C3%A3o-usuario.jpg)

### Itens - Visão geral

![BPMN - Visão geral](/docs/imgs/BPMN-itens.jpg)

### Sub processo reutilizável: Verificar Sucesso
 
![BPMN - Sub processo reutilizável: Verificar Sucesso](/docs/imgs/BPMN-SverificaSucesso.jpg)

## Screenshots Segunda Entrega <<FOCO: DSW(Modelagem)>>
### Diagrama de Classes
![Diagrama de Classes](/docs/imgs/DonAct%20-%20Diagrama%20de%20Classes.png)

### Diagrama de Estados
![Diagrama de estados cadastro](/docs/imgs/cadastro.jpg)

### Diagrama de Sequência
![Diagrama de sequencia - fluxo de cadastro de usuário](/docs/imgs/DS_cadastro.png)

OBS: Não especificaram no prazo (15Julho22) - Profa. Milene

## Screenshots Terceira Entrega <<FOCO: DSW(Padrões de Projeto)>>
Adicione 2 ou mais screenshots do projeto em termos de artefatos da Terceira Entrega.

## Screenshots Quarta Entrega (FINAL) <<FOCOS: Arquitetura & Reutilização de Software & PROJETO FINAL>>
Adicione 2 ou mais screenshots do projeto em termos de interface e/ou funcionamento.

## Descritivo dos Principais Aspectos Técnicos 
**Principal(is) Metodologia(s) Adotada(s)**: Scrum, Método Kanban e XP<br>
**Principais Linguagens Utilizadas e/ou Pretendidas**: xxxxxx<br>
**Principais Tecnologias Utilizadas e/ou Pretendidas**: Front-end em React.Js, Back-end em Express.js, Banco de Dados em MySQL e com uso de Docker<br>
**Principal(is) Estilo(s) Arquitetural(is) Adotado(s)**: xxxxxx<br>

## O Projeto está rodando?
(X) SIM  
( ) NÃO  

## 🚀 Começando
### 📋 Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

[Node.js](https://nodejs.org/en/)

[VSCode](https://code.visualstudio.com/)


## Comandos

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <hhttps://github.com/UnBArqDsw2022-1/2022.1_G2_DonAct.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd desenvolvimento

# Vá para a pasta DonAct-API
$ cd DonAct-API

# Vá para a pasta src
$ cd src

# Crie o .env
$ Crie um arquivo com o nome ".env" e o preencha com as variáveis de ambiente
Obs.: Solicitar variáveis à equipe

# Volte para a pasta anterior
$ cd ..

# Execute:
$ yarn add nodemon

# Dê o build e suba o docker
$ cd docker-compose up --build
```

### ✨ Rodando o Front End

```bash
# Clone este repositório
$ git clone <hhttps://github.com/UnBArqDsw2022-1/2022.1_G2_DonAct.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd desenvolvimento

# Vá para a pasta DonAct-API
$ cd DonAct-Front

# Rode o docker
$ cd docker-compose up --build
```
