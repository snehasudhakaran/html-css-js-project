
            let student={
                firstName :"",
                lastName : "",
                age : "",
                course : "",
            }

            let studentsDetails=JSON.parse(localStorage.getItem("students Details")) || [];

            function add(){
                
                student = new Object;
                student.firstName=document.getElementById("firstName").value;
                student.lastName=document.getElementById("lastName").value;
                student.age=document.getElementById("age").value;
                student.course=document.getElementById("course").value;
                
                studentsDetails.push(student)

                

                console.log(student)
                console.log(studentsDetails)
                localStorage.setItem("students Details",JSON.stringify(studentsDetails))
                reset()
            }

            function reset(){
                document.getElementById("firstName").value=null;
                document.getElementById("lastName").value=null;
                document.getElementById("age").value=null;
                document.getElementById("course").value="-- select --";
            }

        // let submit = document.querySelector("#submit")
        // submit.addEventListener("click",function(){
               

            studentsDetails =JSON.parse(localStorage.getItem("students Details"))
            if (studentsDetails){
            let text="";
            let textRender="";
            console.log(studentsDetails)
            console.log(studentsDetails.firstName)
                for (i of studentsDetails){
                    text=`<tr>
                        <td>${i.firstName}</td>
                        <td>${i.lastName}</td>
                        <td>${i.age}</td>
                        <td>${i.course}</td>
                        <td><button id="btn1" type="button">Edit</button></td>
                        <td><button id="btn2" type="button">Delete</button></td>
                    </tr>`
                    textRender+=text;

                    document.getElementById("table").innerHTML=
                    `<tr>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Age </th>
                        <th> Course </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>`+textRender;
                }
            }


        // });
            