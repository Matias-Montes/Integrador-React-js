import I1 from "../img/i1.png"
import F1 from "../img/f1.png"
import C3 from "../img/c3.png"
import Fi1 from "../img/fi1.png"

export const heroData = [{
    id: 1,
    name: "Ryzen 9",
    decp: "AMD Ryzen 9 5950x",
    price: "799",
    imageSrc: I1,
}, 
{
    id: 2,
    name: "MSI X570",
    decp: "Gaming Plus MPG",
    price: "250",
    imageSrc: F1,
}, 
{
    id: 3,
    name: "GeForce",
    decp: "RTX 3090 Ti NVIDIA",
    price: "900",
    imageSrc: C3,
}, 
{
    id: 4,
    name: "Kingston",
    decp: "Fury Renegade 32 GB",
    price: "340",
    imageSrc: Fi1,
},
]

export const categories = [
    {
        id: 1,
        name: 'Procesadores',
        urlParamName: 'procesadores'
    },
    {
        id: 2,
        name: 'Placas de Video',
        urlParamName: 'placasdevideo'
    },
    {
        id: 3,
        name: 'Memorias',
        urlParamName: 'memorias'
    },
    {
        id: 4,
        name: 'Mothers',
        urlParamName: 'mothers'
    },
    {
        id: 5,
        name: 'Almacenamiento',
        urlParamName: 'almacenamiento'
    },
    {
        id: 6,
        name: 'Fuentes',
        urlParamName: 'fuentes'
    },
    {
        id: 7,
        name: 'Gabinetes',
        urlParamName: 'gabinetes'
    },
    {
        id: 8,
        name: 'Otros',
        urlParamName: 'otros'
    },
]