# 📋 To-Do List

## ⚠️ Projeto acadêmico usado para implantação na AWS

Este projeto foi desenvolvido com **fins acadêmicos**, com o objetivo de realizar a implantação de uma aplicação web moderna na nuvem, utilizando os serviços da **Amazon Web Services (AWS)**.

https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white

A arquitetura contempla a separação entre **frontend** e **backend**, com uso de tecnologias atuais como **React (Vite)**, **Node.js (Express)** e **MongoDB**, em um ambiente real configurado com **VPC, sub-redes públicas e instâncias EC2**.

## ☁️ Arquitetura da Solução

A aplicação está hospedada em uma **VPC (Virtual Private Cloud)** personalizada, com as seguintes características técnicas:

- 🌐 **Duas sub-redes públicas**, permitindo a comunicação entre os componentes via IP público.
- 🧱 **Divisão em camadas**: o frontend e o backend são executados em **instâncias EC2 distintas**.
- 🔒 **Segurança na comunicação**: apenas o **frontend é acessível globalmente** (HTTP/S), enquanto o **backend aceita conexões apenas do frontend**, controladas por regras de **Security Groups**.
- 🗄️ **Banco de dados MongoDB** integrado ao backend para persistência de dados.

## 🖥️ Componentes da Aplicação

- 🖼️ **Frontend**  
  Desenvolvido com **React + Vite**  
  Implantado em uma instância EC2 pública  
  Responsável pela interface com o usuário.

- ⚙️ **Backend**  
  Desenvolvido com **Node.js + Express**  
  Implantado em uma instância EC2 pública (com acesso restrito via SG)  
  Fornece APIs REST para o frontend.

- 🗃️ **Banco de Dados (MongoDB)**  
  Utilizado pelo backend para persistência de dados da aplicação.

## 🎯 Objetivos do Projeto

- Realizar uma **implantação real e funcional** na AWS, com infraestrutura configurada do zero.
- Construir uma **infraestrutura escalável e segura**, aplicando boas práticas de arquitetura em nuvem.
- Separar responsabilidades entre as camadas da aplicação.
- Controlar o tráfego entre frontend e backend com regras específicas de rede.

---

> 🔎 Este projeto acadêmico representa uma experiência prática de implantação de aplicações em nuvem, aproximando o estudante de contextos reais do mercado de trabalho.

