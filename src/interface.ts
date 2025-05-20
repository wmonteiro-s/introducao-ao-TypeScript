interface Usuario {
    id: number
    name: string
    email: string
    age?: number 
}

function criarUsuario(usuario: Usuario): void {
    console.log(`Usuário ${usuario.name} criado!`)
}

criarUsuario({
    id: 1,
    email: 'wesley@gmail.com',
    name: 'Wesley',
    age: 20
})

