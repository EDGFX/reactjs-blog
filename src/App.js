import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './components/Header'
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import { useState } from 'react'



function App() {

  const [posts, createPosts] = useState([
    {
        id: 1,
        title: 'Title',
        user: 'Username',
        body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolores, velit est blanditiis, quo ducimus voluptatum fuga ipsum laboriosam quidem ut magni veritatis, optio neque quas tempora quisquam nihil ab'
    },
    {
        id: 2,
        title: 'Title',
        user: 'Username',
        body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolores, velit est blanditiis, quo ducimus voluptatum fuga ipsum laboriosam quidem ut magni veritatis, optio neque quas tempora quisquam nihil ab'
    },
    {
        id: 3,
        title: 'Title',
        user: 'Username',
        body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolores, velit est blanditiis, quo ducimus voluptatum fuga ipsum laboriosam quidem ut magni veritatis, optio neque quas tempora quisquam nihil ab'
    }
  ])

  const addPost = (post) => {

    const id = Math.floor(Math.random() * 10000) + 1

    const newPost = { id, ...post }
    createPosts([...posts, newPost])
  }

  const deletePost = (id) => {
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
