import NavBar from "../navbar/NavBar";

export default function MenuPage() {
    return( 
        <div>
            <NavBar/>  {/* Sidebar component added here */}
            
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(https://img.freepik.com/free-psd/realistic-flower-frame-element-isolated_23-2150355192.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1
            }}></div>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the color and opacity as needed
                zIndex: -1
            }}></div>
        
            <h1 style={{fontSize: '50px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold', textAlign:'center', padding: '70px', color: '#FFA07A', textShadow: '2px 2px 4px #000000', paddingTop: '5px' }}>Popular Menu Items</h1>
            
            <div style={{display:'flex', justifyContent: 'space-between', textAlign: 'left', padding: '0 260px', marginBottom:'30px'}}>
                <h2 style={{fontSize: '30px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold', color: '#FFA07A', textShadow: '2px 2px 4px #000000'}}>Sweet Shoyu Chicken</h2>
                <h2 style={{fontSize: '30px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold', color: '#FFA07A', textShadow: '2px 2px 4px #000000', paddingRight: '35px'}}>Chicken Combo</h2>
            </div>

            <div style={{display:'flex', justifyContent: 'space-between', textAlign: 'left', padding: '0 200px', marginBottom: '200px', color:'#ECD9BA'}}>
                <h3 style={{fontSize: '20px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold', color:'#ECD9BA'}}>Sweet Shoyu Chicken or Hawaiian Style Steak <br /> 
                Stir Fry – Either one of our 2 popular meats <br /> stir fried with broccoli, snow peas, cauliflower, <br />and onions in Roy’s special sauce.</h3>

                <h3 style={{fontSize: '20px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold'}}>All three of our chickens on one plate!<br /> Sweet ‘N’ Hot Chicken, Teriyaki Chicken, 
                <br/>and Sweet Shoyu Chicken. 
                <br /> Regular size only. </h3>
            </div>

            <div style={{ display:'flex', justifyContent: 'space-between', textAlign: 'left', padding: '0 260px'}}>

                <h2 style={{fontSize: '30px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold', color: '#FFA07A',textShadow: '2px 2px 4px #000000', paddingLeft:'25px' }}>One Chop Stick</h2>
                <h2 style={{fontSize: '30px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold', color: '#FFA07A', textShadow: '2px 2px 4px #000000', paddingRight: '75px'}}>Rib Mixed Plate</h2>
            </div>

            <div style={{display:'flex', justifyContent: 'space-between', textAlign: 'left', padding: '0 200px', marginBottom: '200px'}}>
                <h3 style={{fontSize: '20px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold', color:'#ECD9BA'}}>Steak chopped up and fried on the grill with
                <br/> onions and another one of Roy’s special sauces. 
                <br />Contains MSG and oyster sauce.<br /> </h3>

                <h3 style={{fontSize: '20px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold', color:'#ECD9BA'}}>½ Kalia’s Sweet Ribs and ½ choice of either  <br />Hawaiian Style Steak or Sweet Shoyu Chicken.</h3>
                
            </div>

         

            <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '50px'}}>
                <a href="https://www.localboyzhawaiiancafe.com/lbhc23-menu.pdf" target="_blank" style={{display: 'inline-block', fontSize:'50px', fontFamily: 'papyrus, charcoal, fantasy', fontWeight:'bold', borderRadius: '10px', textAlign: 'center', color: '#FFA07A', textShadow: '2px 2px 4px #000000'}}>VIEW OUR FULL MENU</a>
            </div>
        </div>
    )
}
