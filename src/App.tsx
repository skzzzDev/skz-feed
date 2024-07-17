import { Post } from './components/Post/Post'
import { Header }  from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://cdn.discordapp.com/attachments/1100860577007554631/1190566461249433671/567578.png?ex=6698ccec&is=66977b6c&hm=6bda2a171399e2367e8c51c126be17ebec26c6123d370d36f58efb4b8b21b614&',
      name: 'sKz Dev',
      role: 'Dev Senior'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: '      Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date("2024-07-17 23:21:00")
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://cdn.discordapp.com/attachments/1262597282575155302/1263256637439873177/2c3ea98e5f6c7a39b3acbfcfbbceeaab.jpg?ex=669992ec&is=6698416c&hm=6c701941fefbc0e4bf7a63764dc84f641aa39b9914231f4dc4b0bf8c54c3ad46&',
      name: 'Ice Dev',
      role: 'Dev Junior'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: '      Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date("2024-07-16 23:22:00")
  },

  {
    id: 3,
    author: {
      avatarUrl: 'https://cdn.discordapp.com/attachments/1100860577007554631/1131397870742937762/679666.png?ex=66991920&is=6697c7a0&hm=39dfbc05899719fbf2b998917accdc7dc0dd3ef1cf9365b1eaa6a5fe918384fc&',
      name: 'TH Dev',
      role: 'Dev Pleno'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: '      Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date("2024-07-15 23:23:00")
  },
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}