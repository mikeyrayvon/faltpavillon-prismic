import Container from './Container'

const Header = () => {
  return (
    <header className='pt-4 md:pt-8 pb-8'>
      <Container>
        <div className='dis-row'>
          <div className='dis-item mb-4'>
            <h1>Faltpavillon</h1>
          </div>
          <div className='dis-item mb-4'>
            <a className='underline' href='mailto:faltpavillon@protonmail.com'>faltpavillon@protonmail.com</a>
          </div>
        </div>
      </Container>
    </header>
  )
};

export default Header;
