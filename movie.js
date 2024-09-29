let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
// let search_input = document.getElementById('search_input')
const search_input = document.getElementById('search_input');


left_btn.addEventListener('click', ()=>{
    cards.scrollLeft -=140
})
right_btn.addEventListener('click', ()=>{
    cards.scrollLeft +=140
})




   




const api ='https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1'
fetch(api)
.then( (Response => {
    return Response.json()
}))
.then( (data => {
    console.log( 'olo' ,data);
    document.getElementById('title').innerText = data.results[1].title;
    document.getElementById('date').innerText = data.results[1].release_date;
    document.getElementById('rate').innerText = data.results[1].vote_average;

    

    data.results.map( (ele) => {

        let {title,release_date,poster_path,rate}=ele
        let card = document.createElement('a')
        card.classList.add('card');
        let img_url = `https://image.tmdb.org/t/p/w500${poster_path}`;
        card.innerHTML =`
            <img src="${img_url}" alt="" class="poster">
                <div class="rest_card">
                    <img src="${img_url}" alt="">
                    <div class="cont">
                        <h4>${title}</h4>
                        <div class="sub">
                            <p>${release_date}</p>
                            <h3><span>IMBD</span><i class="bi bi-star-fill"></i> 9.3</h3>
                        </div>
                    </div>
                </div>`
            cards.appendChild(card)
    })
    ////////search data load
    data.results.map( (element) => {
        let {title,release_date,genre,poster_path }=element
        let card = document.createElement('a')
        let img_url = `https://image.tmdb.org/t/p/w500${poster_path}`;
        card.innerHTML =`
        <a href="#" class="card">
        <img src="${img_url}" alt="card">
                        <div class="cont">
                            <h3>${title}</h3>
                            <p> Action,${release_date} <span>IMDB</span><i class="bi bi-star"></i> 9.7</p>
                        </div>
                        </a>`
                        search.appendChild(card)
    })

    ////////////search filter
    search_input.addEventListener("keyup", ()=>{
        // console.log(search_input.value); 
        let filter = search_input.value.toUpperCase();
        
        let a = search.getElementsByTagName('a')

        for (let index = 0; index < a.length; index++) {
            let b = a[index].getElementsByClassName('cont')[0];

            let textvalue = b.textContent || b.innerText;
            if (textvalue.toUpperCase().indexOf(filter) > -1)  {
                a[index].style.display = "flex";
                search.style.visibility = 'visible';
                search.style.opacity = 1;
                
            } else {
                a[index].style.display = 'none';
            }
            if (search_input.value.length == 0) {
                search.style.visibility = 'hidden';
                search.style.opacity = 0;
            }
            
        }
    })
    //////////////////////////

    let video = document.getElementsByTagName('video')[0]
    let play= document.getElementById('play')

    play.addEventListener( 'click',() =>{
        if (video.paused) {
            video.play()
            play.innerHTML =  `<i class="bi bi-pause-fill"></i>`
        }
        else {
            video.pause() 
            play.innerHTML = `<i class="bi bi-play-fill"></i`
        }
    })
    let series = document.getElementById('series')
    let movie = document.getElementById('movie')
    let kids = document.getElementById('kids')
    let crime = document.getElementById('crime')
    let drama = document.getElementById('drama')
    let mystry = document.getElementById('mystry')
    let comedy = document.getElementById('comedy')

    series.addEventListener('click', () =>{
        cards.innerHTML = ''
        const api2 = 'https://api.themoviedb.org/3/discover/tv?api_key=04c35731a5ee918f014970082a0088b1&with_genres=10759'
        fetch(api2)
        .then( (Response => {
            return Response.json()

        }) )
        .then( (data) =>{
            console.log('this me',data);
        data.results.map( (element) => {

            let {name,first_air_date,poster_path,vote_average}=element
            let card = document.createElement('a')
            card.classList.add('card');
            let img_url = `https://image.tmdb.org/t/p/w500${poster_path}`;
            card.innerHTML =`
                <img src="${img_url}" alt="" class="poster">
                    <div class="rest_card">
                        <img src="${img_url}" alt="">
                        <div class="cont">
                            <h4>${name}</h4>
                            <div class="sub">
                                <p> ${first_air_date
                                }</p>
                                <h3><span>IMBD</span><i class="bi bi-star-fill"></i>${vote_average}</h3>
                            </div>
                        </div>
                    </div>`
                    cards.appendChild(card)
        })
    })


    })///////////////////////////


    movie.addEventListener('click', () =>{
        cards.innerHTML = ''
        const api2 = 'https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=10751'
        fetch(api2)
        .then( (Response => {
            return Response.json()

        }) )
        .then( (data) =>{
            console.log('yes',data);
        data.results.map( (element) => {

            let {title,release_date,poster_path,vote_average}=element
            let card = document.createElement('a')
            card.classList.add('card');
            let img_url = `https://image.tmdb.org/t/p/w500${poster_path}`;
            card.innerHTML =`
                <img src="${img_url}" alt="" class="poster">
                    <div class="rest_card">
                        <img src="${img_url}" alt="">
                        <div class="cont">
                            <h4>${title}</h4>
                            <div class="sub">
                                <p> ${release_date}</p>
                                <h3><span>IMBD</span><i class="bi bi-star-fill"></i>${vote_average}</h3>
                            </div>
                        </div>
                    </div>`
                    cards.appendChild(card)
        })
    })


    })///////////////////////////
   
    kids.addEventListener('click', () =>{
        cards.innerHTML = ''
        const api2 = 'https://api.themoviedb.org/3/discover/tv?api_key=04c35731a5ee918f014970082a0088b1&with_genres=10762'
        fetch(api2)
        .then( (Response => {
            return Response.json()

        }) )
        .then( (data) =>{
            console.log('this me',data);
        data.results.map( (element) => {

            let {name,first_air_date,poster_path,vote_average}=element
            let card = document.createElement('a')
            card.classList.add('card');
            let img_url = `https://image.tmdb.org/t/p/w500${poster_path}`;
            card.innerHTML =`
                <img src="${img_url}" alt="" class="poster">
                    <div class="rest_card">
                        <img src="${img_url}" alt="">
                        <div class="cont">
                            <h4>${name}</h4>
                            <div class="sub">
                                <p> ${first_air_date
                                }</p>
                                <h3><span>IMBD</span><i class="bi bi-star-fill"></i>${vote_average}</h3>
                            </div>
                        </div>
                    </div>`
                    cards.appendChild(card)
        })
    })


    })////////////////
    crime.addEventListener('click', () =>{
        cards.innerHTML = ''
        const api2 = 'https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=80'
        fetch(api2)
        .then( (Response => {
            return Response.json()

        }) )
        .then( (data) =>{
            console.log('',data);
        data.results.map( (element) => {

            let {title,release_date,poster_path,vote_average}=element
            let card = document.createElement('a')
            card.classList.add('card');
            let img_url = `https://image.tmdb.org/t/p/w500${poster_path}`;
            card.innerHTML =`
                <img src="${img_url}" alt="" class="poster">
                    <div class="rest_card">
                        <img src="${img_url}" alt="">
                        <div class="cont">
                            <h4>${title}</h4>
                            <div class="sub">
                                <p> ${release_date}</p>
                                <h3><span>IMBD</span><i class="bi bi-star-fill"></i>${vote_average}</h3>
                            </div>
                        </div>
                    </div>`
                    cards.appendChild(card)
        })
    })


    })///////////////////////////
    drama.addEventListener('click', () =>{
        cards.innerHTML = ''
        const api2 = 'https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=18'
        fetch(api2)
        .then( (Response => {
            return Response.json()

        }) )
        .then( (data) =>{
            console.log('',data);
        data.results.map( (element) => {

            let {title,release_date,poster_path,vote_average}=element
            let card = document.createElement('a')
            card.classList.add('card');
            let img_url = `https://image.tmdb.org/t/p/w500${poster_path}`;
            card.innerHTML =`
                <img src="${img_url}" alt="" class="poster">
                    <div class="rest_card">
                        <img src="${img_url}" alt="">
                        <div class="cont">
                            <h4>${title}</h4>
                            <div class="sub">
                                <p> ${release_date}</p>
                                <h3><span>IMBD</span><i class="bi bi-star-fill"></i>${vote_average}</h3>
                            </div>
                        </div>
                    </div>`
                    cards.appendChild(card)
        })
    })


    })///////////////////////////
    mystry.addEventListener('click', () =>{
        cards.innerHTML = ''
        const api2 = 'https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=9648'
        fetch(api2)
        .then( (Response => {
            return Response.json()

        }) )
        .then( (data) =>{
            console.log('gbnbnm',data);
        data.results.map( (element) => {

            let {title,release_date,poster_path,vote_average}=element
            let card = document.createElement('a')
            card.classList.add('card');
            let img_url = `https://image.tmdb.org/t/p/w500${poster_path}`;
            card.innerHTML =`
                <img src="${img_url}" alt="" class="poster">
                    <div class="rest_card">
                        <img src="${img_url}" alt="">
                        <div class="cont">
                            <h4>${title}</h4>
                            <div class="sub">
                                <p> ${release_date}</p>
                                <h3><span>IMBD</span><i class="bi bi-star-fill"></i>${vote_average}</h3>
                            </div>
                        </div>
                    </div>`
                    cards.appendChild(card)
        })
    })


    })///////////////////////////
    comedy.addEventListener('click', () =>{
        cards.innerHTML = ''
        const api2 = 'https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=37'
        fetch(api2)
        .then( (Response => {
            return Response.json()

        }) )
        .then( (data) =>{
            console.log('gbnbnm',data);
        data.results.map( (element) => {

            let {title,release_date,poster_path,vote_average}=element
            let card = document.createElement('a')
            card.classList.add('card');
            let img_url = `https://image.tmdb.org/t/p/w500${poster_path}`;
            card.innerHTML =`
                <img src="${img_url}" alt="" class="poster">
                    <div class="rest_card">
                        <img src="${img_url}" alt="">
                        <div class="cont">
                            <h4>${title}</h4>
                            <div class="sub">
                                <p> ${release_date}</p>
                                <h3><span>IMBD</span><i class="bi bi-star-fill"></i>${vote_average}</h3>
                            </div>
                        </div>
                    </div>`
                    cards.appendChild(card)
        })
    })


    })///////////////////////////


   

    
}))
 

