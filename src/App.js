import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './components/Header'
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import { useState, useEffect } from 'react'



function App() {
  


  const [posts, createPosts] = useState([])

  useEffect(() => {

    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      createPosts(postsFromServer)
    }

    getPosts()
  }, [])

  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    const data = await res.json()

    return data
  }

  const addPost = async (post) => {


    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(post)
    })

    const data = await res.json()

    createPosts([...posts, data])

  //  const id = Math.floor(Math.random() * 10000) + 1

  //  const newPost = { id, ...post }
  //  createPosts([...posts, newPost])
  }

  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
    {
      method: 'DELETE',
    });


    createPosts(posts.filter((post) => post.id !== id))
  }

  return (
    <>
    <Container>
      <Row>
        <Col md="6" className="mb-3">
          <Header title="React Blog" />
          <AddPost onAdd={addPost} />
        </Col>
        <Col md="6" className="p-3">
          <Posts posts={posts} onDelete={deletePost} />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
