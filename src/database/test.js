const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db)=>
{
    //Inserir dados
    proffyValue = 
    {
        name:"Natacha Souza", 
        avatar:"https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/12003139_755696514534831_3148105530412162471_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=YGh-gtF1D2QAX9StKh1&_nc_ht=scontent-gru1-1.xx&oh=f30b74f8de7ef0c7c9c41699b4dca736&oe=5F5A54F8",
        whatsapp:"(18) 99999999",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        
    }

    classValue =
    {
        subject:1,
        cost:"20,00",
        //o proffy id vira pelo banco de dados
    }

    classScheduleValues = [   //class_id vira pelo banco de dados após cadastrarmos a class
        {
            weekday:1, 
            time_from: 720, 
            time_to: 1220
        },

        {
            weekday:0, 
            time_from: 520, 
            time_to: 1220
        } 
    ]

   //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar os dados inseridos
    
    
    /*todos os proffys*/
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`

        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)


    /*o Horario que a pessoa trabalha, por exemplo é das 8h - 18h 
      o horario do time_from (8h) precisa ser menor ou igual ao horario solicitado
      o time_to precisar acima */

    const selectClassesSchedules = await db.all(`

        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
        
    `)
    console.log(selectClassesSchedules)

})