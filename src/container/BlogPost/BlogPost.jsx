import React, {Component} from "react";
import Post from "../../component/BlogPost/Post";
import './BlogPost.css'

class BlogPost extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            listArtikel: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response => Response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listArtikel: jsonHasilAmbilDariAPI
            })
        })
    }

    render() {
        return(
            <div class="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}/> 
                    })
                }
            </div>
        )
    }
}

export default BlogPost;