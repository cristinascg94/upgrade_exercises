const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
let cat = new Set();
for (elements of movies){
    for (cat_1 of elements.categories){
        cat.add(cat_1);
    }
}
let arrayCat = Array.from(cat);
console.log(arrayCat);