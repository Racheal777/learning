import React from 'react'


function Post() {
    return ( 
        <div>
            <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Subject</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.posts.map(function(post,index) {
                   return <tr key={index} >
                            <td>{index+1}</td>
                            <td>{post.title}</td>
                            <td>{post.subject}</td>
                            <td>
                              <span className="glyphicon glyphicon-pencil"></span>
                            </td>
                            <td>
                              <span className="glyphicon glyphicon-remove"></span>
                            </td>
                          </tr>
                }(this))
              }
            </tbody>
</table>
</div>
    )
            
            }

export default Post;