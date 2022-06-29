const db = require('./db')

const storeData = (fname ,lname ,no , age ,gender)=>{
    return db.Student.findOne({fname,lname})
    .then(student=>{
        if(student){
            return{
                statusCode:400,
                status:false,
                message:"Already exist"
            }
        }
        else{
            const newStudent = new db.Student({
              fname,
              lname,
              no,
              age,
              gender
            })
            newStudent.save()
            return{
              statusCode:200,
              status:true,
              message:"Successfully added"
        }
    }
    })
}

const showData = ()=>{

    return db.Student.find()
    .then(student=>{
        if(student){
            return{
                statusCode:200,
                status:true,
                student
            }
        }
    })
}

module.exports={
    storeData,
    showData
}