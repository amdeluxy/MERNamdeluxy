import { createContext, useEffect, useState } from "react";
import clientAxios from "../config/clientAxios";
import { useNavigate } from "react-router-dom";

const PostContext = createContext();

const PostProvider = ({children}) => {

    const [post, setPost] = useState('')
    const [alerta, setAlerta] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clientAxios('/post', config)
                setPost(data)

            } catch (error) {
                console.log(error);
            }
        }
        getPosts()
    }, [])

    const getPost = async _id => {
        // console.log(_id);
        try {
            const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
            const { data } = await clientAxios(`/post/${_id}`, config)
            setPost(data)
        } catch (error) {
            console.log(error);
        }
    }

    const showAlert = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 5000);
    }

    const submitPost = async post => {
        try {
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clientAxios.post('/post', post)
            console.log(data);

            setAlerta({
                msg: 'Thanks for the New Post',
                error: false
            })
            setTimeout(() => {
                setAlerta({})
                navigate('blog')
            }, 5000);

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <PostContext.Provider
            value={{
                post,
                showAlert, 
                alerta,
                submitPost,
                getPost
            }}
        >{children}
        </PostContext.Provider>
        
    )

}
export{
    PostProvider
}
export default PostContext