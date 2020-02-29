import React from 'react';

export default function Read(props) {
    const {post} = props;
    return (
        <div className="row">
            <div className="col-md-12">
                <h2>{post.title}</h2>
                <div>
                    {post.body}
                </div>
            </div>
        </div>
    )
}