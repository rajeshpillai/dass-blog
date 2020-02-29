import React from 'react';
import {NavLink} from 'react-router-dom';

import './posts.css';

export default function Posts({posts}) {
    return (
        posts.map(post => {
            return (
                <div key={post.id} className="row post">
                    <div className="col-md-12">
                        <h2 className="post-header">
                            <NavLink to={`/posts/${post.id}/read`}>{post.title}</NavLink>
                        </h2>
                        <div className="post-body">
                            {post.body.substr(0,140)}...
                        </div>
                    </div>
                </div>
            )
        })
    )
}