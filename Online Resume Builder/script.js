function addNewExperience()
{
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('placeholder','enter here')
    let weObj=document.getElementById("we");

    let weAddButtonObj=document.getElementById("weAddButton")
    
    weObj.insertBefore(newNode,weAddButtonObj)
}
function addNewSkills()
{
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('skillField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('placeholder','enter here')
    let weObj=document.getElementById("skill");

    let skillAddButtonObj=document.getElementById("skillAddButton")
    
    weObj.insertBefore(newNode,skillAddButtonObj)
}

function addNewQualification()
{
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('educationField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('placeholder','enter here')
    let weObj=document.getElementById("aq");

    let aqAddButtonObj=document.getElementById("AqAddButton")
    
    weObj.insertBefore(newNode,aqAddButtonObj)
}

function generateCv(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    //direct
    document.getElementById("nameT2").innerHTML=nameField;
    //contact
    document.getElementById("contactT").innerHTML=document.getElementById("phoneField").value;

    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    //email
    document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;
    // twitter

    document.getElementById("twitterT").innerHTML=document.getElementById("TwitterField").value;

    //Linkedin
    document.getElementById("linkedinT").innerHTML=document.getElementById("LinkedinField").value;

    //Github
    document.getElementById("GithubT").innerHTML=document.getElementById("GithubField").value;
    //objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    //projects
    document.getElementById("projectT").innerHTML=document.getElementById("projectsField").value;
    //we
    let wes=document.getElementsByClassName("weField")
    let str1='';
    for(let e of wes)
    {
        str1=str1+ `<li> ${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=str1;

    //skills
    let newSkills=document.getElementsByClassName("skillField")
    let str2="";
    for(let e of newSkills)
    {
        str2=str2+ `<li> ${e.value}</li>`;
    }
    document.getElementById("skillT").innerHTML=str2;
    
    
    //aq
    let aqs=document.getElementsByClassName('educationField');
    let str3="";
    for(let e of aqs)
    {
        str3=str3+ `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=str3;
    //select your profile
    let file=document.getElementById('imgField').files[0]
    let reader=new FileReader()
    reader.readAsDataURL(file);
    //set image to template
    reader.onloadend=function(){
        document.getElementById("imgT").src=reader.result;
    }
    document.getElementById("cv-form").style.display="none";
   document.getElementById("cv-template").style.display="block";
}

//print cv
function printCv()
{
    window.print();
}