

fetch('https://opentdb.com/api.php?amount=20')
        .then((respuesta) =>{
        console.log(respuesta);
        return respuesta.json();
        }).then((resp) =>{
        const data = resp.results;
        printQuestion(data);
        // selectCategory(data);
        // document.getElementById('question').textContent = resp.results[0].question;
        })
        .catch(err => console.error(err))

        // const selectCategory= (data) =>{
        //   const select = document.getElementById('inputGroupSelect01');
        //   let str = "";
        //       data.forEach(element => {
        //         str +=
        //         `<option value="${element.category}">${element.category}</option>`
          
        //       });
        //       select.insertAdjacentHTML('beforeend',str);
              
        // }
        

        const printQuestion= (data) =>{
          const containerQuestion = document.getElementById('questions');
          console.log(data);
          const template = `<form class="form-group">
              <p id="question"><h3><strong>${data[0].question}</strong></h3></p>
                <input type= "radio" id="res1" class="ml-2" value="${data[0].correct_answer}"/><label for="res1">${data[0].correct_answer}</label>
                <input type= "radio" id="res2" class="ml-2" value="${data[0].incorrect_answers[0]}"/><label for="res2">${data[0].incorrect_answers[0]}</label>
                <input type= "radio" id="res3" class="ml-2" value="${data[0].incorrect_answers[1]}"/><label for="res3">${data[0].incorrect_answers[1]}</label><br>
            
                <button id="button-send" type="button" class="btn btn-warning mt-5">Reply</button>
          </form>`
        containerQuestion.innerHTML=template;
        // if()
        }      


document.getElementById('start').addEventListener('click',()=>{
  document.getElementById('home').style.display = "none";
  document.getElementById('section-home').style.display = "block";
})










// .then(resp => resp.json())
// .then((respuesta) =>{
//   console.log(respuesta)
//   document.getElementById('question').textContent = respuesta.results.question;
// })
// .catch(err => console.error(err))
// const buttonSend = document.getElementById("button-send");
// buttonSend.addEventListener("click", correct)
// const inputsAnswer= Array.from(document.getElementsByClassName("datos"));

// function correct(){
//   let score=0;
//   for(let i=0; i < inputsAnswer.length; i++){
//     if(inputsAnswer[i].checked){
//       let respCorrect=inputsAnswer[i].value;
//         if(respCorrect === "Roy Orbison"){
//           alert("respuesta1 correcta muy bien")
//           score ++;}
//         else if(respCorrect === "Revolver"){
//           alert("respuesta2 correcta muy bien")
//           score ++;}
//         else if(respCorrect === "Pyotr"){
//           alert("respuesta3 correcta muy bien")
//           score ++;}
//         else if(respCorrect === "Titanic"){
//           alert("respuesta1 correcta muy bien")
//           score ++;}
//         else if(respCorrect === "Lo que el viente se llevo"){
//           alert("respuesta2 correcta muy bien")
//           score ++;}
//         else if(respCorrect === "Sean Connery"){
//           alert("respuesta3 correcta muy bien")
//           score ++;}
//         else{
//       }
//     }

//   }
//   alert("obtuviste "+ score + " puntos")
// }
// function changeSection(id){ //id recibe el id de la seccion a cambiar:
//  console.log(id)
// // crea hoja de estilo para la seccion correspondiente
//     respCorrect.createElement('style') //crea el elemneto estilo en una variable
//     respCorrect.innerHTML = "section {background-color:yellow;}";
//   // respcorrect.innerHTML =
//     document.body.appendChild(sheet);
// //    }
// }
