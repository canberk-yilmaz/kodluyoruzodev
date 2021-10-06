const blogPosts = [
    {
        id: 1,
        author: 'Canberk Yilmaz',
        header: 'How to shoot good photos'
    },
    {
        id: 2,
        author: 'Canberk Yilmaz',
        header: 'B&W Photo Technique\'s'
    },
    {
        id: 3,
        author: 'Canberk Yilmaz',
        header: 'Tricks That Will Help You With Your Instagram Follower Count'
    }
]
//console.log(blogPosts);

const listPosts = () => {
    const posts = blogPosts.map(post => {
        console.log(`${post.id}-${post.header}`);
    })
}

const addNewPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        blogPosts.push(newPost);
        resolve(blogPosts)
    })
    return blogPosts;
};

async function showBlogPosts() {
    await console.log(('Old List'))
    await listPosts();

    try {
        await addNewPost({
            id: 4,
            author: 'Canberk Yilmaz',
            header: 'What\'s In My Camera Bag'
        })
        console.log('New List')
        listPosts();
    } catch (err) {
        console.error(err);
    }
}

showBlogPosts();