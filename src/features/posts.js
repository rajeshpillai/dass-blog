import React from 'react';

export default function Posts({posts}) {
    return (
        posts.map(post => {
            return (
                <div key={post.id} className="row">
                    <div className="col-md-12">
                        <h2>{post.title}</h2>
                        <div>
                            {post.body}
                        </div>
                    </div>
                </div>
            )
        })
    )
}