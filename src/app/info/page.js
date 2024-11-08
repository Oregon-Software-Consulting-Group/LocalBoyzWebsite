export default function page(){
    return(
        <div>

        <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(https://www.hawaiistar.com/wp-content/uploads/2023/08/hawaiian-word-for-food.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1
        }}></div>
            <h1 style={{
                fontSize: '40px', 
                fontFamily: 'freight-text-pro', 
                fontWeight:'bold', 
                padding: '20px', 
                position: 'relative',
                paddingLeft: '245px',
                paddingTop: '150px',
                color: '#FFA07A',
                textShadow: '2px 2px 4px #000000'
            }}>
                Location
            </h1>

            <h2 style={{
                fontSize: '20px',
                paddingLeft: '245px',
                position: 'relative',
                fontFamily: 'freight-text-pro',
                color:'#ECD9BA',
                textShadow: '2px 2px 4px #000000' 
                     
            }}> 
                1425 NW Monroe Ave, <br />
                Corvallis, OR 97330
            </h2>   

            <h1 style={{
                fontSize: '40px',
                paddingLeft: '245px',
                position: 'relative',
                fontFamily: 'freight-text-pro', 
                fontWeight:'bold',
                color: '#FFA07A',
                textShadow: '2px 2px 4px #000000'

            }}>
                Hours
            </h1>

            <h2 style ={{
                fontSize: '25px',
                paddingLeft: '240px',
                position: 'relative',
                fontFamily: 'freight-text-pro',
                paddingTop: '10px',
                color: '#ECD9BA',
                textShadow: '2px 2px 4px #000000'
            }}>
            Monday - 11:00 AM - 8:00 PM  <br />
            Tuesday - 11:00 AM - 8:00 PM  <br />
            Wednesday - 11:00 AM - 8:00 PM  <br />
            Thursday - 11:00 AM - 8:00 PM  <br />
            Friday - 11:00 AM - 8:00 PM  <br />
           </h2>

           <h1 style={{
                fontSize: '40px',
                paddingLeft: '240px',
                position: 'relative',
                fontFamily: 'freight-text-pro', 
                fontWeight:'bold', 
                color: '#FFA07A',
                textShadow: '2px 2px 4px #000000'

            }}>
                Contacts
                    <h2 style ={{
                    fontSize: '25px',
                    paddingLeft: '0px',
                    position: 'relative',
                    fontFamily: 'freight-text-pro',
                    paddingTop: '10px',
                    color: '#ECD9BA',
                    fontWeight: 'normal',
                    textShadow: '2px 2px 4px #000000'
                    
                
                    }}>
                    Phone - (541) 754-5338
                    </h2>
                
            </h1>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the color and opacity as needed
                zIndex: -1
            }}></div>

        </div> 
    );
}



