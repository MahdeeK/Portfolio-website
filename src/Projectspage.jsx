import Footer from './components/Footer.jsx'
function Projectspage() {
  return (
    <>
      <ProjectHero />
      <Details />
      <Gallery />
      <Footer />
    </>
  )
}

export default Projectspage

function ProjectHero() {
    return (
        <div className="hero-wrapper">
            <video className="background-video" src="src/assets/pictures/9694807-hd_1920_1080_25fps.mp4" autoPlay loop muted />
            <h1 className="project-title">ROCKSTEADY WEBSITE REDESIGN</h1>
        </div>
    )
}

function Details() {
    return (
        <section className="details-grid">
            <div className="key-stats">
                <ul>
                    <li>Project Type: UI/UX Design</li>
                    <li>Date Completed: 12/09/2024</li>
                    <li>Time Taken: ~1 Week</li>
                    <li>Number of Pages: 4</li>
                </ul>
            </div>
            <div className="description-wrapper">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et minima quasi id doloremque reiciendis recusandae, incidunt repellat numquam, fugit ducimus reprehenderit enim vitae sint voluptatum atque in molestiae nisi.
                Reiciendis eveniet voluptatum dignissimos atque aliquam eaque cupiditate! Modi dolor asperiores eos cum placeat iure, recusandae quam ex ea. Eius sapiente animi rem ad dolorum libero obcaecati delectus, veritatis explicabo.
                Id deleniti at consequuntur, officia totam fugiat, nisi, aut ipsum quos iure saepe dignissimos asperiores magni adipisci itaque velit ad. Saepe vitae illo quo quod ducimus perspiciatis deleniti repudiandae laboriosam.
                Expedita ratione voluptas iusto odit consequuntur cumque similique, rem minus natus facere obcaecati consequatur sed. Repellat, assumenda. Laudantium enim ducimus ut distinctio similique veniam, minima itaque voluptatum voluptate doloremque voluptas!
                Ut neque aut impedit repellendus doloribus eligendi error voluptates modi voluptatem ea ullam quae rerum cumque, sunt incidunt recusandae, similique, eius reiciendis fugiat necessitatibus. Corporis labore ducimus incidunt perspiciatis libero?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nemo quae architecto dolore modi ducimus animi ea ipsam. Quidem recusandae voluptates obcaecati doloremque a repudiandae corrupti incidunt unde asperiores veniam.
                Unde est laborum tempora, assumenda laboriosam repudiandae mollitia delectus? Numquam possimus repellat voluptates impedit molestias consequatur ducimus placeat odio maxime eveniet facere sit laboriosam eaque itaque, dolorem inventore fuga! Culpa.
                Laborum dicta illum excepturi facilis, aperiam iste harum, sint at id eligendi sequi explicabo non ratione impedit ad, ullam placeat? Laborum incidunt architecto ab magnam labore hic, ipsum eius omnis.
                Tempora enim soluta accusamus veniam assumenda, ullam cumque nihil. Quo accusantium neque, blanditiis quisquam, unde corporis quasi dolorum ullam cum ut maiores iusto quibusdam, voluptates illo possimus commodi quas itaque?</p>
            </div>
        </section>
    )
}

function Gallery() {
    return (
        <div className="gallery-wrapper">
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
            <img src="src/assets/pictures/Ghost-of-Tsushima-Key-Art.avif" alt="" className="gallery-image" />
        </div>
    )
}