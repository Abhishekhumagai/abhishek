const Movie = [{
   name: "Abhi",
   mname: "sulta"
},
{
   name: "Samir",
   mname: "ABCD",
}
   ,
{
   name: "lama",
   mname: "XXX",
}
];
let i = 0;
let arrlen = Movie.length - 1;
console.log("movie A")
for (i = arrlen; i >= 0; i--) {
   console.log(Movie[i].name);
   console.log(Movie[i].mname);

}
console.log("movie b")
for (i = 0; i <= arrlen; i++) {
   console.log(Movie[i].name);
   console.log(Movie[i].mname);

}

Movie.forEach(element => {
   console.log(element);
});
const{name,mname}=Movie[1];
   console.log(mname);

   const Student ={
      ...Movie,
   }
   console.log(Student.mname);
