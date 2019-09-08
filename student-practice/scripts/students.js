const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// added an id attribute to work around the pass fail not working
// "id--" is equivalent to running a document.querySelector. 
// Here it referenced the students' scores to determine what score they made.
const createStudentComponent = (name, subject, info, id) => {
    return `
        <div class="student">

            <h1 id="id--${id}">${name}</h1>
            <section>${subject}</section>
            <aside>${info}</aside>
        </div>
    `
}
// Then store a reference to an existing HTML element
const studentContainer = document.querySelector("#container")

for (let i = 0; i < students.length; i++) {
    
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(
        student.name,
        student.subject,
        student.info,
        i
        
    )
        if (students[i].score >= 60) {
            document.querySelector(`#id--${i}`).classList.add("passing");          
        } else {
            document.querySelector(`#id--${i}`).classList.add("failing"); 
        }
}
    console.log(studentContainer);



// Update its contents with the return value of the function
// had an empty function here initially that was overwriting the "if" statement above, giving me an empty DOM