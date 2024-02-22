const loadALLData = () => {
    
    fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};
const loadMusicData = () => {
    

    fetch(`https://openapi.programming-hero.com/api/videos/category/1001`)
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};
const loadComedyData = () => {
    
    fetch(`https://openapi.programming-hero.com/api/videos/category/1003`)
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};
const loadDrawingData = () => {
    
    fetch(`https://openapi.programming-hero.com/api/videos/category/1005`)
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};

const displayData = (data) => {
    console.log(data.length);



    const containers = document.getElementsByClassName("video_container");


    for (let container of containers) {
        container.innerHTML = '';
    }

    if(data.length==0) {
        var image = document.createElement("div");
        image.innerHTML=
        `
        <img src="/Icon.png" alt="">
        <h1>
        Oops!! Sorry, There is no content here
        </h1>
        `;
        container.appendChild(image);

    }

    else
    {
        for(let i = 0; i < data.length; i++){
            const videoData = data[i];
            
            const video = document.createElement("div");
            video.classList.add("video");
            

            console.log();

            video.innerHTML = `
                <img src="${videoData.thumbnail}" class="card-img" alt="">
                <div class="card-body">
                    <div class="L">
                        <img src="${videoData.authors[0].profile_picture}" class="c-img" alt="">
                        
                    </div>
                    <div class="R">
                        <p class="thumb">${videoData.title}</p>
                        <p class="name">${videoData.authors[0].profile_name}</p>
                        <p class="views">${videoData.others.views} views</p>
                    </div>
                </div>
            `;

            container.appendChild(video);
        }
    }

    
    
    

};
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});






loadALLData();


