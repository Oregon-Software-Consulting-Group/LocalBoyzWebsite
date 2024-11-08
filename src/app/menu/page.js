export default function MenuPage() {
    return( 
        <div>
            <h1 style={{fontSize: '50px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold', textAlign:'center', padding: '70px'}}>Popular Menu Items</h1>
            
            <div style={{display:'flex', justifyContent: 'space-between', textAlign: 'left', padding: '0 260px', marginBottom:'30 px'}}>
            <h2 style={{fontSize: '30px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold'}}>Sweet Shoyu Chicken</h2>
            <h2 style={{fontSize: '30px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold'}}>Chicken Combo</h2>
            </div>

            <div style={{display:'flex', justifyContent: 'space-between', textAlign: 'left', padding: '0 200px', marginBottom: '200px'}}>
            <h3 style={{fontSize: '20px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold'}}>Sweet Shoyu Chicken or Hawaiian Style Steak <br /> 
            Stir Fry – Either one of our 2 popular meats <br /> stir fried with broccoli, snow peas, cauliflower, <br />and onions in Roy’s special sauce.</h3>

            <h3 style={{fontSize: '20px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold'}}>All three of our chickens on one plate!<br /> Sweet ‘N’ Hot Chicken, Teriyaki Chicken, 
            <br/>and Sweet Shoyu Chicken. 
            <br /> Regular size only. </h3>
            </div>

            <div style={{ display:'flex', justifyContent: 'space-between', textAlign: 'left', padding: '0 260px'}}>

            <h2 style={{fontSize: '30px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold'}}>One Chop Stick</h2>
            <h2 style={{fontSize: '30px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold'}}>Rib Mixed Plate</h2>
            </div>

            <div style={{display:'flex', justifyContent: 'space-between', textAlign: 'left', padding: '0 200px', marginBottom: '200px'}}>
            <h3 style={{fontSize: '20px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold'}}>Steak chopped up and fried on the grill with
            <br/> onions and another one of Roy’s special sauces. 
            <br />Contains MSG and oyster sauce.<br /> </h3>

            <h3 style={{fontSize: '20px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold'}}>½ Kalia’s Sweet Ribs and ½ choice of either  <br />Hawaiian Style Steak or Sweet Shoyu Chicken.</h3>
            </div>

            <h2 style={{fontSize: '30px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold', textAlign:'Left', padding:'0 260px'}}>Hawaiian Style Chicken</h2>
            <div style={{display:'flex', justifyContent: 'space-between', textAlign: 'left', padding: '0 200px', marginBottom: '200px'}}>
            <h3 style={{fontSize: '20px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight: 'bold'}}>Beef marinated in a sauce similar to teriyaki and <br /> grilled on our char broiler. </h3>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <a href="https://www.localboyzhawaiiancafe.com/lbhc23-menu.pdf" target="_blank" style={{display: 'inline-block', fontSize:'50px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold', borderRadius: '10px', textAlign: 'center'}}>VIEW OUR FULL MENU</a>
            </div>
        </div>
    )
}