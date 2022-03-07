const Post = ({ post, onDelete }) => {
  return (
    <>
        <div className="row mb-3">
                <div className="col-4">
                    <h4>{post.title}</h4>
                </div>
                <div className="col-8">
                    <button type="button" className="float-end btn btn-secondary" onClick={() => onDelete(post.id)}>Delete Post</button>
                </div>

                <div className="col-12">
                    <p>By {post.user}</p>
                    <p>{post.body}</p>
                </div>
        </div>
    </>
  )
}

export default Post