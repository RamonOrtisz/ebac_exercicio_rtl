import {  fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';
import App from '../../App';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        const { debug } = render(<PostComment/>);
        debug()
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar um novo comentario', () => {
        const { debug } = render(<App />)
        fireEvent.change(screen.getByTestId('campo-tarefa'), {
        target: {
            value:'comenta olá'
        } 
        })
        fireEvent.click(screen.getByTestId('btn-cadastrar'))
        debug()
        expect(screen.getByText('comenta olá')).toBeInTheDocument()
    })
});