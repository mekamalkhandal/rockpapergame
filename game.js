const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.user_result');
const cpuResult = document.querySelector('.cpu_result');
let result = document.querySelector('.result');
const optionImages = document.querySelectorAll('.option_image');
const uimg = document.querySelector('#user_img')

// console.log(gameContainer,userResult,cpuResult,result,optionImages);

optionImages.forEach((image,index) => {
    image.addEventListener('click',(e) => {
        image.classList.add('active');
        
        optionImages.forEach((image2,index2)=>{
            //if the indexs are not same then we should remove the other unmatched options
            index !== index2 && image2.classList.remove('active');
        });

        gameContainer.classList.add("START");
        let time = setTimeout(() => {
            gameContainer.classList.remove("START");
        //get the source code for the selected image
        let imageSrc = e.target.querySelector('img').src;
        //set the user image to the selected images from the options
        uimg.src = imageSrc;
        // console.log(userResult.src);
        // console.log(imageSrc)  
        //generation random number between 0 and 3
        
        const randomNumber = Math.floor(Math.random() * 3)
        // console.log(randomNumber)
        //array for cpu images

        const cpu_images = ["1688305856195.png","1688305815850.png","1688305815850.png"];
        cpu_img.src = cpu_images[randomNumber]

        const cpu_value = ['R','P','S'][randomNumber];
        const user_value = ['R','P','S'][index];
        console.log(user_value,cpu_value);

        //results

        const outComes = {
            RR:'draw',
            SS:'draw',
            PP:'draw',
            RS:'user',
            SR:'cpu',
            SP:'user',
            PS:'cpu',
            RP:'cpu',
            PR:'user'
        };
        const outComesValue = outComes[user_value + cpu_value];
        console.log(outComesValue);

        result.textContent = user_value===cpu_value ? "Match Draw" : `${outComesValue} Won`;

        },1500);
    });
});

setTimeout