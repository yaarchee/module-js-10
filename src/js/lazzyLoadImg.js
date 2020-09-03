const options = {
  rootMargin: '100px',
}
const onEntry = (entries, observer) =>{

  entries.forEach(entry =>{

    if(entry.isIntersecting){

      entry.target.src =  entry.target.dataset.img;

      observer.unobserve(entry.target);
    }
  })
}



const  io = new IntersectionObserver(onEntry, options);


export default io;

