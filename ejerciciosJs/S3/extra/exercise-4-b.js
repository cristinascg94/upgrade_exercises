const countries = [
    {title: 'Random title', 
    imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', 
    imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', 
    imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', 
    imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', 
    imgUrl: 'https://picsum.photos/300/200?random=5'}
];

 for (const country of countries) {
    
    div$$ = document.createElement('div');
    document.body.appendChild(div$$)

    title$$ = document.createElement('h4');
    title$$.textContent = country.title;
    div$$.appendChild(title$$);
    
    image$$ = document.createElement('img');
    image$$.src = country.imgUrl;
    div$$.appendChild(image$$);


 }

const borrar = () =>{
    const lastElement$$ = document.querySelector('div:last-child');
    lastElement$$.remove();
 }
 button$$ = document.querySelector('button');
 button$$.addEventListener('click', borrar);




