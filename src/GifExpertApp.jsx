import { useState } from "react"
import { AddCategory, GifGrid } from './components';



export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["finn y jake"]);

  const onAddCategpry = (newCategory)=>{
    
    if (categories.includes(newCategory))return;
    setCategories([newCategory, ...categories])
  }
  


  return (
    <>


    
      <h1>Gif App</h1>
      
    
  <AddCategory onNewCategory={value => onAddCategpry(value)}/>
  

    {categories.map( (category) =>
        (
      <GifGrid key={category} category={category}/>
      )
      
      )}
      
    

   
    </>
  )
}

// O89EZ4Cb5ERIyanxoBq0VZag4Z7BtraT
