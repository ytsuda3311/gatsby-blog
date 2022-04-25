import React from "react";
import "../styles/post-link.css"
import { Link } from "gatsby";

// const RANDOM_IMG = "https://source.unsplash.com/random/640x360";

export default function PostLink({ post }) {
    const { title, updatedAt, image } = post;
    const description = post.description.description;
    const pageLink = `/post/${post.slug}/`

    return (
        <Link to={pageLink} className="post-link-anchor">
            <div className="post-link">
                <div>
                    {/* <img src={RANDOM_IMG} className="post-link-image" alt="post-cover"></img> */}
                    <img src={image.file.url} className="post-link-image" alt="post-cover"></img>
                </div>
                {/* <div className="post-link-text">
                    <h2>Gatsbyでブログを作成してみた</h2>
                    <p className="post-link-body">先日、爆速なサイトを作れると噂のReact製フレームワークのGatsbyを学んでみました。</p>
                    <p className="post-link-date">2022年4月11日</p>
                </div> */}
                <div className="post-link-text">
                    <h2>{title}</h2>
                    <p className="post-link-body">{description}</p>
                    <p className="post-link-date">{updatedAt}</p>
                </div>
            </div>
        </Link>
    )
}