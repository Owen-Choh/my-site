const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //button click active class
    sectBtn.forEach((btn)=>{
        btn.addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove('active-btn');
            this.classList.add('active-btn');
        })
    })

    //sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            /*
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            */

            //hide other sections
            sections.forEach((section)=>{
                if(section.classList.contains('active')){
                    section.classList.add('hide');

                    //wait for the hiding animation to be done
                    setTimeout(() => {
                        section.classList.remove('active');
                        const element = document.getElementById(id);
                        element.classList.remove('hide');
                        element.classList.add('active');
                    }, 700);

                    return;
                };
            })

            
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();

//my own stuff

function scriptForTimeline() {
    const timeline = [['2020','VBA in National Service.'],
        ['2022','Started this site.'],
        ['Dec 2021','Learnt how to make my first site for fun.']];
        
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