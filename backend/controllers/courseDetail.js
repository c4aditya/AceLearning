// its use the coursedetail modle or schema

const courseDetails =require("../model/courseDetails")

// data base intersction 

async function createcourseDetails(req ,res){
    try{
      // destructreig 
      const { fullName, fatherName, email, mobileno, altno, dateTime, gender, qualification, aadhaarNo, course, houseNo, city, locality, state, pincode, District } = req.body;

      const responce  = await courseDetails.create({ fullName, fatherName, email, mobileno, altno, dateTime, gender, qualification, aadhaarNo, course, houseNo, city, locality, state, pincode, District });

      res.status(200).json({
        sucess:true,
        data:responce,
        message:"The Entery is created on Data base"
      })
     }

    catch(error){

        res.status(500).json({
            sucess:false,
            message:"There is some error occur while send the data into the data base",
            error:error.message
        })

    }
}

module.exports= createcourseDetails;