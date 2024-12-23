import nasgor from './assets/nasgor.png';
import esTeh from './assets/esteh.png';
import alpukat from './assets/alpukat.png';
import sate from './assets/sate.png';
import kopi from './assets/kopi.png';
import rendang from './assets/rendang.png';
import jeruk from './assets/jeruk.png';
import bakso from './assets/bakso.png';
import tehTarik from './assets/tehTarik.png';

const Products = [
    {
        id: 1,
        name: "Nasi Goreng",
        description: "Nasi goreng adalah makanan khas Indonesia yang terbuat dari nasi yang digoreng dengan bumbu dan bahan-bahan lainnya.",
        type: "MAKANAN",
        Image: nasgor,
        price: "Rp 25.000"
    },
    {
        id: 2,
        name: "Es Teh",
        description: "Es teh adalah minuman yang terbuat dari teh yang dilarutkan dalam air dan disajikan dingin.",
        type: "MINUMAN",
        Image: esTeh,
        price: "Rp 5.000"
    },
    {
        id: 3,
        name: "Ayam Bakar",
        description: "Ayam bakar adalah hidangan ayam yang dipanggang dengan bumbu khas dan cita rasa yang lezat.",
        type: "MAKANAN",
        Image: "https://png.pngtree.com/png-vector/20240827/ourmid/pngtree-chicken-dish-ayam-bakar-png-image_13641015.png",
        price: "Rp 30.000"
    },
    {
        id: 4,
        name: "Jus Alpukat",
        description: "Jus alpukat adalah minuman yang dibuat dari buah alpukat segar, susu, dan gula.",
        type: "MINUMAN",
        Image: alpukat,
        price: "Rp 15.000"
    },
    {
        id: 5,
        name: "Sate Ayam",
        description: "Sate ayam adalah potongan daging ayam yang ditusuk dan dibakar, biasanya disajikan dengan saus kacang.",
        type: "MAKANAN",
        Image: sate,
        price: "Rp 30.000"
    },
    {
        id: 6,
        name: "Kopi Hitam",
        description: "Kopi hitam adalah minuman yang terbuat dari biji kopi yang diseduh tanpa tambahan gula atau susu.",
        type: "MINUMAN",
        Image: kopi,
        price: "Rp 10.000"
    },
    {
        id: 7,
        name: "Rendang",
        description: "Rendang adalah hidangan daging khas Indonesia yang dimasak dengan santan dan rempah-rempah hingga kering.",
        type: "MAKANAN",
        Image: rendang,
        price: "Rp 35.000"
    },
    {
        id: 8,
        name: "Es Jeruk",
        description: "Es jeruk adalah minuman segar yang terbuat dari perasan jeruk dan es batu.",
        type: "MINUMAN",
        Image: jeruk,
        price: "Rp 8.000"
    },
    {
        id: 9,
        name: "Bakso",
        description: "Bakso adalah bola daging yang disajikan dengan kuah kaldu hangat dan mi.",
        type: "MAKANAN",
        Image: bakso,
        price: "Rp 20.000"
    },
    {
        id: 10,
        name: "Teh Tarik",
        description: "Teh tarik adalah minuman teh khas yang dicampur dengan susu dan dibuat dengan teknik menarik.",
        type: "MINUMAN",
        Image: tehTarik,
        price: "Rp 12.000"
    }
];

export default Products;