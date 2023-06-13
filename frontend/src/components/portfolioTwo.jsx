import fondoPortfolio from '../../src/img/fondoPortfolio.png'

const PortfolioTwo = () => {
  return (
    <>
        <div className="">
            <h2 className="text-lg uppercase text-center px-4 mx-4 mt-20 font-bold md:mx-44 md:text-3xl">Unleash Technological Exchellence with AM Deluxy</h2>
            <h3 className="text-base text-center px-4 mx-4 md:mx-44 md:text-lg">Harness the power of customized and innovative software development solutions to elevated
                your business potensial.
            </h3>
            <div className="m-auto pb-6 px-4">
                <img
                    className="block w-auto m-auto"
                    src={fondoPortfolio} 
                    alt="AM Deluxy - Development apps Android photo"
                />
            </div>
        </div>
    
    </>
  )
}

export default PortfolioTwo