const subjects =[
    "Artes",
    "Ciências",
    "Biologia",
    "Física",
    "Educação física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays =[
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//FUNCIONALIDADES DA APLICAÇÃO
/*Localizando os arquivos e enviando a rota para o servidor*/
 
function getSubject(subjectNumber) /*esta recebendo o numero da materia */
{
    const position = +subjectNumber - 1 /*se o valor for 1 ele retira -1 */
    return subjects[position]
}

function convertHoursToMinutes(time)
{
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}