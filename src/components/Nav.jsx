import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom";
import { getCatArticlesSmart, getCateSmart } from "../Redux/actions";



export default function Nav () {
    const dispatch = useDispatch();
    const categories = useSelector(state=>state.categoryReducer.categories);

    // useEffect(() => {
    //     fetch('http://127.0.0.1:5000/categories')
    //     .then((res)=>res.json())
    //     .then((categories)=>{dispatch(getCateSmart(categories))
    //     })
    //     .catch(e => { console.log(e)})
    //     }, [categories])

        // let slug = useParams().slug;

        
        // useEffect(() => {
        //     fetch(`http://127.0.0.1:5000/category/${slug}`)
        //     .then((res)=>res.json())
        //     .then((categoryArticles)=>{dispatch(getCatArticlesSmart(categoryArticles))
        //     })
        //     .catch(e => { console.log(e)})
        //     }, [slug])

    return (
        <div>
            <div className="container">
                <div className="nav">
                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">Catégories</button>
                        <ul class="dropdown-menu">
                            {categories.map((categorie,i) => <li key={i}><Link to={`/category/${categorie.name}`}><button class="dropdown-item" type="button">{categorie.name}</button></Link></li>)}
                        </ul>
                        </div>
                </div>
            </div>
        </div>
    )
}