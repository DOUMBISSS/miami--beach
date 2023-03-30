import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCatArticlesSmart, getCateSmart } from "../Redux/actions";



export default function Filter ({setBrand,brand,cat,setCat}){
    const dispatch = useDispatch();
    const categoryArticles = useSelector(state=>state.categoryReducer.categoryArticles);


    const FilterResult = (catItem)=>{
        const result = categoryArticles.filter((categoryArticle)=> {
            return categoryArticle.category === catItem
        })
        setCat(result)
        console.log(result)

    }

        
        // const handleSearch = (catItem)=>{
        //     const result = categoryArticles.filter((categoryArticle) =>  categoryArticle.categorie === categoryArticle.categorie)
        //     setCat(result);

        //     console.log(result)
        // }
        // const handleCat = (event)=>{
        //     setBrand(event.target.value)
        // }
        // const handleBrand = (event)=>{
        //     setBrand(event.target.value)
        // }


        useEffect(() => {
            fetch('http://127.0.0.1:5000/products')
            .then((res)=>res.json())
            .then((categoryArticles)=>{dispatch(getCatArticlesSmart(categoryArticles))
            })
            .catch(e => { console.log(e)})
            }, [])
    

    return (
        <div>
             <div className="filter--container">
            <h4>Filter par categorie</h4>
            <h6>{categoryArticles.length} produit(s)</h6>

            <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>FilterResult('Batterie')}>Batteries</button>         
            </div>
            <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>FilterResult('Ecran')}>Ecrans</button>         
            </div>
            <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>FilterResult('Chargeur')}>Chargeurs</button>         
            </div>
            <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>FilterResult('Connecteur')}>Connecteurs</button>         
            </div>
            <div className="col-3 col-md-12">
                    <button className="btn__filter" onClick={()=>FilterResult('All')}>All</button>         
            </div>
            {/* <button className="btn__search" type="submit" onClick={handleSearch}>Recherche</button> */}
                </div>
        </div>
    );
}