const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data =  await response.json();
    return data;
}

// Callback Hell con función asíncrona
const anotherFunction = async (urlApi) => {

    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        //console.log(products);
        console.log('title :',product.title);
        console.log('Category :',category.name);

    } catch (error) {
    console.error(error);
    }
}

anotherFunction(API);

