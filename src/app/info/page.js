export default function page(){
    return(
        <div>

        <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(https://cdn.discordapp.com/attachments/1296559019854401647/1301728311277387827/exotic-tropical-vrctor-background-hawaiian-600nw-597263075.jpg?ex=67258876&is=672436f6&hm=54c4a7ba8905260123c20531b35693f6d27f415e70a45fd8c16a4b0117abe501&)',
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
                paddingLeft: '150px',
                paddingTop: '50px',
                color: 'pink'
            }}>
                Location
            </h1>

            <h2 style={{
                fontSize: '20px',
                paddingLeft: '150px',
                position: 'relative',
                fontFamily: 'freight-text-pro'        
            }}> 
                1425 NW Monroe Ave, <br />
                Corvallis, OR 97330
            </h2>   

            <h1 style={{
                fontSize: '40px',
                paddingLeft: '150px',
                position: 'relative',
                fontFamily: 'freight-text-pro', 
                fontWeight:'bold', 

            }}>
                Hours
            </h1>

            <h2 style ={{
                fontSize: '25px',
                paddingLeft: '150px',
                position: 'relative',
                fontFamily: 'freight-text-pro',
                paddingTop: '10px',
                color: 'orange'
            }}>
            Monday - 11:00 AM - 8:00 PM  <br />
            Tuesday - 11:00 AM - 8:00 PM  <br />
            Wednesday - 11:00 AM - 8:00 PM  <br />
            Thursday - 11:00 AM - 8:00 PM  <br />
            Friday - 11:00 AM - 8:00 PM  <br />
           </h2>

           <h1 style={{
                fontSize: '40px',
                paddingLeft: '150px',
                position: 'relative',
                fontFamily: 'freight-text-pro', 
                fontWeight:'bold', 

            }}>
                Contacts
                    <h2 style ={{
                    fontSize: '25px',
                    paddingLeft: '0px',
                    position: 'relative',
                    fontFamily: 'freight-text-pro',
                    paddingTop: '10px',
                    color: 'orange',
                    fontWeight: 'normal'
                
                    }}>
                    Phone - (541) 754-5338
                    </h2>
                
            </h1>

            


        </div> 
    );
}



