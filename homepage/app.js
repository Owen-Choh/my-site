const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const timelineBtn = document.querySelectorAll('.timeline-control')
const timelineSections = document.querySelectorAll('.timeline')

function PageTransitions(){
    //button click active class
    sectBtn.forEach((btn)=>{
        btn.addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.control.active-btn');
            currentBtn.forEach((btn)=>{
                btn.classList.remove('active-btn');
            })
            this.classList.add('active-btn');
        })
    })

    timelineBtn.forEach((btn)=>{
        btn.addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.timeline-control.active-btn');
            currentBtn.forEach((btn)=>{
                btn.classList.remove('active-btn');
            })
            this.classList.add('active-btn');
        })
    })

    //sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            let targetElement = e.target.parentNode;
            if (targetElement.id == 'controls') {
                sections.forEach((section)=>{
                    if(section.classList.contains('active')){
                        section.classList.add('hide');
    
                        //wait for the hiding animation to be done
                        setTimeout(() => {
                            section.classList.remove('active');
                            const element = document.getElementById(id);
                            element.classList.remove('hide');
                            element.classList.add('active');
                        }, 680);
    
                        return;
                    };
                })
            } else if (targetElement.id == 'timeline-controls') {
                timelineSections.forEach((section) => {
                    if (section.id == id) {
                        section.classList.add('active-timeline');
                    } else {
                        section.classList.remove('active-timeline');
                    }
                })
                return;
            } else {
                return;
            }
            //remove selected from the other btns
            /*
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active-btn')
            })
            e.target.classList.add('active-btn')
            */

            //hide other sections
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

PageTransitions();

//my own stuff

/*
//function for timeline but not needed for now
function scriptForTimeline(timeline) {
    timeline.sort(function(a,b){
        return new Date(b[0]) - new Date(a[0]);
    });
    console.log(timeline);

    timeline.forEach(function(item, index){
        // create a new div element
        let newCon = document.createElement("div");
        newCon.className = "timeline-con";
        (index%2 == 0) ? newCon.classList.add("left") : newCon.classList.add("right");
    
        let newItem = document.createElement("div");
        newItem.className = "timeline-item";
        
        // and give it some content
        let newHDiv = document.createElement("h2");
        newHDiv.innerHTML = item[0];

        let newPDiv = document.createElement("p");
        newPDiv.innerHTML = item[1];
        
        // add the text node to the newly created div
        newItem.append(newHDiv,newPDiv);
        newCon.appendChild(newItem);
    
        // add the newly created element and its content into the DOM
        let currentDiv = document.getElementsByClassName("timeline")[0];
        currentDiv.appendChild(newCon);
    })
}
*/