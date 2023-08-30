let btn =document.getElementById('btn')
let input = document.getElementById('location')
let temp = document.getElementById('temp')
let loc = document.getElementById('value')
let des = document.getElementById('description')

// api key
let apiKey = 'e11f4384118a43be349a4584f3fe6bdf'
// console.log('hi')

btn.onclick = function(){

    if(input.value ==''){
        alert('please give some location')
    }else{

        var inp = input.value

        // let url =  `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}` 


        let url1 = `https://api.openweatherma.org/data/2.5/weather?q=${inp}&appid=${apiKey}`

        fetch(url1).then(res=>res.json()).then(data =>{
            console.log(data)

            const{feels_like} = data.main
            const{name} = data
            const{description} = data.weather[0]


            console.log(feels_like,name,description)                        

            temp.innerHTML = Math.round(feels_like-272)
            des.innerHTML = description
            loc.innerHTML = name    



        }  ).catch(error => console.log(error))



    }
}