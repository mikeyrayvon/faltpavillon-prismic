import Container from './Container'

const Footer = () => {
  return (
    <footer className='py-20'>
      <Container>
        <div className='dis-row'>
          <div className='dis-item mb-4 text-xs'>
            <span>This website uses <a className='underline' href='https://public-sans.digital.gov/'>Public Sans</a>, a font developed by the U.S. Web Design System for use on federal goverment websites.</span>
          </div>
        </div>
      </Container>
    </footer>
  )
};

export default Footer;
