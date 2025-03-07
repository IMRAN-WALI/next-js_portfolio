// images
import blogImg1 from "/public/images/blog/designer1.jpg";
import blogImg2 from "/public/images/blog/developer1.jpg";
import blogImg3 from "/public/images/blog/fashion.jpg";
import blogImg4 from "/public/images/blog/fashion4.jpg";
import blogImg5 from "/public/images/blog/developer3.jpg";
import blogImg6 from "/public/images/blog/fashion5.jpg";

import blogSingleImg1 from "/public/images/blog-details/graphics.jpg";
import blogSingleImg2 from "/public/images/blog-details/developerpic.jpg";
import blogSingleImg3 from "/public/images/blog-details/fashion1.jpg";
import blogSingleImg4 from "/public/images/blog-details/fashion2.jpg";
import blogSingleImg5 from "/public/images/blog-details/developer2.jpg";
import blogSingleImg6 from "/public/images/blog-details/fashion3.jpg";



const blogs = [
    {
        id: '1',
        title: 'Helpful tips for become a successful designer',
        screens: blogImg1,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Marilou',
        thumb:'Designer',
        create_at: '25 Dec, 2023',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Master These Awesome New Skills in May 2023',
        screens: blogImg2,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Konal',
        thumb:'Developer',
        create_at: '13 Dec,2023',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'We provide solutions growin your business',
        screens: blogImg3,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Aliza',
        thumb:'Fasion',
        create_at: '22 Dec,2023',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
    {
        id: '4',
        title: 'Many desktop publish package editors use.',
        screens: blogImg4,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Biry',
        thumb:'Fasion',
        create_at: '13 Dec,2023',
        blogSingleImg:blogSingleImg4, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '5',
        title: 'The definitive list of digital products you can sell',
        screens: blogImg5,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Sharah',
        thumb:'Developer',
        create_at: '13 Dec,2023',
        blogSingleImg:blogSingleImg5, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '6',
        title: 'Nemo enim ipsam voluptatem quia voluptas.',
        screens: blogImg6,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Maria',
        thumb:'Fasion',
        create_at: '22 Dec,2023',
        blogSingleImg:blogSingleImg6,
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;