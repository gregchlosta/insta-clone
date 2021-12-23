import Post from './Post'

const POSTS = [
  {
    id: '1',
    username: 'greg',
    userImg:
      'https://lh3.googleusercontent.com/ogw/ADea4I76Q-SDgTSHa-wldtLHkCmsu9rH7Qh4uhGjKnrZdA=s83-c-mo',
    img: 'https://images.cdn.circlesix.co/image/1/700/0/uploads/media/2020-02/14/d363e6c380150fe0/img_1138_ca.jpg',
    caption: 'Caption text',
  },
  {
    id: '2',
    username: 'greg',
    userImg:
      'https://lh3.googleusercontent.com/ogw/ADea4I76Q-SDgTSHa-wldtLHkCmsu9rH7Qh4uhGjKnrZdA=s83-c-mo',
    img: 'https://images.cdn.circlesix.co/image/1/700/0/uploads/media/2020-02/14/d363e6c380150fe0/img_1138_ca.jpg',
    caption: 'Caption text',
  },
]

export default function Posts() {
  return (
    <div>
      {POSTS.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
