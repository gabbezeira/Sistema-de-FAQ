import React from 'react';

const KeyLogo = require('./assets/img/icons/Key.png');
const EmailLogo = require('./assets/img/icons/email.png');
const AlunoLogo = require('./assets/img/icons/aluno.png');

export const cards = [
    { id: '0', icon: KeyLogo, title: 'Senhas', description: 'Tudo o que você precisasaber para gerenciar, redefinir ou recuperar a suas senha.',  articles:[] },
    { id: '1', icon: EmailLogo, title: 'Email', description: 'Tudo o que você precisa saber para gerenciar, redefinir ou recuperar e acessar seu email.', articlesNumber: 4 },
    {id: '2', icon: AlunoLogo, title: 'Aluno', description: 'Tudo sobre o portal do aluno: Agenda, Diciplinas, Docs, Financeiro, Histórico, Mensagens, Mural, Perfil e Solicitação de protocolo.', articlesNumber: 3},
    {id: '2', icon: AlunoLogo, title: 'Aluno', description: 'Tudo sobre o portal do aluno: Agenda, Diciplinas, Docs, Financeiro, Histórico, Mensagens, Mural, Perfil e Solicitação de protocolo.', articlesNumber: 3}
];

