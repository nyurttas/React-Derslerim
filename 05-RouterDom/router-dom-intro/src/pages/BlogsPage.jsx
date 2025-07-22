import React from 'react'
import PageTitle from '../components/UI/PageTitle'
import BlogImage from '../components/Blog/BlogImage'
import BlogText from '../components/Blog/BlogText'

const BlogsPage = () => {
  return (
    <div className="w-100">
      <PageTitle classes={"bg-warning"} title={"Blogs"} />
        <div className="blog d-flex p-3">
    <BlogImage image={`https://picsum.photos/id/${Math.ceil(Math.random()*250)}/900/600`}/>
      <BlogText/>  
   </div>
<div className="blog d-flex p-3">
<BlogText/>
<BlogImage  image={`https://picsum.photos/id/${Math.ceil(Math.random() * 250)}/900/600`}/>
   
</div>
<div className="blog d-flex p-3">
<BlogImage  image={`https://picsum.photos/id/${Math.ceil(Math.random() * 250)}/900/600`}/>
    <BlogText/>
</div>
<div className="blog d-flex p-3">
<BlogText/>
<BlogImage  image={`https://picsum.photos/id/${Math.ceil(Math.random() * 250)}/900/600`}/>
  
</div>
<div className="blog d-flex p-3">
<BlogImage  image={`https://picsum.photos/id/${Math.ceil(Math.random() * 250)}/900/600`}/>

    <BlogText/>
</div>
<div className="blog d-flex p-3">
<BlogText/>
<BlogImage  image={`https://picsum.photos/id/${Math.ceil(Math.random() * 250)}/900/600`}/>
    
</div>
<div className="blog d-flex p-3">
<BlogImage  image={`https://picsum.photos/id/${Math.ceil(Math.random() * 250)}/900/600`}/>
    <BlogText/>
</div>
    </div>
  )
}
export default BlogsPage
