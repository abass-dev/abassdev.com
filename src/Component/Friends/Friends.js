import profileImg from '../../assets/images/abassdev_story1.png'
const Friends = () => {
  return (
    <div id='friends' className='container-lg'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-center primary-font primary-text mb-4'>Friends</h1>
        </div>
        <FriendsProfile
          img='https://avatars.githubusercontent.com/u/65370456?v=4'
          name='Benaiah Alumona'
          links={[
            {
              githubUrl: 'https://github.com/benrobo',
              website: 'https://www.benrobo.co/',
              xUrl: 'https://x.com/benaiah_al',
            },
          ]}
          about='is a Self-taught Software Enigineer with a passion for thoughtful UI design, collaboration, and building.'
        />
        <FriendsProfile
          img='https://avatars.githubusercontent.com/u/62317165?v=4'
          name='Melvin Jones'
          links={[
            {
              githubUrl: 'https://github.com/mrepol742',
              website: 'https://mrepol742.github.io/',
              xUrl: 'https://x.com/mrepol742',
            },
          ]}
          about='is a self-taught Freelance Software Engineer with experience in web development, seo, computer hardware & software and currently pursuing arduino programming. Committed to make the world a better place to live.'
        />
        <FriendsProfile
          img='https://avatars.githubusercontent.com/u/9353811?v=4'
          name='Franck DAKIA (Papac)'
          links={[
            {
              githubUrl: 'https://github.com/papac',
              website: 'https://papac.dev/',
              xUrl: 'https://twitter.com/papacdev',
            },
          ]}
          about='is a code Learning Club Animator and Creator of Bow Framework, DevOps Lover ❤️'
        />
        <FriendsProfile
          img='https://avatars.githubusercontent.com/u/64565584?v=4'
          name='Melvin Chia'
          links={[
            {
              githubUrl: 'https://github.com/melvinchia3636',
              website: 'https://thecodeblog.net/',
            },
          ]}
          about='is a teenage full-stack web developer and a UI designer with a vision of creativity'
        />
        <FriendsProfile
          img='https://avatars.githubusercontent.com/u/57678715?v=4'
          name='Emichel Dev,'
          links={[
            {
              githubUrl: 'https://github.com/emicheldev',
              xUrl: 'https://x.com/emichel_dev',
            },
          ]}
          about='est un Développeur web freelance'
        />
      </div>
    </div>
  )
}

const FriendsProfile = ({ img, name, links, about }) => {
  return (
    <div className='col-md-4 mb-4 card rounded-0 border-0 shadow'>
      <div className='card-body m-3'>
        <div style={{ marginBottom: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img style={{ borderRadius: 100 }} width='150px' height='auto' alt={name} src={img} />
        </div>
        <p>
          <strong className='primary-text'>{name}</strong> {about}
        </p>
        <div className='d-flex justify-content-between'>
          {links.map((value, index) => {
            return (
              <p key={index}>
                {value.website && (
                  <a href={value.website}>
                    <i style={{ fontSize: 24, marginRight: 16 }} className='fa fa-globe'></i>
                  </a>
                )}
                {value.githubUrl && (
                  <a href={value.githubUrl}>
                    <i style={{ fontSize: 24, marginRight: 16 }} className='fa fa-github'></i>
                  </a>
                )}
                {value.xUrl && (
                  <a href={value.xUrl}>
                    <i style={{ fontSize: 24, marginRight: 16 }} className='fa fa-twitter'></i>
                  </a>
                )}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Friends
