import contactBG from '../../assets/contact/contactUs.svg'

const Contact = () => {
    return (
        <div className="max-w-[1440px] mx-auto py-20">
            <div>
                <img className='w-full' src={contactBG} alt="" />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center my-10 gap-6 text-white">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold my-5">Get in Touch with Our Divisions: </h2>
                    <hr />
                    <p>
                        <p>Industrial: (880) 1773-827414</p>
                        <p>Residential Real Estate: (880) 1938-322737</p>
                        <p>Commercial Real Estate: (880) 1773-827414</p>
                        <p>Fortis: (880) 1773-827414</p>
                        <p>Richmond Auto Auction: (880) 1773-827414</p>
                        <p>Car-Rac Online Exchange: (880) 1773-827414</p>
                        <p>Accelerated Tax Sales: (880) 1773-827414</p>
                        <p>Appraisals: (880) 1773-827414</p>
                    </p>
                </div>
                <div className="divider bg-white w-1 h-52 my-auto rounded-xl hidden lg:block"></div>
                <div className="lg:w-1/2 md:flex-1">
                    <h2 className="text-2xl font-bold my-5">Welcome to Dream Prime! We look forward to hearing from you!</h2>
                    <hr />
                    <p>
                        Whether you are looking for specific items to buy, or you have assets you d like to sell, you ve come to the right place. For more than, we helping people just like you buy and sell assets successfully and on their terms.
                    </p>
                    <p>
                        Buying? Through national networks and contacts, we can help you find most any asset.
                    </p>
                    <p>
                        Selling? We can appraise your assets and help you sell them at top dollar through traditional sales, accelerated sales, auctions, or consignments. We can also pay cash for assets.
                    </p>
                    <p>
                        Please complete the form below, email us at info@dreamprimeestates.com or give us a call at 804-232-3300. Motleys. The Buying and Selling Marketplace!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;