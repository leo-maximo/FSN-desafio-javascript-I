// Base a ser utilizada
const alunosDaEscola=[
    {nome:"Henrique",notas:[],cursos:[],faltas:5},
    {nome:"Edson",notas:[],cursos:[],faltas:2},
    {nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
    {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
    {nome:"Carlos",notas:[],cursos:[],faltas:0},
    {nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}
];


// implementação

/*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
  E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
  A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/

function adicionarAluno(nome){
  if (nome = nome) {
       alunosDaEscola.push ({nome:nome , notas:[] , curso:[], faltas:[]});
       return ( `Aluno registrado com sucesso!!!`)

  }
return alunosDaEscola;

}

 /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
  Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
  
function listarAlunos(){
    for (let mostrar of alunosDaEscola){
        console.log (`Aluno ${mostrar.nome}`);
    
    }  
}

/* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, 
tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno.*/
function buscarAluno(nome) {
    let encontrados = [];
        encontrados = alunosDaEscola.filter(alunos => {
        return alunos.nome.indexOf(nome) > -1;
       
   })
        if (encontrados.length == 0){
       console.log ("Aluno não foi encontrado!")
       
   }    else {
       console.log ("Aluno encontrado!")
       console.log (encontrados);
   }
    return encontrados;
}

//console.log ( buscarAluno("Henrique"));


/* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
  Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
  Lembre-se de exibir o feedback para o usuário. */

function matricularAluno(aluno, curso){
    var data = new Date();   // Obtém a data/hora atual
    curso = {nomeDoCurso:curso + "" + data};
        let  encontrados = alunosDaEscola.filter(alunos => {
            return alunos.nome.indexOf(aluno) > -1;
        });
        if (encontrados.length >0){
            encontrados.filter (achado =>{
                if (achado.nome ==aluno){
                    achado.cursos.push (curso);
                    console.log (`Aluno ${aluno} matriculado com sucesso!`);
                }else {
                    console.log (`Aluno não encontrado.`)
                } 
            });
                      
        } 
        return alunosDaEscola;
    }  
                     

//console.log (matricularAluno("Henrique", "Administração" ));


/*Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. 
Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.*/

function aplicarFalta(aluno){
    let  encontrados = alunosDaEscola.filter(alunos => {
            return alunos.nome.indexOf(aluno) > -1;
    });
    if (encontrados.length >0){
        encontrados.filter (achado =>{
            if (achado.nome ==aluno){
                achado.faltas +=1;
                console.log (`Falta aplicada com sucesso`);
            }else {
                    console.log (`Aluno ${aluno} não encontrado`);
            }
        });      
    }
        return alunosDaEscola;
 }

   //console.log (aplicarFalta("Henrique"));

/*
Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. 
Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
*/
function aplicarNota(aluno, nota){
    let  encontrados = alunosDaEscola.filter(alunos => {
        return alunos.nome.indexOf(aluno) > -1;
});
        if (encontrados.length >0){
                encontrados.filter (achado =>{
             if (achado.nome ==aluno){
                achado.notas.push (nota);
                console.log (`Nota aplicada com sucesso`);
        }else {
                 console.log (`Aluno ${aluno} não encontrado`);
            }
        });
    }

} 
   
/* 
Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. 
Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
*/
function aprovarAluno(aluno){
const reducer = (acumulador, elemento) => acumulador + elemento/5;
let  encontrados = alunosDaEscola.filter(alunos => {
    return alunos.nome.indexOf(aluno) > -1;
});
    if (encontrados.length >0){
            encontrados.filter (achado =>{
        if (achado.nome === aluno && achado.cursos.length >0){
             if (achado.faltas <=3 && achado.notas.reduce(reducer)>=7){
                console.log(`O aluno ${aluno} foi aprovado!!! `);
            }else {
                console.log (`O aluno ${aluno} foi reprovado!!!`);
                 }

            }
        })
    }else {
        console.log (`Aluno ${aluno} não encontrado`);
   }
    return " ";
}
//console.log (aprovarAluno("Lucca"));
//console.log (aprovarAluno("Desconhecido")):
   
    