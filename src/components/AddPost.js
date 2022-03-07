import { useState } from 'react'

const AddPost = ({ onAdd }) => {

    const [user, setUser] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({ user, title, body })

        setUser('')
        setTitle('')
        setBody('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-2">
                <select className="form-select" aria-label="User select" value={user} onChange={(e) => setUser(e.currentTarget.value)}>
                    <option defaultValue>Select the user</option>
                    <option value="Leanne Graham">1 - Leanne Graham</option>
                    <option value="Ervin Howell">2 - Ervin Howell</option>
                    <option value="Clementine Bauch">3 - Clementine Bauch</option>
                </select>
            </div>
            <div className="mb-2">
                <label for="postTitle" className="form-label">Post Title</label>
                <input type="text" className="form-control" id="postTitle" aria-describedby="Help" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="contentInput" className="form-label">Blog Post</label>
                <textarea className="form-control" id="contentInput" rows="3" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            </div>

            <div>
                <button type="submit" className="btn btn-primary">New Post</button>
            </div>
        </form>
    )
}

export default AddPost