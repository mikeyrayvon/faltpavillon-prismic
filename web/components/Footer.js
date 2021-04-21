import Container from './Container'

const Footer = () => {
  return (
    <footer className='pt-20 pb-4'>
      <Container>
        <div className='dis-row'>
          <div className='dis-item text-xs'>
            <span>This website uses <a className='underline' href='https://public-sans.digital.gov/'>Public Sans</a>, a font developed by the U.S. Web Design System for use on federal goverment websites.</span>
          </div>
        </div>
      </Container>
    </footer>
  )
};

export default Footer;
