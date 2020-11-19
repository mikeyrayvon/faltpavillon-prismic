import Container from './Container'

const Header = () => {
  return (
    <header className='pt-8 pb-8'>
      <Container>
        <div className='flex flex-wrap -mx-8'>
          <div className='w-full md:w-1/2 px-8 mb-4'>
            <h1>Faltpavillon</h1>
          </div>
          <div className='w-full md:w-1/2 px-8 mb-4'>
            <a className='underline' href='mailto:faltpavillon@protonmail.com'>faltpavillon@protonmail.com</a>
          </div>
        </div>
      </Container>
    </header>
  )
};

export default Header;
